import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Tile from "./tile";
import shuffleArray from "./util/shuffleArray";
import swap from "./util/swap";

const App = () => {
  const [tiles, setTiles] = useState(
    shuffleArray([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15])
  );
  // const tiles = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

  // shuffleArray(tiles);

  const handleClick = (t, i) => {
    //alert("click" + t + " " + i);

    if (tiles[i + 1] === 0 && i % 4 !== 3) {
      //swap i , i+1
      console.log("right");
      setTiles(swap(i, i + 1, tiles));
    } else if (tiles[i - 1] === 0 && i % 4 !== 0) {
      console.log("left");
      //swap i , i-1
      setTiles(swap(i, i - 1, tiles));
    } else if (tiles[i - 4] === 0 && i >= 4) {
      console.log("up");
      //swap i, i-4
      setTiles(swap(i, i - 4, tiles));
    } else if (tiles[i + 4] === 0 && i < 12) {
      console.log("down");
      //swap i, i+4
      setTiles(swap(i, i + 4, tiles));
    }
  };
  const listTiles = tiles.map((tile, index) => (
    <Tile value={tile} clickTile={() => handleClick(tile, index)} />
  ));
  return (
    <div className="App">
      <div className="Board">{listTiles}</div>
    </div>
  );
};

export default App;
