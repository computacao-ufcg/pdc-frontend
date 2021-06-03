import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import { FiArrowLeft } from "react-icons/fi";

import Header from "../../../../components/Header";
import DropoutSlider from "./Slider";
import DropoutGraph from "./Graph";
import Export from "../../../../components/Export";

import { api_EB } from "../../../../services/api";

import "./style.css";

const Dropout = () => {
  const [dataEgressos, setDataEgressos] = useState(null);
  const [min, setMin] = useState("");
  const [max, setMax] = useState("");
  const [dataCSV, setDataCSV] = useState([]);

  const history = useHistory();

  useEffect(() => {
    updateGraph("1996.1", "2020.1");
    handleCSV("1996.1", "2020.1");
  }, []);

  const handleSlider = (min, max) => {
    setMin(min);
    setMax(max);
    updateGraph(min, max);
    handleCSV(min, max);
  };

  const updateGraph = async (min, max) => {
    let query = `/statistics/students/dropouts?from=${min}&to=${max}`;

    const res = await api_EB.get(query, {
      headers: {
        "Authentication-Token": sessionStorage.getItem("eureca-token"),
      },
    });

    if (res) {
      setDataEgressos(res.data);
    } else {
      console.error(res.statusText);
    }
  };

  const handleCSV = async (min, max) => {
    let query = `/statistics/students/dropouts/csv?from=${min}&to=${max}`;

    const res = await api_EB.get(query, {
      headers: {
        "Authentication-Token": sessionStorage.getItem("eureca-token"),
      },
    });

    if (res) {
      setDataCSV(res.data);
    } else {
      console.error(res.statusText);
    }
  };

  return (
    <React.Fragment>
      <Header />
      <div className='dropout-main'>
        <div className='dropout-content'>
          <div className='backdot'>
            <span onClick={() => history.goBack()}>
              <FiArrowLeft size={25} />
            </span>
          </div>
          <div className='dropout-slider'>
            <div className='dropout-title'>Evadidos</div>
            <DropoutSlider changeSlider={handleSlider} />
            <DropoutGraph data={dataEgressos} />
            <Export data={dataCSV} name={"dropout"} />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Dropout;
