import React, { useState } from 'react';
import axios from 'axios';

const Signup = () => {
     const [File,setFile]=useState(
        null
     //fileSelected:''
     );
    const onFileChange=(event)=>{
        setFile( event.target.files[0]);
        //console.log(e.target.files[0]);
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
       //const name=  document.getElementById("exampleInputName").value;
       const formData = new FormData();
formData.append("image",File);

       axios.post('http://127.0.0.1:8000/post',formData).then(res=>{
           console.log(res.data);
       }
       
      )

   
    }
    
    return (
        <div>
            <form onSubmit={handleSubmit} enctype="multipart/form-data">
  {/* <div class="mb-3">
    <label for="exampleInputName" class="form-label">Name</label>
    <input type="text" name="name" class="form-control" id="exampleInputName" aria-describedby="emailHelp"/>
    
  </div> */}
  <div class="mb-3">
    <label for="exampleInputFile" class="form-label">File</label>
    <input type="file" name="file" class="form-control" onChange={onFileChange} id="exampleInputFile" aria-describedby="emailHelp"/>
    
  </div>
  
  
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
        </div>
    );
};

export default Signup;

