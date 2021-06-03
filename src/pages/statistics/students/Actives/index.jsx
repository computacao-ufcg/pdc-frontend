import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

import Header from "../../../../components/Header";
import ActiveSlider from "./Slider";
import ActiveGraph from "./Graph";
import Export from "../../../../components/Export";

import { api_EB } from "../../../../services/api";

import "./styles.css";

const Actives = () => {
  const [dataActives, setDataActives] = useState([]);
  const [dataExport, setDataExport] = useState([]);
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(0);
  const [label, setLabel] = useState([]);

  const [loading, setLoading] = useState(true);

  const history = useHistory();

  const handleSlider = (min, max) => {
    setMin(min);
    setMax(max);
  };

  const fetchDataApiWithLabel = async (min, max) => {
    const queryActives = `/statistics/students/actives?from=${
      label[min] || min
    }&to=${label[max] || max}`;
    const queryActivesCSV = `/statistics/students/actives/csv?from=${
      label[min] || min
    }&to=${label[max] || max}`;

    const token = sessionStorage.getItem("eureca-token");

    const options = {
      headers: {
        "Authentication-Token": token,
      },
    };

    const resActives = await api_EB.get(queryActives, options);
    const resActivesCSV = await api_EB.get(queryActivesCSV, options);

    if (resActives.status === 200) {
      setDataActives(resActives.data.terms);
    } else {
      console.log("Error Data Ativos");
    }

    if (resActivesCSV.status === 200) {
      setDataExport(resActivesCSV.data);
    } else {
      console.log("Error Data Export");
    }
  };

  useEffect(() => {
    const fetchDataApiWithoutLabel = async () => {
      await fetchDataApiWithLabel("1950.0", "2049.2");
    };

    fetchDataApiWithoutLabel();
    if (dataActives) {
      setLoading(false);
    }
  }, []);

  return (
    <div className='main-container'>
      <Header></Header>
      {loading ? (
        <h1>Carregando...</h1>
      ) : (
        <div className='main-actives'>
          <div className='backdot'>
            <span onClick={() => history.goBack()}>
              <FiArrowLeft size={25} />
            </span>
          </div>
          <div className='actives-title'>Ativos</div>
          <div className='actives-graph-box'>
            <div onMouseUp={() => fetchDataApiWithLabel(min, max)}>
              <ActiveSlider
                changeSlider={handleSlider}
                labels={label}
                min={min}
                max={max}
              />
            </div>
            <ActiveGraph data={dataActives} />
            <div className='main-actives-export'>
              <Export data={dataExport} name={"Actives"} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Actives;