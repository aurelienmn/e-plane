"use client"
//import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";

import React from 'react'

function Searchbar() {


  return (
    <div className="my-4 w-full">
      <form className="w-full relative">
            <TextField
            fullWidth
              id="search-bar"
              className="text bg-blue-200"
              onInput={() => {}}
              label="Enter a city name"
              variant="outlined"
              placeholder="Search..."
              size="small"
            />
            <IconButton type="submit" aria-label="search" sx={{position:'absolute', right:20}}>
              <SearchIcon style={{ fill: "blue" }} />
            </IconButton>
          </form>
    </div>
  )
}

export default Searchbar
