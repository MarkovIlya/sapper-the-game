import React, {Component} from 'react';
import {connect} from "react-redux";
import Field from "../../components/field/field";
import Menu from "../../components/menu/menu";
import {changeMark, openCell, restartGame, startGame} from "../../actions/actionCreator";
import game from "../../Game";

class Sapper extends Component {

    state = {
        countUnmarkedMines: 40,
        countMines: 40,
        time: 0,
        start: false,
        win: false,
        loss: false,

    }

    startGame = (id, countMines) => {
        const {startGame} = this.props;
        startGame(id, countMines);
        this.setState({
            start: true,
        });
    }

    showMines = () => {
        const {cells} = this.props;

        cells.map(cell => {
            if (cell.hasMine) {
                cell.isOpened = true;
            }
        })
    }

    gameOver = () => {
        this.showMines();
        this.setState({
            loss: true,
        })
    }

    winGame = () => {
        this.showMines();
        this.setState({
            win: true,
        })
    }

    restartGame = () => {
        this.setState({
            countUnmarkedMines: 40,
            countMines: 40,
            time: 0,
            start: false,
            win: false,
            loss: false,
        })

        const { restartGame } = this.props;
        restartGame();
    }

    render() {

        const { start, countMines, loss, win } = this.state;

        const { cells, openCell, changeMark } = this.props;

        return (
            <div className="sapper">
                <Menu dimension={3} restartGame={this.restartGame}/>
                <Field
                    cells={cells}
                    dimension={3}
                    openCell={openCell}
                    changeMark={changeMark}
                    start={start}
                    startGame={this.startGame}
                    // countMines={countMines}
                    gameOver={this.gameOver}
                    loss={loss}
                    winGame={this.winGame}
                    win={win}
                />
            </div>
        );
    }

}

export default connect(({cells}) => ({
    cells,
}), { openCell, changeMark, startGame, restartGame })(Sapper);