import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import axios from "axios";
import { makeStyles } from "@mui/styles/";
import "../../CSS/scss/styles.scss";

const useStyles = makeStyles({
  root: {
    color: "red",
  },
});
export default function InTable() {
  const classes = useStyles();

  const [inData, setInData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8080/goodsdeliverynotes"
      );
      setInData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(inData);

  function Row(props) {
    const [open, setOpen] = useState(false);
    return (
      <React.Fragment>
        <TableRow
          style={{
            "& > *": { borderBottom: "unset" },
          }}
        >
          <TableCell className={classes.root}>
            <IconButton
              aria-label="expand row"
              size="small"
              onClick={() => setOpen(!open)}
            >
              {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
          </TableCell>

          <TableCell component="th" scope="row"></TableCell>
          <TableCell align="center">{props.row.code}</TableCell>
          <TableCell align="left">{props.row.customerName}</TableCell>
          <TableCell align="right">{props.row.outgoingDate}</TableCell>
          <TableCell align="left">{props.row.employeeName}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell
            className={classes.root}
            style={{ paddingBottom: 5, paddingTop: 3, color: "red" }}
            colSpan={6}
          >
            <Typography variant="h6" gutterBottom component="div">
              Note
            </Typography>
            <div>{inData.record}</div>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Box sx={{ margin: 5 }}>
                <Table size="small" aria-label="purchases">
                  <TableHead>
                    <TableRow>
                      <TableCell className={classes.root} align="center">
                        Product Name
                      </TableCell>
                      <TableCell className={classes.root} align="center">
                        Total Amount
                      </TableCell>
                      <TableCell className={classes.root} align="center">
                        Price ($)
                      </TableCell>
                      <TableCell className={classes.root} align="center">
                        Discount (%)
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {props.row.outgoingDetailsCreateDTOList.map((product) => (
                      <TableRow key={product.id}>
                        <TableCell>{product.name}</TableCell>
                        <TableCell>{product.amount}</TableCell>
                        <TableCell align="right">{product.price}</TableCell>
                        <TableCell align="right">
                          {product.discount * 100}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Box>
            </Collapse>
          </TableCell>
        </TableRow>
      </React.Fragment>
    );
  }

  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell style={{ fontWeight: "bold" }} align="center">
              Note Code
            </TableCell>
            <TableCell align="center">Customer Name</TableCell>
            <TableCell align="center">Date</TableCell>
            <TableCell align="center">Employee Name</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {inData.map((row) => (
            <Row key={row.code} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
