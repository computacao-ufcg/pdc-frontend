import React, { useState } from 'react';

import Header from '../../../newComponents/Header';
import MyLoading from '../../../newComponents/MyLoading';

import './styles.css';

import { api_AS } from './../../../services/api'
import ListEgressos from '../SeeMore/listEgressos'
import { Pagination } from 'rsuite';
import { FiSearch } from 'react-icons/fi';
import './styles.css'

const SeeMore = () => {

    const [data, setData] = useState([]);
    const [page, setPage] = useState(0);
    
    const [name, setName] = useState("");
    const [admission, setAdmission] = useState("");
    const [graduation, setGraduation] = useState("");

    const [searchType, setSearchType] = useState('');
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState(true);


    const handleProfile = async (page, name, admission, graduation) => { 
        setLoading(true);
        let query = `match/search/${page}?admission=${admission}&graduation=${graduation}&name=${name}`;
        const res = await api_AS.get(query, { headers: { 'Authentication-Token': sessionStorage.getItem('eureca-token') } });

        if (res.status === 200) {
            setData(res.data.content);
            setLoading(false);
            setSearch(false);
        } else {
            console.error("Response error");
        }
    }

    const handlePage = (eventKey) => {
        setPage(eventKey - 1);
        handleProfile(eventKey - 1, name, admission, graduation);
    }

    const handleSearch = () => {
        const $iptName = document.getElementById("ipt-name");
        const $iptAdmission = document.getElementById("ipt-admission");
        const $iptGraduation = document.getElementById("ipt-graduation");
        setName($iptName.value);
        setAdmission($iptAdmission.value);
        setGraduation($iptGraduation.value);
        handleProfile(page, $iptName.value, $iptAdmission.value, $iptGraduation.value);
    }

    return (

        <React.Fragment>
            <div className="main-content">
                <Header></Header>
                <div className="main-seemore">
                        <div className={'container-title-seemore'}>
                            <h1>VER MAIS</h1>
                        </div>
                        <div className="seemore-input-boxes">
                            <div className="seemore-input-box" onClick={() => setSearchType("name")}>
                                <div>
                                    <FiSearch size={25} />
                                </div>
                                <input id="ipt-name" type="text" placeholder="Buscar por nome" />
                            </div>
                            <div className="seemore-input-box" onClick={() => setSearchType("admission")}>
                                <div>
                                    <FiSearch size={25} />
                                </div>
                                <input id="ipt-admission" type="text" placeholder="Buscar por período de admissão" />
                            </div>
                            <div className="seemore-input-box" onClick={() => setSearchType("graduation")}>
                                <div>
                                    <FiSearch size={25} />
                                </div>
                                <input id="ipt-graduation" type="text" placeholder="Buscar por período de graduação" />
                            </div>
                            <button onClick={handleSearch}>Buscar</button>
                        </div>
                        {
                            search ? <React.Fragment /> :

                            loading ? <MyLoading /> :
                                <div className={'listEgressos'}>
                                    <ListEgressos listData={data} />
                                    <hr></hr>
                                    <Pagination
                                        pages={data.totalPages}
                                        maxButtons={5}
                                        onSelect={handlePage}
                                        activePage={page + 1}
                                        prev
                                        next
                                        first
                                        last
                                        ellipsis
                                        boundaryLinks
                                    />
                                </div>
                        }
                    </div>
            </div>
        </React.Fragment>
    );
}

export default SeeMore
