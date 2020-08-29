import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const Tile = ({ value, clickTile }) => {
  //const [tiles, setTiles] = useState(0);

  return (
    <>
      {value != 0 ? (
        <div className="Tile" onClick={clickTile}>
          {value}
        </div>
      ) : (
        <div className="Tile0">{value}</div>
      )}
    </>
  );
};

export default Tile;
