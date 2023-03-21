import React, { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';


const Images = () => {
  const [files,setFiles]=useState([]);
  useEffect(()=>{
    axios.get('http://127.0.0.1:8000/getname').then(res=>{
    setFiles(res.data);
  })
  },[])
    
        const handleDelete=(deletedfile)=>{
          console.log(deletedfile);
          axios.post('http://127.0.0.1:8000/deletedfile',{name:deletedfile}).then(res=>{
            if(res.data){
              const newfiles = files.filter(file=> file.filename !== deletedfile);
                setFiles(newfiles)
        
            }
          })
        }
            const handleDownload=(selectedfile)=>{
              
                
                axios.get(`http://127.0.0.1:8000/download/${selectedfile}`,{
                    responseType: 'blob',
                  }).then((response) => {
                    const url = window.URL.createObjectURL(new Blob([response.data]));
                    const link = document.createElement('a');
                    link.href = url;
                    link.setAttribute('download',selectedfile);
                    document.body.appendChild(link);
                    link.click();
                  }).catch((error) => {
                    console.log(error);
                  });
                
            };
        
    
    return (
        <div>
        {
          files.map((file)=>
       <div>
          <p>{file.filename}</p>
          <button className="btn btn-primary m-5" onClick={()=>handleDownload(file.filename)}>Download</button>
          <button className="btn btn-primary" onClick={()=>handleDelete(file.filename)}>Delete</button>
          </div>

          )

        }

            

        </div>
    );
};

export default Images;