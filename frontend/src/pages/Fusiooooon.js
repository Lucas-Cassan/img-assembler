import React, { useState } from "react";
import axios from "axios";

const Fusiooooon = () => {
  const [file1, setFile1] = useState();
  const [file2, setFile2] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(file1);
    const data1 = new FormData();
    data1.append("file", file1);
    const data2 = new FormData();
    data2.append("file", file2);

    axios({
      method: "post",
      url: `http://localhost:5000/img/merge`,
      data: {
        data1,
        data2,
      },
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
        <label htmlFor="">Image 2 : </label>
        <input
          type="file"
          name="file"
          id="file"
          accept=".jpg, .jpeg, .png"
          onChange={(e) => setFile2(e.target.files[0])}
        />
        <input type="submit" value="enregistrer" />
      </form>
    </>
  );
};

export default Fusiooooon;
