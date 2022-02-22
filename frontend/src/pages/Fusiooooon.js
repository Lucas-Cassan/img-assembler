import React, { useEffect, useState } from "react";
import axios from "axios";
import mergeImages from "merge-images";
import body from "../img/body.png";
import eyes from "../img/eyes.png";
import mouth from "../img/mouth.png";

const Fusiooooon = () => {
  const [imgSrc, setImgSrc] = useState(null);
  const [file1, setFile1] = useState();
  const [file2, setFile2] = useState();
  const [fusion, setFusion] = useState();

  console.log(file1);

  useEffect(() => {
    if (file1 !== undefined && file2 !== undefined) {
      if (file1.name && file2.name) {
        mergeImages([{ src: body }, { src: eyes }, { src: mouth }]).then(
          (b64) => {
            setImgSrc(b64);
          },
        );
        setFusion(document.querySelector(".img").src);
        console.log(fusion);
      }
    }
  }, [file1, file2, fusion]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // const data = new FormData();
    // data.append("file", fusion);
    // console.log(data);

    axios({
      method: "post",
      url: `http://localhost:5000/img/merge`,
      data: fusion,
    })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div id="image">
        <img src={imgSrc} alt="" className="img" />
      </div>
      <div id="form">
        <form action="" onSubmit={handleSubmit}>
          <label htmlFor="image1">Image 1</label>
          <input
            type="file"
            name="image1"
            id="image1"
            accept=".jpg, .jpeg, .png"
            onChange={(e) => setFile1(e.target.files[0])}
          />
          <input type="submit" value="enregistrer" />
        </form>
        <form action="">
          <label htmlFor="image2">Image 2</label>
          <input
            type="file"
            name="image2"
            id="image2"
            accept=".jpg, .jpeg, .png"
            onChange={(e) => setFile2(e.target.files[0])}
          />
          <input type="submit" value="enregistrer" />
        </form>
      </div>
      <button onClick={handleSubmit}>FUSION</button>
    </>
  );
};

export default Fusiooooon;
