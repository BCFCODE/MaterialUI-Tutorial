import React, { useCallback, useState } from "react";
import { Typography, useAutocomplete } from "@mui/material";
import { TextField } from "@mui/material";

const Test = () => {
  const [name, setName] = useState("");
  return (
    <div>
      <TextField
        value={name}
        onChange={(e) => setName(e.target.value)}
        type="text"
        sx={{ margin: 3 }}
        placeholder="Name"
        variant="outlined"
      />
      <TextField
        type="email"
        sx={{ margin: 3 }}
        placeholder="Email"
        variant="standard"
      />
      <TextField
        type="password"
        sx={{ margin: 3 }}
        placeholder="Password"
        variant="filled"
      />
      <TextField
        type="number"
        sx={{ margin: 3 }}
        placeholder="Number"
        variant="filled"
      />
      <Typography>{name}</Typography>
    </div>
  );
};

export default Test;
