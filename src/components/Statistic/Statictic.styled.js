import { styled } from 'styled-components';

export const StaticticSection = styled.section`
  width: 600px;
  padding: 80px 80px;
  background-color: #dadfe2;
  margin: 0 auto; 
  margin-top: 60px;
`;

export const StatTitle = styled.h2`
  text-transform: uppercase;
  color: #747171;
  padding: 40px 20px;
  background-color: white;
  display: flex;
  align-items: center;
  flex-direction: column; 
`;
export const StatUl = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const StatLi = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 86px;
  height: 86px;
  color: white;
  gap: 10px;
  flex-grow: 1;
`;

export const StatPercentage = styled.span`
font-size: 24px;

`