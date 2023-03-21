import React from 'react';
import axios from 'axios';
import { useState } from 'react';


const Images = () => {
    
        
            const handleDownload=()=>{
                
                axios.get('http://127.0.0.1:8000/download/2ViHW3b4v4DHaDzDTK0hhCID8S0ur7Mocr54N04G.jpg',{
                    responseType: 'blob',
                  }).then((response) => {
                    const url = window.URL.createObjectURL(new Blob([response.data]));
                    const link = document.createElement('a');
                    link.href = url;
                    link.setAttribute('download','2ViHW3b4v4DHaDzDTK0hhCID8S0ur7Mocr54N04G.jpg' );
                    document.body.appendChild(link);
                    link.click();
                  }).catch((error) => {
                    console.log(error);
                  });
                
            };
        
    
    return (
        <div>
            <button onClick={handleDownload}>Download</button>

        </div>
    );
};

export default Images;