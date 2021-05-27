import React, { Component } from "react";
import Box from "./Box";
import Card from "./UI/Card";
import "./Board.css";

class Board extends Component {
  constructor(props) {
    super(props);

    this.state = {
      size: props.size,
      board: this.initBoard(props.size),
      winner: null,
      turn: 0,
    };

    this.renderWinner = this.renderWinner.bind(this);
    this.doTurn = this.doTurn.bind(this);
    this.checkBoard = this.checkBoard.bind(this);
  }

  initBoard(size) {
    let tiles = [];
    for (let index = 0; index < size * size; index++) {
      tiles.push({ value: null, id: index });
    }
    return tiles;
  }

  checkBoard() {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        this.state.board[a].value &&
        this.state.board[a].value === this.state.board[b].value &&
        this.state.board[a].value === this.state.board[c].value
      ) {
        this.setState({ winner: "Winner " + this.state.board[a].value });
      }
    }
  }

  reset = () => {
    this.setState({
      board: this.initBoard(this.state.size),
      winner: null,
      turn: 0,
    });
  };

  renderWinner() {
    if (this.state.winner) {
      return (
        <Card>
          <h2 style={{ textAlign: "center" }}>{this.state.winner}</h2>
          <div onClick={this.reset}>
            <Card isCentered={true}>
              <h1>Restart</h1>
            </Card>
          </div>
        </Card>
      );
    }
  }

  doTurn(turnData) {
    if (this.state.winner === null) {
      let newBoard = this.state.board;
      newBoard[turnData.index] = { value: turnData.value, id: turnData.index };
      this.setState({
        turn: this.state.turn + 1,
        board: newBoard,
      });
    }
  }

  render() {
    return (
      <React.Fragment>
        <Card isCentered={true}>
          <div className="grid">
            {this.state.board.map((tile) => (
              <Box
                key={tile.id}
                index={tile.id}
                value={tile.value}
                turn={this.state.turn}
                doTurn={this.doTurn}
                checkBoard={this.checkBoard}
              ></Box>
            ))}
          </div>
        </Card>
        {this.renderWinner()}
      </React.Fragment>
    );
  }
}

export default Board;
