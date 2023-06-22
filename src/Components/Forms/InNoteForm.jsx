// import { useFormik } from "formik";
// import * as Yup from "yup";
// import { Card } from "antd";
// // import Icon from "@ant-design/icons/lib/components/AntdIcon";
// // import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
// import { IconName } from "react-icons/ai";
// import { HiMinus, HiPlus } from 'react-icons/hi';

import React, { useState } from "react";
import { Container, FormControl } from "@mui/material/";
import TextField from "@mui/material/TextField";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import Icon from "@mui/material/Icon";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import InputAdornment from "@mui/material/InputAdornment";
import Input from "@mui/material/Input";
import { makeStyles } from "@mui/styles/";
import { v4 as uuidv4 } from "uuid";
import OutlinedInput from "@mui/material/OutlinedInput";
import InNoteTable2 from "../Tables/InNoteTable2";
import "../../CSS/scss/innotes.css";
import "../../CSS/scss/styles.scss";
import { auto } from "@popperjs/core";
import axios from "axios";

// import Icon from "@ant-design/icons/lib/components/AntdIcon";

function InNoteForm() {
  // Khởi tạo giá trị cho form

  //1
  const [goodsreceivednotes, setgoodsreceivednotes] = useState({
    supplierCode: "",
    note: "",
    // incomingDetailsCreateDTOList: [],
  });

  //2
  //+-
  const [incomingDetailsCreateDTOList, setincomingDetailsCreateDTOList] =
    useState([
      { id: uuidv4(), productCode: "", amount: "", cost: "", areaId: "" },
    ]);

  //1
  //Set giá trị cho form
  const handleChange = (event) => {
    const { name, value } = event.target;

    setgoodsreceivednotes((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  //2
  //+-
  const handleChangeInput = (id, event) => {
    const newincomingDetailsCreateDTOList = incomingDetailsCreateDTOList.map(
      (i) => {
        if (id === i.id) {
          i[event.target.name] = event.target.value;
        }

        return i;
      }
    );
    setincomingDetailsCreateDTOList(newincomingDetailsCreateDTOList);
    return <InNoteTable2 data={goodsreceivednotes} />;

    setgoodsreceivednotes((prevState) => ({
      ...prevState,
      incomingDetailsCreateDTOList: [...incomingDetailsCreateDTOList],
    }));
  };

  //1+2
  // Tạo ra object cho form
  const merge = (event) => {
    const updatedGoodsReceivedNotes = {
      ...goodsreceivednotes,
      incomingDetailsCreateDTOList: incomingDetailsCreateDTOList,
    };
    setgoodsreceivednotes(updatedGoodsReceivedNotes);
    console.log("goodsreceivednotes", goodsreceivednotes);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // console.log("incomingDetailsCreateDTOList", incomingDetailsCreateDTOList);

    axios
      .post("http://localhost:8080/goodsreceivednotes/1", goodsreceivednotes)
      .then((response) => {
        console.log(response.data); // Xử lý phản hồi từ máy chủ Java
      })
      .catch((error) => {
        console.error(error);
      });
  };

  //2
  //Option của thẻ Product code & Area

  const [productCode, setproductCode] = React.useState("");
  const [area, setArea] = React.useState("");

  const changeProductCode = (event) => {
    setproductCode(event.target.value);
  };

  const changeArea = (event) => {
    setArea(event.target.value);
  };

  // Dấu +

  const handleAddFields = () => {
    setincomingDetailsCreateDTOList([
      ...incomingDetailsCreateDTOList,
      { id: uuidv4(), amount: "", cost: "", areaId: "" },
    ]);
  };
  // Dấu -

  const handleRemoveFields = (id) => {
    const values = [...incomingDetailsCreateDTOList];
    values.splice(
      values.findIndex((value) => value.id === id),
      1
    );
    setincomingDetailsCreateDTOList(values);
  };

  return (
    <Container className="inNoteForm" style={{ height: "auto" }}>
      <Typography className="title">IN NOTE FORM</Typography>
      <form onSubmit={merge}>
        {/* Nút Supplier Code */}

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(1, 1fr)",
            gap: 1,
            marginBottom: 1,
          }}
        >
          <InputLabel id="supplier-select-label">Supplier Code</InputLabel>
          <Select
            fullWidth
            id="fullWidth"
            labelId="supplier-select-label"
            name="supplierCode"
            label="Supplier Code"
            value={goodsreceivednotes.supplierCode}
            onChange={handleChange}
          >
            <MenuItem value="SHRI">SHRI</MenuItem>
            <MenuItem value="SDE">SDE</MenuItem>
            <MenuItem value="TAN">TAN</MenuItem>
          </Select>

          {/* Nút Note */}
          <InputLabel id="note-select-label">Note (Optional)</InputLabel>

          <TextField
            id="note"
            // label="Note (Optional)"
            name="note"
            variant="outlined"
            multiline
            value={goodsreceivednotes.note}
            // onChange={(event) => handleChangeInput(inputFields[0].id, event)}
            onChange={handleChange}
          />
        </Box>

        <br />
        {/* ----------------------------------------------------------------- */}
        {/* ----------------------------------------------------------------- */}

        <Box
          sx={{
            display: "grid",
            gridTemplateRows: "repeat(2, 1fr)",
            rowGap: 1,
            // columnGap: 3,
          }}
        >
          {incomingDetailsCreateDTOList.map((incomingDetailsCreateDTO) => (
            <div key={incomingDetailsCreateDTO.id}>
              {/* Production Code */}
              <FormControl
                className="incomingDetailsCreateDTOList"
                id="productCodeForm"
              >
                <InputLabel style={{ margin: "0" }}>Product Code</InputLabel>
                <Select
                  labelId="productCode"
                  id="productCode"
                  name="productCode"
                  value={incomingDetailsCreateDTO.productCode}
                  label="Product Code"
                  // onChange={handleChange}
                  // onChange={(event) => {
                  //   changeProductCode(event);
                  // }}
                  onChange={(event) =>
                    handleChangeInput(incomingDetailsCreateDTO.id, event)
                  }
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value="W180">W180</MenuItem>
                  <MenuItem value="W210">W210</MenuItem>
                  <MenuItem value="W240">W240</MenuItem>
                </Select>
              </FormControl>
              {/* Amount  */}
              <TextField
                className="incomingDetailsCreateDTOList"
                id="amount"
                name="amount"
                label="Amount (kg)"
                value={incomingDetailsCreateDTO.amount}
                multiline
                // onChange={(event) => {
                //   handleChangeInput(event.target.id, event);
                // handleInputChange(event);

                // }}
                onChange={(event) =>
                  handleChangeInput(incomingDetailsCreateDTO.id, event)
                }

                // className={isFilled ? "filled" : "inNotesNode"}
              />
              {/* Cost */}
              <TextField
                className="incomingDetailsCreateDTOList"
                name="cost"
                label="Cost"
                value={incomingDetailsCreateDTO.cost}
                multiline
                // onChange={(event) => {
                //   handleChangeInput(inputField.id, event);
                //   // handleInputChange(event);
                // }}
                onChange={(event) =>
                  handleChangeInput(incomingDetailsCreateDTO.id, event)
                }

                // className={isFilled ? "filled" : "inNotesNode"}
              ></TextField>
              {/* Area */}
              <FormControl
                className="incomingDetailsCreateDTOList"
                id="areaFormControl"
              >
                <InputLabel>Area</InputLabel>
                <Select
                  labelId="areaId"
                  name="areaId"
                  id="areaId"
                  value={incomingDetailsCreateDTO.area}
                  label="Area Code"
                  onChange={(event) =>
                    handleChangeInput(incomingDetailsCreateDTO.id, event)
                  }
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={17}>17</MenuItem>
                  <MenuItem value={18}>18</MenuItem>
                  <MenuItem value={19}>19</MenuItem>
                </Select>
              </FormControl>
              {/* Button */}
              <IconButton
                disabled={incomingDetailsCreateDTOList.length === 1}
                onClick={() => handleRemoveFields(incomingDetailsCreateDTO.id)}
              >
                <RemoveIcon />
              </IconButton>
              <IconButton onClick={handleAddFields}>
                <AddIcon />
              </IconButton>
            </div>
          ))}
        </Box>

        {/* ----------------------------------------------------------------- */}
        {/* ----------------------------------------------------------------- */}
        <div
          style={{
            textAlign: "center",
            marginBottom: "0px",
            marginTop: "20px",
          }}
        >
          <Button
            sx={{
              background: "black",
              alignContent: "center",
            }}
            className="inNoteButton"
            variant="contained"
            color="primary"
            type="submit"
            onClick={handleSubmit}
          >
            Create Receipt
          </Button>
        </div>
      </form>
    </Container>
  );
}
export default InNoteForm;
