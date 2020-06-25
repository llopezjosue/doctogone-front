import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import SimpleMap from './Map';

const useStyles = makeStyles({
  table: {
    minWidth: 400,
  },
});

function createData(name, calories) {
  return { name, calories};
}

const rows = [
  createData('Donepezil', 2),
  createData('Exelon', 1),
  createData('Exiba',4),
];

export default function DenseTable() {
  const classes = useStyles();

  return (
    <div>
      <div> 
        <h1>Who Am I ? </h1>
        <h3>My name is David Grant </h3>
        <h3> I live in Toulouse and I am 72years old </h3>
      </div>
      <div>
        <h1> My medical records </h1>
        <h3> I'm blood type A- </h3>
        <h3> I have anemia </h3>
      </div>
      <div>
      <h1>My treatment</h1>
      </div>
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Medicines</TableCell>
            <TableCell align="right">Quantities per Day</TableCell>
           
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <div>
      <SimpleMap />
    </div>
    </div>
  );
}



