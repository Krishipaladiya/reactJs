import React, { Component, useState } from 'react';

function Cityfun(props) {
    const[cityName,setcityname]=useState('surat');

    const changeCity = () => {
        setcityname ('bardoli')
    }

    return (
        <div>
            <p>{cityName}</p>
            <button onClick={() => changeCity()}>changeCity</button>
        </div>
    );
} 

export default Cityfun;