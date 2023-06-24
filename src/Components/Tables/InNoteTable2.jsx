import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useDispatch, useSelector } from "react-redux";

export default function InNoteTable2(props) {
  const { userLogin } = useSelector((state) => state.userReducer);
  if (userLogin === null) {
    // Xử lý khi user là null
    console.log("User không tồn tại.");
  } else {
    // Xử lý khi user không phải là null
    console.log("User tồn tại.", userLogin);
  }
  const dispatch = useDispatch();

  const currentDate = new Date().toLocaleDateString();

  const TAX_RATE = 0.07;
  const { goodsreceivednotes } = props;

  console.log("Tables", goodsreceivednotes);
  function ccyFormat(num) {
    return `${num.toFixed(2)}`;
  }

  //Tự động tạo hàng mới
  function createRow(desc, qty, unit, price) {
    return { desc, qty, unit, price };
  }

  // Tính tiền subtotal
  function subtotal(items) {
    return items.map(({ price }) => price).reduce((sum, i) => sum + i, 0);
  }
  //Dùng giá trị để tạo row
  const rows = [];
  if (
    goodsreceivednotes &&
    goodsreceivednotes.incomingDetailsCreateDTOList &&
    goodsreceivednotes.incomingDetailsCreateDTOList.length !== 0
  ) {
    goodsreceivednotes.incomingDetailsCreateDTOList.forEach((item) => {
      const row = createRow(
        item.productCode,
        item.amount,
        item.cost,
        item.areaId
      );
      rows.push(row);
    });
  }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="spanning table">
        <TableHead>
          <TableRow>
            <TableCell
              align="center"
              colSpan={4}
              style={{ fontSize: "20px", fontWeight: "1000" }}
            >
              WAREHOUSE RECEIPT{" "}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="left" colSpan={1} style={{ fontWeight: "600" }}>
              Supplier Code: {goodsreceivednotes.supplierCode}
            </TableCell>

            <TableCell align="left" colSpan={1} style={{ fontWeight: "600" }}>
              Date: {currentDate}
            </TableCell>
            <TableCell align="left" colSpan={2} style={{ fontWeight: "600" }}>
              Staff: {userLogin.username}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="left" colSpan={4} style={{ fontStyle: "italic" }}>
              Note: {""}
              {goodsreceivednotes.note}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Production Code</TableCell>
            <TableCell align="left">Amount(kg)</TableCell>
            <TableCell align="left">Cost</TableCell>
            <TableCell align="left">Area</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.desc}>
              <TableCell>{row.desc}</TableCell>
              <TableCell align="left">{row.qty}</TableCell>
              <TableCell align="left">{row.unit}</TableCell>
              <TableCell align="left">{row.price}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
