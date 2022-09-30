import React, { useState } from "react";
import { useEffect } from "react";

const RandomBackground = ({ pUrl, pName, pClass }) => {
  const url = pUrl ? pUrl : null;
  const [name, setName] = useState("");
  const [baseStyle, setBaseStyle] = useState({
    small: {
      borderRadius: "50%",
      fontWeight: "600",
      fontSize: "15px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "35px",
      width: "35px",
      color: "white",
      backgroundColor: "green",
    },
    large: {
      borderRadius: "50%",
      fontWeight: "600",
      fontSize: "20px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "90px",
      width: "90px",
      color: "white",
      backgroundColor: "green",
    },
  });
  const changeBG = () => {
    if (!url) {
      let randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
      if (pClass === "large") {
        setBaseStyle((current) => {
          const large = { ...current.large };
          large.backgroundColor = randomColor;
          return { ...current, large };
        });
      } else {
        setBaseStyle((current) => {
          const small = { ...current.small };
          small.backgroundColor = randomColor;
          return { ...current, small };
        });
      }

      if (pName) {
        const myArray = pName.split(" ");
        if (myArray.length > 1)
          setName(myArray[0].charAt(0) + myArray[1].charAt(0));
        else {
          setName(myArray[0].charAt(0));
        }
      }
    }
  };
  useEffect(() => {
    changeBG();
  }, [name]);

  return (
    <>
      {console.log(baseStyle.small)}
      <div>
        {url ? (
          <img
            src={url ? url : require("../Assets/Images/user-icon.png")}
            style={pClass === "small" ? baseStyle.small : baseStyle.large}
            alt="dynamic"
          />
        ) : (
          <div>
            <div style={pClass === "small" ? baseStyle.small : baseStyle.large}>
              {name ? (
                name
              ) : (
                <img
                  src={require("../Assets/Images/user-icon.png")}
                  alt="dynamic"
                />
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default RandomBackground;
