import React, { useState, useEffect } from 'react';
import axios from '../data/axios';

const NameList = () => {
    const [names, setNames] = useState([]);

    useEffect(() => {
        axios.get("api/names").then(response => {
            setNames(response.data);
        });
    }, []);

    return ( 
        <div className="row justify-content-center">
            <div className="col-md-8">
                {names.map((item, i) => (
                    <div className="card" key={i}>
                        <div className="card-header">{item.name}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}
 
export default NameList;