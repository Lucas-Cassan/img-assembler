import React, { createRef, useState } from "react";
import styled from "styled-components";
import { Rnd } from "react-rnd";
import { useScreenshot } from "use-react-screenshot";
import { saveAs } from "file-saver";
import { useEffect } from "react";

const Fusiooooon = () => {
  // Image
  const [file1, setFile1] = useState(null);
  const [file2, setFile2] = useState(null);
  // Screen
  const ref = createRef(null);
  const [image, takeScreenshot] = useScreenshot();
  // Move and resize image
  const [rotate, setRotate] = useState();
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
    width: 200,
    height: 200,
  });

  useEffect(() => {
    if (image) {
      saveAs(image, "MicPicture");
    }
  }, [image]);

  // --- Image
  const downloadimage = async () => {
    takeScreenshot(ref.current);
  };
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

  // --- Component styles
  const StyledRnd = styled(Rnd)``;
  const Image = styled.div`
    width: 100%;
    height: 100%;
    background-image: url(${file2});
    background-size: 100% 100%;
    transform: rotate(${rotate}deg);
  `;
  const Container = styled.div``;

  // --- Function
  const onDragStop = (e, d) => {
    const { x, y } = d;
    setPosition((prevPosition) => ({
      ...prevPosition,
      x,
      y,
    }));
  };
  const handleChangeWidth = (e) => {
    setPosition((prevPosition) => ({
      ...prevPosition,
      width: e.target.value,
    }));
  };
  const handleChangeHeigth = (e) => {
    setPosition((prevPosition) => ({
      ...prevPosition,
      height: e.target.value,
    }));
  };

  return (
    <>
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
      <Container
        ref={ref}
        id="image"
        style={{ textAlign: "center" }}
        className={`${file1 ? "auto-image" : ""}`}
      >
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
            onDragStop={onDragStop}
            bounds="parent"
            lockAspectRatio={true}
          >
            <Image
              style={{
                transition: "all 0.5s ease-in-out",
              }}
              className="Image2"
            >
              {/* {JSON.stringify(position, null, 2)} */}
            </Image>
          </StyledRnd>
        </div>
      </Container>

      {file2 && (
        <div className="image-parameters">
          <div className="input">
            <label htmlFor="size">Width</label>
            <input
              type="number"
              name="size"
              id="size"
              onChange={handleChangeWidth}
            />
          </div>
          <div className="input">
            <label htmlFor="size">Height</label>
            <input
              type="number"
              name="size"
              id="size"
              onChange={handleChangeHeigth}
            />
          </div>
          <div className="input">
            <label htmlFor="rotation">Rotation</label>
            <input
              className="range"
              type="range"
              name="rotation"
              id="rotation"
              min="-360"
              max="360"
              onChange={(e) => setRotate(e.target.value)}
            />
          </div>
        </div>
      )}
      {file1 && file2 && (
        <>
          <button
            className="btn download"
            style={{ marginBottom: "10px" }}
            onClick={downloadimage}
          >
            Download
          </button>
        </>
      )}
    </>
  );
};

export default Fusiooooon;
