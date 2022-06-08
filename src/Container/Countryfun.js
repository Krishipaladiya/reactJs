import React, { useState } from 'react';

function Countryfun(props) {
    const[CountryName,setcountryname]=useState('india');
    
    const Changecountry = () =>{
        setcountryname ('USA');
    }

        return (
        <div>
            <p>{CountryName}</p>
            <button onClick={() =>Changecountry()}>Changecountry</button>
        </div>
    );
}

export default Countryfun;