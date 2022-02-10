// import * as React from 'react';
import { useState, useEffect } from "react";
import axios from "axios";
import { serverURL } from "../App/App";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function CandleList({ handleAddContact }) {
       const [flame_s, setFlameS] = useState("0");
    const [flame_e, setFlamesE] = useState("20");
    const [candle_s, setCandleS] = useState("0");
    const [candle_e, setCandleE] = useState("20.03");
    const [date_s, setDateS] = useState("");
    const [date_e, setDateE] = useState("");
    const [win, setWin] = useState("3");
    const [loss, setLoss] = useState("2");
    const [symbol, setSymbol] = useState("BTC-USDT");
    
    useEffect(async() => {
        const b = (await axios.get(serverURL+'/dates'));
        setDateS(b.data);
        const c = (await axios.get(serverURL+'/datee'));
        setDateE(c.data);
    },[])

    const handleChange = e => {
        if (e.currentTarget.name === "тень нач.") setFlameS(e.currentTarget.value);
        if (e.currentTarget.name === "тень кон.") setFlamesE(e.currentTarget.value);
        if (e.currentTarget.name === "тело нач.") setCandleS(e.currentTarget.value);
        if (e.currentTarget.name === "тело кон.") setCandleE(e.currentTarget.value);
        if (e.currentTarget.name === "дата нач.") setDateS(e.currentTarget.value);
        if (e.currentTarget.name === "дата кон.") setDateE(e.currentTarget.value);
        if (e.currentTarget.name === "take profit") setWin(e.currentTarget.value);
        if (e.currentTarget.name === "stop loss") setLoss(e.currentTarget.value);
        if (e.currentTarget.name === "пара") setSymbol(e.currentTarget.value);
    }

    const handleSubmit = e => {
        e.preventDefault();
        const per = {
            flame_s,
            flame_e,
            candle_s,
            candle_e,
            date_s,
            date_e,
            win,
            loss,
            symbol
        }
        console.log('p=',per);
        // handleAddContact(per);
        // resetState();
    };
 
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
          <TextField
            // id="outlined-basic"
            //   select
          label="Select"
          value={flame_s}
          onChange={handleChange}
            // defaultValue="Hello World"
            variant="outlined"
          />
      <TextField id="filled-basic" label="Filled" variant="filled" />
      <TextField id="standard-basic" label="Standard" variant="standard" />
    </Box>
  );
}