import React, { useState } from "react";
import axios from "axios";
import mergeImages from "merge-images";
import Draggable from "react-draggable";

const Fusiooooon = () => {
  const [imgSrc, setImgSrc] = useState(null);
  const [file1, setFile1] = useState(null);
  const [file2, setFile2] = useState(null);

  const onImageChange1 = (event) => {
    if (event.target.files && event.target.files[0]) {
      setFile1(URL.createObjectURL(event.target.files[0]));
    }
  };

  const onImageChange2 = (event) => {
    if (event.target.files && event.target.files[0]) {
      setFile2(URL.createObjectURL(event.target.files[0]));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    mergeImages([{ src: file1 }, { src: file2 }]).then((b64) => {
      setImgSrc(b64);
      console.log(b64);

      axios({
        method: "post",
        url: `http://localhost:5000/img/merge`,
        data: {
          image: b64,
        },
      })
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    });
  };

  return (
    <>
      <div id="image">
        <Draggable defaultPosition={{ x: 0, y: 0 }} position={null}>
          <img src={imgSrc} alt="" className="img" />
        </Draggable>
      </div>
      <div id="form">
        <form action="">
          <label htmlFor="image1">Image 1</label>
          <input
            type="file"
            name="image1"
            id="image1"
            accept=".jpg, .jpeg, .png"
            onChange={onImageChange1}
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
            onChange={onImageChange2}
          />
          <input type="submit" value="enregistrer" />
        </form>
      </div>
      <button onClick={handleSubmit}>FUSION</button>
    </>
  );
};

export default Fusiooooon;
