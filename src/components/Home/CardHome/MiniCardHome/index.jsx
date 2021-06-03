import React from "react";

import "./style.css";

const MiniCardHome1 = props => {
  return (
    <div className='main-mini-card-home'>
      <div
        className={
          props.option === "delayed"
            ? "number-mini-card-home-delayed"
            : "number-mini-card-home"
        }
      >
        <div className='number-mini-card-home-content'>{props.number}</div>
      </div>
      <div className='legend-mini-card-home'>{props.legend}</div>
    </div>
  );
};

const MiniCardHome2 = props => {
  return (
    <div className='main-mini-card-home-2'>
      <div
        className={
          props.option === "delayed"
            ? "number-mini-card-home-delayed"
            : "number-mini-card-home"
        }
      >
        <div className='number-mini-card-home-content'>
          {props.number.custo}
        </div>
      </div>
      <div className='number-mini-card-home-content'>{props.number.valor}</div>
      <div className='legend-mini-card-home'>{props.legend}</div>
    </div>
  );
};

const MiniCardHome3 = props => {
  return (
    <div className='main-mini-card-home-3'>
      <div className='number-mini-card-home'>
        <div className='number-mini-card-home-content'>{props.number}</div>
      </div>
      <div className='legend-mini-card-home'>{props.legend}</div>
    </div>
  );
};

const MiniCardHome4 = props => {
  return (
    <div className='main-mini-card-home-4'>
      <div className='number-mini-card-home'>
        <div className='number-mini-card-home-content'>{props.number}</div>
      </div>
      <div className='legend-mini-card-home'>{props.legend}</div>
    </div>
  );
};

const MiniCardHome5 = props => {
  return (
    <div className='main-mini-card-home-5'>
      <div
        className={
          props.option === "delayed"
            ? "number-mini-card-home-delayed"
            : "number-mini-card-home"
        }
      >
        <div className='number-mini-card-home-content'>
          {props.number.risco}
        </div>
      </div>
      <div className='number-mini-card-home-content'>{props.number.valor}</div>
      <div className='legend-mini-card-home'>{props.legend}</div>
    </div>
  );
};

const MiniCardHomeEnrollments = props => {
  return (
    <div className='main-mini-card-home'>
      <div className='number-mini-card-home-enrollments'>
        <div className='number-mini-card-home-content'>{props.number}</div>
      </div>
      <div className='legend-mini-card-home-enrollments'>{props.legend}</div>
    </div>
  );
};

const MiniCardHomeTeachers = props => {
  return (
    <div className='main-mini-card-home-teachers'>
      <div className='number-mini-card-home-teachers'>
        <div className='number-mini-card-home-content-title'>MÉDIA</div>
        <div className='number-mini-card-home-content'>{props.number}</div>
      </div>
      <div className='legend-mini-card-home-teachers'>{props.legend}</div>
    </div>
  );
};

const MiniCardHomeRightTop = props => {
  return (
    <div className='main-mini-card-home-4'>
      <div className='number-mini-card-home-rigth-top'>
        <div className='number-mini-card-home-content'>{props.number}</div>
      </div>
      <div className='legend-mini-card-home-enrollments'>{props.legend}</div>
    </div>
  );
};

const MiniCardHomeRightBottom = props => {
  return (
    <div className='main-mini-card-home'>
      <div className='number-mini-card-home-rigth-bottom'>
        <div className='number-mini-card-home-content'>{props.number}</div>
      </div>
      <div className='legend-mini-card-home-enrollments'>{props.legend}</div>
    </div>
  );
};

const MiniCardHomeSubjects = props => {
  return (
    <div className='main-mini-card-home'>
      <div className='number-mini-card-home-subjects'>
        <div className='number-mini-card-home-content-title'>
          MÍNIMO MÉDIA MÁXIMO
        </div>
        <div className='number-mini-card-home-content'>{props.number}</div>
      </div>
      <div className='legend-mini-card-home-subjects'>{props.legend}</div>
    </div>
  );
};

const MiniCardHomeSubjectsTop = props => {
  return (
    <div className='main-mini-card-home-4'>
      <div className='number-mini-card-home-subjects'>
        <div className='number-mini-card-home-content-title'>
          MÍNIMO MÉDIA MÁXIMO
        </div>
        <div className='number-mini-card-home-content'>{props.number}</div>
      </div>
      <div className='legend-mini-card-home-subjects'>{props.legend}</div>
    </div>
  );
};

export {
  MiniCardHome1,
  MiniCardHome2,
  MiniCardHome3,
  MiniCardHome4,
  MiniCardHome5,
  MiniCardHomeEnrollments,
  MiniCardHomeRightTop,
  MiniCardHomeRightBottom,
  MiniCardHomeTeachers,
  MiniCardHomeSubjects,
  MiniCardHomeSubjectsTop,
};