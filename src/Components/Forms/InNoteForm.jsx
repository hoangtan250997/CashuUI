// import { useFormik } from "formik";
// import * as Yup from "yup";
// import { Card } from "antd";
// // import Icon from "@ant-design/icons/lib/components/AntdIcon";
// // import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
// import { IconName } from "react-icons/ai";
// import { HiMinus, HiPlus } from 'react-icons/hi';

import React, { useState, useEffect } from "react";
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
import Grid from "@mui/material/Unstable_Grid2";

// import Icon from "@ant-design/icons/lib/components/AntdIcon";

function InNoteForm() {
  const [chartData, setChartData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:8080/suppliers");
      setChartData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

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
    const updatedGoodsReceivedNotes = {
      ...goodsreceivednotes,
      incomingDetailsCreateDTOList: incomingDetailsCreateDTOList,
    };
    setgoodsreceivednotes(updatedGoodsReceivedNotes);

    setincomingDetailsCreateDTOList(newincomingDetailsCreateDTOList);

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
    // console.log("goodsreceivednotes", goodsreceivednotes);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      "Tables",
      goodsreceivednotes.incomingDetailsCreateDTOList[0].productCode
    );

    // console.log("incomingDetailsCreateDTOList", incomingDetailsCreateDTOList);

    // axios
    //   .post("http://localhost:8080/goodsreceivednotes/1", goodsreceivednotes)
    //   .then((response) => {
    //     console.log(response.data); // Xử lý phản hồi từ máy chủ Java
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });
  };

  //2
  //Option của thẻ Product code & Area

  const [productCode, setproductCode] = React.useState("");
  const [area, setArea] = React.useState("");

  // const changeProductCode = (event) => {
  //   console.log("Here");
  //   setproductCode(event.target.value);
  // };

  // const changeArea = (event) => {
  //   setArea(event.target.value);
  // };

  // Dấu +

  const handleAddFields = () => {
    setincomingDetailsCreateDTOList([
      ...incomingDetailsCreateDTOList,
      { id: uuidv4(), amount: "", cost: "", areaId: "" },
    ]);
    const updatedGoodsReceivedNotes = {
      ...goodsreceivednotes,
      incomingDetailsCreateDTOList: incomingDetailsCreateDTOList,
    };
    console.log("size InNoteForm: ", incomingDetailsCreateDTOList.length);
  };
  // Dấu -

  const handleRemoveFields = (id) => {
    const values = [...incomingDetailsCreateDTOList];
    values.splice(
      values.findIndex((value) => value.id === id),
      1
    );
    setincomingDetailsCreateDTOList(values);
    const updatedGoodsReceivedNotes = {
      ...goodsreceivednotes,
      incomingDetailsCreateDTOList: incomingDetailsCreateDTOList,
    };
    setgoodsreceivednotes(updatedGoodsReceivedNotes);
    console.log(
      "size <InNoteForm></InNoteForm>: ",
      incomingDetailsCreateDTOList.length
    );
  };

  return (
    <Grid container spacing={0.5} style={{ width: "100%" }}>
      <Grid xs={6}>
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
                {chartData.map((item) => (
                  <MenuItem value={item.name}>{item.name}</MenuItem>
                ))}
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
                    <InputLabel style={{ margin: "0" }}>
                      Product Code
                    </InputLabel>
                    <Select
                      labelId="productCode"
                      id="productCode"
                      name="productCode"
                      value={incomingDetailsCreateDTO.id.productCode}
                      label="Product Code"
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
                    onChange={(event) =>
                      handleChangeInput(incomingDetailsCreateDTO.id, event)
                    }
                  />
                  {/* Cost */}
                  <TextField
                    className="incomingDetailsCreateDTOList"
                    name="cost"
                    label="Cost"
                    value={incomingDetailsCreateDTO.cost}
                    multiline
                    onChange={(event) =>
                      handleChangeInput(incomingDetailsCreateDTO.id, event)
                    }
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
                    onClick={() =>
                      handleRemoveFields(incomingDetailsCreateDTO.id)
                    }
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
      </Grid>
      <Grid xs={6}>
        <InNoteTable2 goodsreceivednotes={goodsreceivednotes} />;
      </Grid>
    </Grid>
  );
}
export default InNoteForm;
