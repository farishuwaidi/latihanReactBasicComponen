import React, {useState} from "react";
import ButtonBaru from "./ButtonBaru";
import InputBaru from "./InputBaru";
import List from "./List";

const Latihan = () => {
    const [datas, setDatas] = useState([])
    const [data, setData] = useState("")

    const handleClick = () => {
        setDatas(
            [...datas, data]
        )
        setData("")
    }
    const handleChange = (e) => {
        setData(e.target.value)
    }
    return (
        <div>
            <InputBaru value={data} handleChange={handleChange}/>
            <ButtonBaru handleClick={handleClick}/>
            <br />
            {datas.length > 0? <List datas={datas}/> : <h4>Data kosong</h4>}
        </div>
    )
}

export default Latihan