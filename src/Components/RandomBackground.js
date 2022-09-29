import React, { useState } from "react";
import { useEffect } from "react";

const RandomBackground = ({ pUrl, pName, pClass }) => {
  let url = pUrl;
  const [name, setName] = useState("");
  const [theme, setTheme] = useState({
    borderRadius: "50%",
    fontWeight: "600",
    fontSize: "15px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "35px",
    width: "35px",
    color: "white",
  });
  const changeBG = () => {
    if (!url) {
      setTheme({ ...theme, padding: "5px" });
      let randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
      if (randomColor) {
        setTheme({ ...theme, backgroundColor: randomColor });
      }
      if (pName) {
        const myArray = pName.split(" ");
        setName(myArray[0].charAt(0) + myArray[1].charAt(0));
      }
    }
  };
  useEffect(() => {
    changeBG();
  }, [pUrl, pName, pClass]);
  useEffect(() => {
    console.log(theme);
  }, [theme]);
  return (
    <>
      <div>
        {url ? (
          <img src={url} style={theme} alt="dynamic" />
        ) : (
          <div>
            <div style={theme}>{name}</div>
          </div>
        )}
      </div>
    </>
  );
};

export default RandomBackground;
