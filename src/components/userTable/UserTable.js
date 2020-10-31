import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {
    getUsers,
    deleteUser,
    selectUsers
} from '../../app/store/slices/userSlice';
import { useDispatch, useSelector } from 'react-redux';


const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

export default function UserTable() {
    const dispatch = useDispatch();
    const classes = useStyles();
    const rows = useSelector(selectUsers);

    React.useEffect(() => {
        dispatch(getUsers())
    }, []);



    function deleteData(id) {
        let ninja = rows.data.filter(rows => {
            if (rows.id !== id) {
                return ninja
            }

        });



    }

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align="left">Id&nbsp;</TableCell>
                        <TableCell align="right">Name&nbsp;</TableCell>
                        <TableCell align="right">Gender&nbsp;</TableCell>
                        <TableCell align="right">Email&nbsp;</TableCell>
                        <TableCell align="right">Event Modify</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.length === 0 && <span>Loading...</span>}
                    {rows.map((row, index) => (
                        <TableRow key={row.id}>
                            <TableCell component="th" scope="row">
                                {row.id}
                            </TableCell>

                            <TableCell align="right">{row.name}</TableCell>
                            <TableCell align="right">{row.gender}</TableCell>
                            <TableCell align="right">{row.email}</TableCell>
                            <TableCell align="right"><button onClick={() => dispatch(deleteUser(index))}> Delete Items </button></TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
