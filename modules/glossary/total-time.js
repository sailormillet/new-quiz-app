import React from 'react';
import PropTypes from 'prop-types';
import { timeFormat } from '../../common/utils/util';

const TotalTime = ({ allTime }) => (
  <div className="timerBlock">
    <div className="title">TOTAL TIME</div>
    <p className="time">
      <span className="font-yellow">{timeFormat(allTime)}</span> / 03:20
    </p>
  </div>
);
TotalTime.propTypes = {
  allTime: PropTypes.number
};
export default TotalTime;
