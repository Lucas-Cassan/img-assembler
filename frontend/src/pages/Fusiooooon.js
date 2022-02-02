import React, { useEffect, useState } from "react";
import axios from "axios";
import mergeImages from "merge-images";
import body from "../img/body.png";
import eyes from "../img/eyes.png";
import mouth from "../img/mouth.png";

const Fusiooooon = () => {
  const [file1, setFile1] = useState();
  const [file2, setFile2] = useState();
  const [fusion, setFusion] = useState();

  console.log(file1);

  useEffect(() => {
    if (file1 !== undefined && file2 !== undefined) {
      if (file1.name && file2.name) {
        mergeImages([{ src: body }, { src: eyes }, { src: mouth }]).then(
          (b64) => (document.getElementById("img").src = b64),
        );
        setFusion(document.getElementById("img").src);
      }
    }
  }, [file1, file2]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("file", fusion);

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
      <form action="">
        <label htmlFor="">Image 1 : </label>
        <input
          type="file"
          name="file"
          id="file"
          accept=".jpg, .jpeg, .png"
          onChange={(e) => setFile1(e.target.files[0])}
        />
        <label htmlFor="">Image 2 : </label>
      </form>
      <form action="">
        <input
          type="file"
          name="file"
          id="file"
          accept=".jpg, .jpeg, .png"
          onChange={(e) => setFile2(e.target.files[0])}
        />
      </form>
      <div id="image">
        <img id="img" alt="tomerge" />
      </div>
      <button onClick={handleSubmit}>FUSION</button>
    </>
  );
};

export default Fusiooooon;
