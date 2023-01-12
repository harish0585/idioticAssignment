import { Grid, Typography } from "@mui/material";
import { useState } from "react";
import React from "react";
import Navbar from "./Navbar";

const HomePage = () => {

  const [file, setFile] = useState();
    function handleChange(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }

  return (
    <div>
      <Navbar />
      <Grid container textAlign={"center"}>
        <Grid
          item
          style={{ padding: "100px", textAlign: "center", width: "100%" }}
        >
          <Typography variant="h3">
            {`Welcome To Marriage Portal ${localStorage.getItem("name")}`}
          </Typography>
          <h2>Upload your Image
          <input type="file" placeholder="Upload Photo" onChange={handleChange} />
          </h2>
            <img style={{ height: "150px", width: "150px", border: "none" }} src={file} />
            <br />
            <h2>Upload your Documents
          <input type="file" placeholder="Upload Photo" onChange={handleChange} />
          </h2>
        </Grid>
      </Grid>
    </div>
  );
};

export default HomePage;
