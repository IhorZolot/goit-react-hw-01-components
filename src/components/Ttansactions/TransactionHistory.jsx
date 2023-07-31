import React from 'react'
import PropTypes from 'prop-types';

import {
  TransactionTable,
  TableHead,
  TableHeadCell,
  TableBody,
  TableDataRow,
  TableDataCell,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <TransactionTable>
      <TableHead>
        <TableDataRow>
          <TableHeadCell>Type</TableHeadCell>
          <TableHeadCell>Amount</TableHeadCell>
          <TableHeadCell>Currency</TableHeadCell>
        </TableDataRow>
      </TableHead>
      <TableBody>
        {items.map((transaction) => (
          <TableDataRow key={transaction.id}>
            <TableDataCell>{transaction.type}</TableDataCell>
            <TableDataCell>{transaction.amount}</TableDataCell>
            <TableDataCell>{transaction.currency}</TableDataCell>
          </TableDataRow>
        ))}
      </TableBody>
    </TransactionTable>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};