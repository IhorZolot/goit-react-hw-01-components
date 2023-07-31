import React from 'react';
import PropTypes from 'prop-types';

import {
  StaticticSection,
  StatTitle,
  StatUl,
  StatLi,
  StatPercentage
} from './Statictic.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <StaticticSection>
        {title && <StatTitle>{title}</StatTitle>}
        <StatUl>
          {stats.map(({ id, label, percentage }) => (
            <StatLi key={id} style={{ backgroundColor: getRandomColor() }}>
              <span>{label}</span>
              <StatPercentage>{percentage}%</StatPercentage>
            </StatLi>
          ))}
        </StatUl>
    </StaticticSection>
  );
};

function getRandomColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}
Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};