import "./chessboard.css";
const vertical = ["1", "2", "3", "4", "5", "6", "7", "8"];
const horizontal = ["a", "b", "c", "d", "e", "f", "g", "h"];
export default function Chessboard() {
  let board = [];
  for (let j = vertical.length - 1; j >= 0; j--) {
    for (let i = 0; i < horizontal.length; i++) {
      board.push(
        <div className="tile black-tile">
          [{horizontal[i]}
          {vertical[j]}]
        </div>
      );
    }
  }
  return <div id="chessboard">{board}</div>;
}
