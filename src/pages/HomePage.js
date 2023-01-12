import { Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import React from "react";
import Navbar from "./Navbar";
import axios from "axios";

const HomePage = () => {
  const [file, setFile] = useState();
  function handleChange(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  }

   const [data, setData] = useState([]);

  useEffect(() => {
    const value = axios.get("https://github.com/harish0585/New-Weather-App.git")
    setData(value);
    console.log(value, "harish");
  }, [])


  return (
    <div>
      <Navbar />
      <Grid container textAlign={"center"}>
        <Grid
          item
          style={{ padding: "100px", textAlign: "center", width: "100%" }}
        >
          <Typography variant="h3">
            {`Welcome  ${localStorage.getItem("name")}`}
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default HomePage;
