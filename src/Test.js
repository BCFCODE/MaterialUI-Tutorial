import React, { useState } from "react";
import { AppBar, Typography, Button, Toolbar } from "@mui/material";

const Test = () => {
  return (
    <div>
      <AppBar>
        <Toolbar>
          <Typography>LOGO</Typography>
          <Button variant="contained" sx={{ marginLeft: "auto" }} color="success">
            LOGIN
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Test;
