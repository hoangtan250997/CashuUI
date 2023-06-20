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

import "../../CSS/scss/innotes.css";
import "../../CSS/scss/styles.scss";
import { auto } from "@popperjs/core";

// import Icon from "@ant-design/icons/lib/components/AntdIcon";

// const SignupForm = () => {
//   const formik = useFormik({
//     initialValues: {
//       supplierCode: "",
//       productCode: "",
//       amount: "",
//       cost: "",
//       areaCost: "",
//       note: "",
//     },
//     validationSchema: Yup.object({
//       supplierCode: Yup.string(),
//       // .required("Required")
//       // .min(4, "Must be 4 characters or more"),
//       email: Yup.string()
//         .required("Required")
//         .matches(
//           /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
//           "Please enter a valid email address"
//         ),
//       password: Yup.string()
//         .required("Required")
//         .matches(
//           /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d][A-Za-z\d!@#$%^&*()_+]{7,19}$/,
//           "Password must be 7-19 characters and contain at least one letter, one number and a special character"
//         ),
//       confirmedPassword: Yup.string()
//         .required("Required")
//         .oneOf([Yup.ref("password"), null], "Password must match"),
//       phone: Yup.string()
//         .required("Required")
//         .matches(
//           /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/,
//           "Must be a valid phone number"
//         ),
//     }),
//     onSubmit: (values) => {
//       window.alert("Successful!!!");
//       console.log(values);
//     },
//   });

const useStyles = makeStyles({
  root: {
    background: "rgb(220,200,200)",
    // background:
    boxShadow: "0px 0px 5px 2px rgb(173, 159, 168)",
    padding: "0 30px",
    borderRadius: "20px",
  },
});

function NoteInForm() {
  const [age, setAge] = React.useState("");
  const [area, setArea] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const changeArea = (event) => {
    setArea(event.target.value);
  };

  const classes = useStyles();
  const [inputFields, setInputFields] = useState([
    { id: uuidv4(), productCode: "", lastName: "" },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("InputFields", inputFields);
  };

  const handleChangeInput = (id, event) => {
    const newInputFields = inputFields.map((i) => {
      if (id === i.id) {
        i[event.target.name] = event.target.value;
      }
      return i;
    });

    setInputFields(newInputFields);
  };

  const handleAddFields = () => {
    setInputFields([
      ...inputFields,
      { id: uuidv4(), firstName: "", amount: "", cost: "", areaCode: "" },
    ]);
  };

  const handleRemoveFields = (id) => {
    const values = [...inputFields];
    values.splice(
      values.findIndex((value) => value.id === id),
      1
    );
    setInputFields(values);
  };

  return (
    <Container className={classes.root} style={{ height: "auto" }}>
      <Typography
        sx={{
          fontSize: "h3.fontSize",
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        IN NOTE FORM
      </Typography>
      <form onSubmit={handleSubmit}>
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
            value={inputFields[0].supplierCode}
            onChange={(event) => handleChangeInput(inputFields[0].id, event)}
          >
            <MenuItem value={10}>SHRI</MenuItem>
            <MenuItem value={20}>SDE</MenuItem>
            <MenuItem value={30}>TAN</MenuItem>
          </Select>
          <TextField
            id="note"
            label="Note (Optional)"
            name="note"
            variant="outlined"
            value={inputFields[0].note}
            onChange={(event) => handleChangeInput(inputFields[0].id, event)}
          />
        </Box>
        <Box
          sx={{
            display: "grid",
            gridTemplateRows: "repeat(2, 1fr)",
            rowGap: 1,
            // columnGap: 3,
          }}
        >
          {inputFields.map((inputField) => (
            <div key={inputField.id}>
              <FormControl sx={{ marginRight: 1, minWidth: 200 }}>
                <InputLabel style={{ margin: "0" }}>Product Code</InputLabel>
                <Select
                  labelId="productCode"
                  id="productCode"
                  value={age}
                  label="Product Code"
                  onChange={handleChange}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={1}>W180</MenuItem>
                  <MenuItem value={2}>W210</MenuItem>
                  <MenuItem value={3}>W240</MenuItem>
                </Select>
              </FormControl>

              <TextField
                className="inNotesNode"
                style={{ marginRight: "10px" }}
                name="amount"
                label="Amount (kg)"
                value={inputField.amount}
                onChange={(event) => handleChangeInput(inputField.id, event)}
              />
              {/* <InputLabel htmlFor="outlined-adornment-amount">
                Amount
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-amount"
                startAdornment={
                  <InputAdornment position="start">$</InputAdornment>
                }
                label="Amount"
              /> */}
              <TextField
                className="inNotesNode"
                style={{ marginRight: "10px" }}
                name="cost"
                label="Cost"
                value={inputField.cost}
                onChange={(event) => handleChangeInput(inputField.id, event)}
              >
                <Input
                  id="standard-adornment-amount"
                  startAdornment={
                    <InputAdornment position="start">$</InputAdornment>
                  }
                />
              </TextField>

              {/* <TextField
                className="inNotesNode"
                style={{ marginRight: "10px" }}
                name="areaCode"
                label="Area Code"
                value={inputField.areaCode}
                onChange={(event) => handleChangeInput(inputField.id, event)}
              /> */}
              <FormControl sx={{ marginRight: 1, minWidth: 200 }}>
                <InputLabel style={{ margin: "0" }}>Area</InputLabel>
                <Select
                  labelId="areaCode"
                  id="areaCode"
                  value={area}
                  label="Area Code"
                  onChange={changeArea}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>W180</MenuItem>
                  <MenuItem value={20}>W210</MenuItem>
                  <MenuItem value={30}>W240</MenuItem>
                </Select>
              </FormControl>
              <IconButton
                disabled={inputFields.length === 1}
                onClick={() => handleRemoveFields(inputField.id)}
              >
                <RemoveIcon />
              </IconButton>

              <IconButton onClick={handleAddFields}>
                <AddIcon />
              </IconButton>
            </div>
          ))}
        </Box>
        <div style={{ textAlign: "center", margin: "20px" }}>
          <Button
            sx={{
              background: "black",
              alignContent: "center",
            }}
            className={classes.button}
            variant="contained"
            color="primary"
            type="submit"
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </div>
      </form>
    </Container>
  );
}

export default NoteInForm;
