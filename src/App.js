import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Tile from "./tile";
import shuffleArray from "./util/shuffleArray";
import swap from "./util/swap";

const App = () => {
  const [tiles, setTiles] = useState(
    shuffleArray([1, 0, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15])
  );

  const handleClick = (t, i) => {
    if (checkWinner()) {
      return;
    }
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

  const checkWinner = () => {
    const winTiles = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 0];

    if (JSON.stringify(tiles) === JSON.stringify(winTiles)) {
      return true;
    }
    return null;
  };

  const listTiles = tiles.map((tile, index) => (
    <Tile value={tile} clickTile={() => handleClick(tile, index)} />
  ));
  const result = checkWinner();
  return (
    <div className="App">
      <div className="Board">{listTiles}</div>
      <div className="Result">{result ? "you win" : "try"}</div>
    </div>
  );
};

export default App;
