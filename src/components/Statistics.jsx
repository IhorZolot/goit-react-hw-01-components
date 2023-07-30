import React from 'react';

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
