import React from 'react';
import { Paper, TableRow, TableHead, TableCell, TableBody, Table } from '@material-ui/core';
import { arrayOf, shape, string, number, any, bool } from 'prop-types';

import styles from './styles.scss';

function UTTable({ columns, rows, noShadow, rootClassName, headClassName, rowClassName }) {
  return (
    <Paper elevation={noShadow && 0}>
      <Table className={`${styles.tableRoot} ${rootClassName}`}>
        <TableHead>
          <TableRow className={`${styles.tableRow} ${rowClassName}`}>
            {columns.map(col => (
              <TableCell className={`${styles.cellHead} ${headClassName}`} key={col.name}>
                {col.name}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow className={`${styles.tableRow} ${rowClassName}`} hover key={row.id}>
              {columns.map(col => (
                <TableCell key={row}>{col.cellRenderer ? col.cellRenderer(row) : row[col.key]}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

UTTable.propTypes = {
  columns: arrayOf(
    shape({
      name: string,
      value: number
    })
  ),
  rows: arrayOf(any), // eslint-disable-line react/forbid-prop-types
  noShadow: bool,
  rootClassName: string,
  headClassName: string,
  rowClassName: string
};

export default UTTable;
