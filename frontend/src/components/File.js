import React, { useEffect, useState } from "react";
// const { promisify } = require("util");
// const pipeline = promisify(require("stream").pipeline);

const File = () => {
  const [file, setFile] = useState();

  useEffect(() => {
    console.log(file);
  }, [file]);

  return (
    <form>
      <input
        type="file"
        name="file"
        id="file"
        accept=".jpg, .jpeg, .png"
        onChange={(e) => setFile(e.target.files[0])}
      />
      <input type="submit" value="Enregistrer" />
    </form>
  );
};

export default File;
