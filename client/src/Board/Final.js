import React from "react";
import "../popUp.css";

function Final({ turn }) {
  return (
    <>
      <div className="backdrop"></div>
      <div className="popup">
        <div className="popover">
          {!turn ? (
            <p className="text" style={{ color: "white" }}>
              you won
            </p>
          ) : (
            <p className="text" style={{ color: "white" }}>
              you lost
            </p>
          )}
        </div>

        <div
          style={{
            backgroundColor: "lightblue",
            textAlign: "center",
            paddingTop: "1em",
            paddingBottom: "1em",
            cursor: "pointer",
            border: "3px solid black",
          }}
          onClick={() => {
            window.location.reload();
          }}
        >
          Return Home
        </div>
      </div>
    </>
  );
}

export default Final;
