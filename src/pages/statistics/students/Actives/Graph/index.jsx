import React, { useEffect, useState } from "react";

import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  AreaChart,
  Area,
} from "recharts";

import MySwitch from "../MySwitch";

import "./style.css";

import { data } from "../activeUtil";

const ActivesGraph = props => {
  const [tags, setTags] = useState([]);

  useEffect(() => {
    setTags(
      data.map((tag, index) => {
        return {
          select: true,
          id: index,
          name: tag.name,
          value: tag.value,
          color: tag.color,
          valueTranslate: tag.valueTranslate,
        };
      })
    );
  }, []);

  const handleCheck = (data, event) => {
    let checked = event.target.checked;
    let name = event.target.name;
    let newTags = [];

    if (name === "all") {
      newTags = tags.map(d => {
        checked ? (d.select = true) : (d.select = false);
        return d;
      });
    } else {
      newTags = tags.map(d => {
        if (d.id === data.id) {
          d.select = checked;
        }
        return d;
      });
    }

    setTags(newTags);
  };

  return (
    <div className='actives-graph-container'>
      <div className='graph-main'>
        <AreaChart
          width={800}
          height={500}
          data={props.data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray='3 3' />
          <XAxis dataKey='admissionTerm' />
          <YAxis yAxisId='right' />
          <Tooltip />
          {tags.map(d => (
            <Area
              key={d.id}
              yAxisId='right'
              dataKey={d.select ? d.value : ""}
              name={d.valueTranslate}
              type='monotone'
              stackId='1'
              stroke={d.color}
              fill={d.color}
            />
          ))}
        </AreaChart>
        <p className='graph-label-y'>Ativos</p>
        <p className='graph-label-x'>Período de Admissão</p>
      </div>

      <MySwitch tags={tags} handleCheck={handleCheck} />
    </div>
  );
};

export default ActivesGraph;