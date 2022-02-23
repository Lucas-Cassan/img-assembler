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
      <div id="image" style={{textAlign:'center'}}>
          {
            imgSrc===null ? 
            <>
            <div style={{height:'100%'}}>
              <img src={file1} alt="" style={{
                 maxWidth: '100%',
                 borderRadius:'3px',
                 maxHeight:'100%',
                 position: 'relative',
                top:' 50%',
                bottom:'50%',
                transform:' translate(0%, -50%)'
              }}
              id="FirstImg"
              />
            <Draggable 
              defaultPosition={{ x: 0, y: 0 }} 
              onStart={()=>console.log("onstart")}
              onDrag={()=>console.log("ondrag")}
              onStop={()=>console.log("onstop")}
              position={null}
            >
              <img src={file2} alt="" style={{
                width: '33.33%',
                maxHeight:'90%',
                position: 'absolute',
                left: '40%',
                top:'40%',
                transform: 'translate(0%, -20%)'
              }}/>
            </Draggable>
              </div>
            </>
            :
            <img src={imgSrc} alt="" className="img" />
          }
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
