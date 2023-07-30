import { styled } from "styled-components";

export const TransactionTable = styled.table`
width: 600px;
  border: 1px solid gray;
  margin: 0 auto;


`
export const TableHead = styled.thead`
  background-color: #15b4e2;
  color: white;
  
`;

export const TableDataRow = styled.tr`
  &:nth-child(even) {
    background-color: #e3e3e3;
  }
 
`;

export const TableHeadCell = styled.th`
  padding: 10px;
  font-weight: bold;


`;

export const TableBody = styled.tbody`
`;



export const TableDataCell = styled.td`
  padding: 10px;
  text-align: center;
`;

