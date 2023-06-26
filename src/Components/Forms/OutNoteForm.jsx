import React, { useState, useEffect } from "react";
import { Container, FormControl } from "@mui/material/";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { v4 as uuidv4 } from "uuid";
import OutNoteTable from "../Tables/OutNoteTable";
import axios from "axios";
import Grid from "@mui/material/Unstable_Grid2";
import "../Forms/OutNoteForm.scss";
function OutNoteForm() {
  //Customer + Production + Area
  const [customerData, setcustomerData] = useState([]);
  const [productionData, setproductionData] = useState([]);

  //GET DATA FROM DB
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      // Get customers list
      const response = await axios.get("http://localhost:8080/customers");
      const sortedcustomerData = response.data.sort((a, b) =>
        a.name.localeCompare(b.name)
      );
      setcustomerData(sortedcustomerData);
      console.log("sortedcustomerData ", sortedcustomerData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
    // Get product list

    try {
      const response = await axios.get("http://localhost:8080/products");
      const productionData = response.data.sort((a, b) =>
        a.name.localeCompare(b.name)
      );

      setproductionData(productionData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  //CREATE OBJECTS

  // Khởi tạo giá trị cho form
  //1
  //Objects display for forms
  const [goodsreceivednotes, setgoodsreceivednotes] = useState({
    customerCode: "",
    record: "",
  });
  //Objects display for forms

  const [goodsreceivednotesDTO, setgoodsreceivednotesDTO] = useState({
    customerCode: "",
    record: "",
  });

  //2
  //+-
  const [outgoingDetailsCreateDTOList, setoutgoingDetailsCreateDTOList] =
    useState([
      { id: uuidv4(), productId: "", amount: "", price: "", discount: "" },
    ]);

  //1
  //Set giá trị cho form
  const handleChange = (event) => {
    console.log("here1");

    const { name, value } = event.target;

    if (name === "customerCode") {
      const filteredData = customerData.filter((item) => item.name === value);
      console.log("filteredData ", filteredData);
      setgoodsreceivednotes((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));

      setgoodsreceivednotesDTO((prevState) => ({
        ...prevState,
        customerCode: filteredData[0].code, // Replace with the desired value for imcomingDate
      }));
    } else {
      setgoodsreceivednotes((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));

      setgoodsreceivednotesDTO((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    }
  };

  //2
  //+-
  const handleChangeInput = (id, event) => {
    const newoutgoingDetailsCreateDTOList = outgoingDetailsCreateDTOList.map(
      (i) => {
        if (id === i.id) {
          i[event.target.name] = event.target.value;
        }

        return i;
      }
    );
    console.log(
      "newoutgoingDetailsCreateDTOList ",
      newoutgoingDetailsCreateDTOList
    );
    const updatedGoodsReceivedNotes = {
      ...goodsreceivednotes,
      outgoingDetailsCreateDTOList: outgoingDetailsCreateDTOList,
    };
    setoutgoingDetailsCreateDTOList(newoutgoingDetailsCreateDTOList);

    setgoodsreceivednotes(updatedGoodsReceivedNotes);

    setgoodsreceivednotes((prevState) => ({
      ...prevState,
      outgoingDetailsCreateDTOList: [...outgoingDetailsCreateDTOList],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    //merge
    const mergeupdatedGoodsReceivedNotes = {
      ...goodsreceivednotes,
      outgoingDetailsCreateDTOList: outgoingDetailsCreateDTOList,
    };

    setgoodsreceivednotes(mergeupdatedGoodsReceivedNotes);
    // const outgoingDetailsCreateDTOList1 =(...outgoingDetailsCreateDTOList);
    const mergeupdatedGoodsReceivedNotesDTO = {
      ...goodsreceivednotesDTO,
      outgoingDetailsCreateDTOList: [...outgoingDetailsCreateDTOList],
    };

    setgoodsreceivednotesDTO(mergeupdatedGoodsReceivedNotesDTO);

    console.log("goodsreceivednotes", goodsreceivednotes);
    console.log("goodsreceivednotesDTO", goodsreceivednotesDTO);
    //Convert
    const resultMap = outgoingDetailsCreateDTOList.map((item) => {
      if (item.productId !== "") {
        const filteredProductionData = productionData.filter(
          (item1) => item1.name === item.productId
        );
        console.log("filteredProductionData", filteredProductionData);
        return {
          ...item,
          productId: filteredProductionData[0].id,
        };
      }
    });

    console.log("resultMap", resultMap);
    // set convert to DTO object

    const updatedGoodsReceivedNotesDTO = {
      ...goodsreceivednotesDTO,
      outgoingDetailsCreateDTOList: resultMap,
    };
    setgoodsreceivednotesDTO(updatedGoodsReceivedNotesDTO);
    setgoodsreceivednotesDTO(updatedGoodsReceivedNotesDTO);

    setgoodsreceivednotesDTO(updatedGoodsReceivedNotesDTO);

    console.log("goodsreceivednotes", goodsreceivednotes);
    console.log("goodsreceivednotesDTO", goodsreceivednotesDTO);
    axios
      .post("http://localhost:8080/goodsdeliverynotes", goodsreceivednotesDTO)
      .then(function (response) {
        console.log(response);

        alert("Create sucessfull!!!");
      })
      .catch(function (error) {
        console.log("Lỗi");
        console.log(error);
      });
  };

  //2
  //Option của thẻ Product code & Area

  const [productId, setproductId] = React.useState("");
  const [area, setArea] = React.useState("");

  // Dấu +

  const handleAddFields = () => {
    setoutgoingDetailsCreateDTOList([
      ...outgoingDetailsCreateDTOList,
      { id: uuidv4(), amount: "", price: "", areaId: "" },
    ]);
    const updatedGoodsReceivedNotes = {
      ...goodsreceivednotes,
      outgoingDetailsCreateDTOList: outgoingDetailsCreateDTOList,
    };
    console.log("size InNoteForm: ", outgoingDetailsCreateDTOList.length);
  };
  // Dấu -

  const handleRemoveFields = (id) => {
    const values = [...outgoingDetailsCreateDTOList];
    values.splice(
      values.findIndex((value) => value.id === id),
      1
    );
    setoutgoingDetailsCreateDTOList(values);
    const updatedGoodsReceivedNotes = {
      ...goodsreceivednotes,
      outgoingDetailsCreateDTOList: outgoingDetailsCreateDTOList,
    };
    setgoodsreceivednotes(updatedGoodsReceivedNotes);
  };

  return (
    <Grid container spacing={0.5} style={{ width: "100%" }}>
      <Grid xs={6}>
        <Container className="inNoteForm" style={{ height: "auto" }}>
          <Typography className="title">OUT NOTE FORM</Typography>
          <form onSubmit={handleSubmit}>
            {/* Nút customer Code */}

            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "repeat(1, 1fr)",
                gap: 1,
                marginBottom: 1,
              }}
            >
              {/* <Grid container style={{ width: "100%" }}> */}
              {/* <Grid xs={8}> */}
              <InputLabel id="customer-select-label" className="inputLable">
                Customer Name{" "}
              </InputLabel>
              <Select
                fullWidth
                id="fullWidth"
                labelId="customer-select-label"
                name="customerCode"
                label="Customer Code"
                required={true}
                value={goodsreceivednotes.customerCode}
                onChange={handleChange}
              >
                {customerData.map((item) => (
                  <MenuItem value={item.name}>{item.name}</MenuItem>
                ))}
              </Select>

              {/* Nút Note */}
              <InputLabel id="note-select-label" className="inputLable">
                Note (Optional)
              </InputLabel>

              <TextField
                id="record"
                name="record"
                variant="outlined"
                multiline
                value={goodsreceivednotes.record}
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
              {outgoingDetailsCreateDTOList.map((incomingDetailsCreateDTO) => (
                <div key={incomingDetailsCreateDTO.id}>
                  {/* Production Code */}
                  <FormControl
                    className="outgoingDetailsCreateDTOList"
                    id="productIdForm"
                  >
                    {/* <InputLabel
                      id="production-select-lable"
                      className="inputLable"
                    >
                      Production Name{" "}
                    </InputLabel> */}
                    <Select
                      displayEmpty
                      variant="outlined"
                      required
                      // labelId="production-select-lable"
                      id="productId"
                      name="productId"
                      value={incomingDetailsCreateDTO.id.productId}
                      onChange={(event) =>
                        handleChangeInput(incomingDetailsCreateDTO.id, event)
                      }
                      renderValue={(selected) => {
                        if (selected === undefined) {
                          return (
                            <span
                              style={{ color: "#a89f9f", fontSize: "1rem" }}
                            >
                              Production Name
                            </span>
                          );
                        }

                        return selected;
                      }}
                    >
                      {productionData.map((item) => (
                        <MenuItem value={item.name}>{item.name}</MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                  {/* Amount  */}
                  <FormControl
                    className="outgoingDetailsCreateDTOList"
                    id="amountCodeForm"
                  >
                    <TextField
                      required
                      id="amount"
                      // id="standard-number"
                      // label="Amount (kg)"
                      placeholder="Amount(kg)"
                      type="number"
                      name="amount"
                      value={incomingDetailsCreateDTO.amount}
                      InputLabelProps={{
                        shrink: true,
                      }}
                      // variant="standard"
                      onChange={(event) =>
                        handleChangeInput(incomingDetailsCreateDTO.id, event)
                      }
                    />
                  </FormControl>

                  {/* price */}

                  <TextField
                    className="outgoingDetailsCreateDTOList"
                    required
                    id="price"
                    // id="standard-number"
                    // label="Price ($)"
                    placeholder="Price ($)"
                    type="number"
                    name="price"
                    value={incomingDetailsCreateDTO.price}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    // variant="standard"
                    onChange={(event) =>
                      handleChangeInput(incomingDetailsCreateDTO.id, event)
                    }
                  />
                  {/* Discount */}
                  <TextField
                    className="outgoingDetailsCreateDTOList"
                    required
                    id="discount"
                    // id="standard-number"
                    // label="Discount"
                    placeholder="Discount"
                    type="number"
                    name="discount"
                    value={incomingDetailsCreateDTO.discount}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    // variant="standard"
                    onChange={(event) =>
                      handleChangeInput(incomingDetailsCreateDTO.id, event)
                    }
                  />

                  {/* Button */}
                  <IconButton
                    disabled={outgoingDetailsCreateDTOList.length === 1}
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
                // onClick={handleSubmit}
              >
                Create Receipt
              </Button>
            </div>
          </form>
        </Container>
      </Grid>
      <Grid xs={6}>
        <OutNoteTable goodsreceivednotes={goodsreceivednotes} />;
      </Grid>
    </Grid>
  );
}
export default OutNoteForm;
