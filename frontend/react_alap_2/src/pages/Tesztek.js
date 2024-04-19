import React, { useState, useEffect } from "react";
import '../Fajl.css';
import axios from "../api/axios";
const Tesztek = () => {
    const [tesztek, setTesztek] = useState([]);
    useEffect(() => {
        const getTesztek = async () => {
            const apiTesztek = await axios.get("http://localhost:8000/api/tesztek");
            console.log(apiTesztek.data)
            setTesztek(apiTesztek.data);
        };
        getTesztek();
    }, []);
    return (
        <div>
            {tesztek.map((item) =>
                <div key={item.id}>
                    <h3 className="kerdes">{item.kerdes}</h3>
                    <div className="gombok">
                        
                        <button className="valasz"> {item.v1} </button>
                        <button className="valasz"> {item.v2} </button>
                        <button className="valasz"> {item.v3} </button>
                        <button className="valasz"> {item.v4} </button>
                    </div>
                </div>)}
        </div>
    );

};

export default Tesztek;