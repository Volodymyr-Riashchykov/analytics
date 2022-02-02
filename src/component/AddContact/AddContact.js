import { useState, useEffect  } from "react";
import AddContactInput from "../AddContactInput/AddContactInput";
import style from './AddContact.module.css'
import axios from "axios";
import { serverURL } from "../App/App";

export default function AddContact({ handleAddContact }) {
    
    const [flame_s, setFlameS] = useState("10");
    const [flame_e, setFlamesE] = useState("20");
    const [candle_s, setCandleS] = useState("80");
    const [candle_e, setCandleE] = useState("80.03");
    const [date_s, setDateS] = useState("");
    const [date_e, setDateE] = useState("");
    const [win, setWin] = useState("15");
    const [loss, setLoss] = useState("15");
    const [symbol, setSymbol] = useState("BTC/USDT");
    
    useEffect(async() => {
        const b = (await axios.get(serverURL+'/dates'));
        setDateS(b.data);
        const c = (await axios.get(serverURL+'/datee'));
        setDateE(c.data);
    },[])

    const hahdleChange = e => {
        if (e.currentTarget.name === "пламя нач.") setFlameS(e.currentTarget.value);
        if (e.currentTarget.name === "пламя кон.") setFlamesE(e.currentTarget.value);
        if (e.currentTarget.name === "свеча нач.") setCandleS(e.currentTarget.value);
        if (e.currentTarget.name === "свеча кон.") setCandleE(e.currentTarget.value);
        if (e.currentTarget.name === "дата нач.") setDateS(e.currentTarget.value);
        if (e.currentTarget.name === "дата кон.") setDateE(e.currentTarget.value);
        if (e.currentTarget.name === "выигрыш") setWin(e.currentTarget.value);
        if (e.currentTarget.name === "проигрыш") setLoss(e.currentTarget.value);
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
        handleAddContact(per);
        resetState();
    };

    const resetState = () => {
        // setName("");
        // setNumber("");
    }
       
    return (
        <div className={style.form}>
            <form className={style.inputForm} onSubmit={handleSubmit}>
                <div className={style.input}>
                    <AddContactInput
                        type="text"
                        //flame
                        name="пламя нач."
                        value={flame_s}
                        hahdleChange={hahdleChange}
                        title="Величина 'пламя' свечи, в %, до 100, разделитель точка"
                        pattern="\d{1,2}(\.\d{0,2})?"
                        placeholder="23.45"
                        size="5"
                        //^[0-9]{,2}+(\.\d{2})?
                        //^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$
                    />
                    <AddContactInput
                        type="text"
                        //candle
                        name="пламя кон."
                        value={flame_e}
                        hahdleChange={hahdleChange}
                        title="Величина свечи, в %, до 100, разделитель точка"
                        pattern="\d{1,2}(\.\d{0,2})?"
                        placeholder="63.08"
                        size="5"
                        //\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}
                    />
                    <AddContactInput
                        type="text"
                        //flame
                        name="свеча нач."
                        value={candle_s}
                        hahdleChange={hahdleChange}
                        title="Величина 'пламя' свечи, в %, до 100, разделитель точка"
                        pattern="\d{1,2}(\.\d{0,2})?"
                        placeholder="23.45"
                        size="5"
                        //[0-9]{,2}+(\.\d{2})?
                        //^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$
                    />
                    <AddContactInput
                        type="text"
                        //candle
                        name="свеча кон."
                        value={candle_e}
                        hahdleChange={hahdleChange}
                        title="Величина свечи, в %, до 100, разделитель точка"
                        pattern="\d{1,2}(\.\d{0,2})?"
                        placeholder="63.08"
                        size="5"
                        //\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}
                            />
                </div>
                <div className={style.input}>
                    <AddContactInput
                        type="datetime"
                        //flame
                        name="дата нач."
                        value={date_s}
                        hahdleChange={hahdleChange}
                        title="Величина 'пламя' свечи, в %, до 100, разделитель точка"
                        pattern=""
                        placeholder="2022-01-22T22:00:00.000+00:00"
                        size="35"
                        //[0-9]{,2}^\d{2}+(\.\d{2})?
                        //^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$
                    />
                    <AddContactInput
                        type="datetime"
                        //candle
                        name="дата кон."
                        value={date_e}
                        hahdleChange={hahdleChange}
                        title="Величина свечи, в %, до 100, разделитель точка"
                        pattern=""
                        placeholder="2022-01-22T22:00:00.000+00:00"
                        size="35"
                        //[0-9]{, 2}
                        //\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}
                            />
                </div>
                <div className={style.input}>
                    <AddContactInput
                        type="text"
                        //flame
                        name="выигрыш"
                        value={win}
                        hahdleChange={hahdleChange}
                        title="Величина 'пламя' свечи, в %, до 100, разделитель точка"
                        pattern="\d{1,2}(\.\d{0,2})?"
                        placeholder="23.45"
                        size="5"
                        //[0-9]{,2}+(\.\d{2})?
                        //^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$
                    />
                    <AddContactInput
                        type="text"
                        //candle
                        name="проигрыш"
                        value={loss}
                        hahdleChange={hahdleChange}
                        title="Величина свечи, в %, до 100, разделитель точка"
                        pattern="\d{1,2}(\.\d{0,2})?"
                        placeholder="63.08"
                        size="5"
                        //\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}
                    />
                    <AddContactInput
                        type="text"
                        //flame
                        name="пара"
                        value={symbol}
                        hahdleChange={hahdleChange}
                        title="Величина 'пламя' свечи, в %, до 100, разделитель точка"
                        pattern="^[a-zA-Z]'/'[a-zA-Z]"
                        placeholder="BTC/USDT"
                        size="12"
                        //[0-9]{,2}^\d{2}+(\.\d{2})?
                        //^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$
                    />
                </div>
                <div>
                    <button type="submit" className={style.btn}>Begin</button>
                </div>
        </form>        
            
            
        </div>
    )
} 