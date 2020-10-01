import React, { useState, useEffect } from 'react'

import Header from '../../components/Header'

import NavBar from '../../components/StatisticsComponents/navBar/NavBar'
import SideBar from '../../components/StatisticsComponents/sideBar/SideBar'
import Slider from '../../components/StatisticsComponents/slider/Slider'
import Export from '../../components/StatisticsComponents/export'
import Graphs from './Graphs'
import Title from '../../components/General/Title/Title'
import Text from './Text'

import {statisticsEnum, labels, egressos, evadidos, labelTags, labelsAtivos} from './util'

import api from '../../services/api.js';

import './style.css'

const Statistics = () => {

    const [option, setOption] = useState(statisticsEnum.Discentes);
    const [optionSide, setOptionSide] = useState(statisticsEnum.Discentes[0]);

    const [min, setMin] = useState(0);
    const [max, setMax] = useState(17);
    const [data, setData] = useState([]);
    const [dataMaster, setDataMaster] = useState([]);
    const [type, setType] = useState("ativos");
    const [label, setLabel] = useState([]);

    const handleOption = (newOption) => {
        setOption(statisticsEnum[newOption])
        setOptionSide(statisticsEnum[newOption][0])
    }

    const handleOptionSide = (newOption) => {
        if(newOption === 'Egressos'){
            setLabel(labels);
            setType("egressos")
            setCategoria("egressos", min, max)
        }
        else if(newOption === 'Evadidos'){
            setLabel(labels);
            setType("evadidos")
            setDataMaster(evadidos.periodos)
            setData(evadidos.periodos)
        }
        else if(newOption === 'Ativos'){
            setLabel(labelsAtivos);
            setCategoria("ativos", min, max)
            setType("ativos")
        }
        setOptionSide(newOption);
    }

    const handleSlider = (min, max) => {      
        setMin(min);
        setMax(max);

        if(type==='ativos'){
            setData(getDataAtivos(dataMaster, label[min], label[max]));
        } else if(type === 'egressos'){
            setCategoria(type, min, max)
        } else if(type === 'evadidos'){
            setData(dataMaster.slice(min, max+1))
        }
    }

    /**
     * Método responsavel por pegar o conjunto de dados para Ativos de acordo com o parametro fornecido do slider.
     * @param {Object} dataMaster
     * @param {String} start 
     * @param {String} end 
     */
    const getDataAtivos = (dataMaster, start, end) => {
        let alunos = [];
        dataMaster.map(e => e.periodo_ingresso >= start && e.periodo_ingresso <= end ? alunos.push(e) : null);
        const aux = alunos;

        return aux;
    }

    /**
     * Metodo responsavel por pegar o label certo para cada gráfico
     * @param {Object} data 
     * @param {String} categoria - Pode ser ativos, egressos, evadidos ou retidos 
     */
    const getLabel = (data, categoria) => {
        const aux = new Set();
        const newLabel = [];

        if( categoria == 'ativos'){
            data.forEach(e => {
                aux.add(e.periodo_ingresso); // montando o novo label com elementos unicos.
            });
        }else{
            // modificar para quando tiver perssonalizando os labels dos outros campos (egressos, retidos ....)
            return label
        }
        
        // copiando os dados do Set para uma Lista
        aux.forEach(e => newLabel.push(e));
        console.log("aux label", aux);
        console.log("Novo label:",newLabel);
        return newLabel;
    }

    useEffect(() => {
        // Operacao ternaria para gerenciar a query
        let query = type=='ativos' ? type : type + "?" + "de=" + labels[min] + "&" + "ate=" + labels[max];
        console.log(query);
        api.get('api/estatisticas/' + query, {})
        .then(res => {
            setData(res.data);
            setDataMaster(res.data);
            setLabel(getLabel(res.data, type));
            console.log("aqui",label)
        })
        .catch(error => {
            console.log(error)
        })
    },[])

    const setCategoria = async (categoria, min, max) => {
        // Operacao ternaria para gerenciar a query
        let query = categoria == 'ativos' ? categoria : categoria + "?" + "de=" + labels[min] + "&" + "ate=" + labels[max];

        const res = await api.get('api/estatisticas/' + query, {});
        
        if(res){
            setData(res.data);
            setDataMaster(res.data);
            setLabel(getLabel(res.data, categoria));
        }else{
            console.log(res.statusText)
        }
    }
     
    

    
    return(
        <React.Fragment>
            <Header></Header>
            <div className={'mainStatistics'}>
                <Title name={"Estatísticas"}/> 
                <div className={'contentStatistics'}>
                    <NavBar changeOption={handleOption} listEnum={statisticsEnum}/>
                    <div className={'modelStatistics'}>
                        <div className={'listStatistics'}>
                            <SideBar changeOption={handleOptionSide} listOption={option}/>
                            <div className={'compStatistics'}>
                                <Slider min={min} max={max} changeSlider={handleSlider} labels ={label}/>
                                <Graphs min={min} max={max} data={data} option={optionSide} labels={labelTags}/>
                                <Text min={labels[min]} max={labels[max]} data={data}/>
                                <Export type={type} data={data}/>
                                <br/>
                                <br/>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Statistics;