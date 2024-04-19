import React, { useState, useEffect } from "react";
import axios from "../api/axios";
const Adotttesztek = () => {
    const [adotttesztek, setadotttesztek] = useState([]);
    useEffect(() => {
        const gettesztek = async () => {
            const apitesztek = await axios.get("http://localhost:8000/api/tesztek/kategoria/{id}");
            console.log(apitesztek.data)
            setbejegyzesek(apitesztek.data);
        };
        gettesztek()
    }, [])
    return(
        adotttesztek.map((item) =>
                <div key={item.id}>
                    <p>{item.kerdes}</p>
                    <p>{item.v1}</p>
                    <p>{item.v2}</p>
                    <p>{item.v3}</p>
                    <p>{item.v4}</p>
                </div>)
    );
   
 
};

export default Adotttesztek;