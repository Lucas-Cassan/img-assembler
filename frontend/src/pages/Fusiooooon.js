import React, { createRef, useState } from "react";
import axios from "axios";
import mergeImages from "merge-images";
import styled from "styled-components";
import { Rnd } from "react-rnd";
import StyledRect from "react-resizable-rotatable-draggable";
import { useScreenshot } from "use-react-screenshot";

const Fusiooooon = () => {
  const [imgSrc, setImgSrc] = useState(null);
  const [file1, setFile1] = useState(null);
  const [file2, setFile2] = useState(null);
  const ref = createRef(null);
  const [image, takeScreenshot] = useScreenshot();
  const getImage = () => {
    takeScreenshot(ref.current);

  }

  const [position, setPosition] = useState({
    x: 0,
    y: 0,
    width: 332,
    height: 332,
  });

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
    mergeImages([
      { src: file1 },
      { src: file2, x: position.x, y: position.y },
    ]).then((b64) => {
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

  const StyledRnd = styled(Rnd)``;

  const Item = styled.div`
    border: 5px solid black;
  `;

  const Image = styled.div`
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
  `;

  const Container = styled.div``;

  function onResize(event, direction, ref, delta) {
    const { width, height } = ref.style;

    setPosition((prevPosition) => ({
      ...prevPosition,
      width,
      height,
    }));
  }

  function onDragStop(e, d) {
    const { x, y } = d;
    setPosition((prevPosition) => ({
      ...prevPosition,
      x,
      y,
    }));
  }

  function downloadImage(){
    getImage();
  }

  return (
    <>
      <Container ref={ref} id="image" style={{ textAlign: "center" }}>
        {imgSrc === null ? (
          <>
            <div style={{ height: "100%" }}>
              <img
                src={file1}
                alt=""
                style={{
                  maxWidth: "100%",
                  borderRadius: "3px",
                  maxHeight: "100%",
                  position: "relative",
                  top: " 50%",
                  bottom: "50%",
                  transform: " translate(0%, -50%)",
                }}
                id="FirstImg"
              />
              <StyledRnd
                style={{
                  width: "33.33%",
                  position: "absolute",
                  left: "40%",
                  top: "40%",
                  transform: "translate(0%, -20%)!important",
                }}
                default={position}
                onResize={onResize}
                onDragStop={onDragStop}
                bounds="parent"
                lockAspectRatio={true}
              >
                <Image
                  style={{
                    backgroundImage: `url(` + file2 + `)`,
                  }}
                >
                  {/* {JSON.stringify(position, null, 2)} */}
                </Image>
              </StyledRnd>
            </div>
          </>
        ) : (
          <img src={imgSrc} alt="" className="img" />
        )}
      </Container>
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
      <button
        className="btn"
        style={{ marginBottom: "10px" }}
        onClick={getImage}
      >
        Télécharger
      </button>
      <a onClick={getImage} download={image} href={image} title="MixPic">
        <img alt="MixPic" src={image} width={100} />
      </a>
    </>
  );
};

export default Fusiooooon;
