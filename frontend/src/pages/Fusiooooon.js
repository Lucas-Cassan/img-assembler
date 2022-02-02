import React, { useEffect, useState } from "react";
import axios from "axios";
import mergeImages from 'merge-images';
import body from "../img/body.png";
import eyes from '../img/eyes.png';
import mouth from '../img/mouth.png';

const Fusiooooon = () => {
  const [file1, setFile1] = useState();
  const [file2, setFile2] = useState();
console.log(file1)
useEffect(()=>{
    if(file1!=undefined && file2!=undefined){
      if(file1.name && file2.name){
        mergeImages([{src:body}, {src:eyes}, {src:mouth}])
        .then((b64) => document.getElementById('img').src = b64);
      }
    }
  })
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("file", file1);

    axios({
      method: "post",
      url: `http://localhost:5000/img/merge`,
      data,
    })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  console.log(document.getElementById('img').src)
  const handleSubmit2 = (e) => {
    e.preventDefault();

    console.log(file1);
    const data = new FormData();
    data.append("file", file2);

    axios({
      method: "post",
      url: `http://localhost:5000/img/merge`,
      data,
    })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">Image 1 : </label>
        <input
          type="file"
          name="file"
          id="file"
          accept=".jpg, .jpeg, .png"
          onChange={(e) => setFile1(e.target.files[0])}
        />
        <input type="submit" value="enregistrer" />
        <label htmlFor="">Image 2 : </label>
      </form>
      <form action="" onSubmit={handleSubmit2}>
        <input
          type="file"
          name="file"
          id="file"
          accept=".jpg, .jpeg, .png"
          onChange={(e) => setFile2(e.target.files[0])}
        />
        <input type="submit" value="enregistrer" />
      </form>
      <div id="image">
        <img id="img" alt='tomerge'/>
      </div>
    </>
  );
};

export default Fusiooooon;
