import React from 'react';
import MasterService from '../services/master.service';

class GameComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            [this.props.player.playerTwo]: 0,
            [this.props.player.playerOne]: 0
        }
    }


    render() {
        return (
            <div>
                <div className='p-3 border-bottom border-5 mb-3'>
                    <div className='py-3'>
                        <h2 className='d-inline'>{this.props.player.playerOne}</h2>
                        <button className="btn btn-primary float-end" onClick={() => this.addWin(this.props.player.playerOne)}>Add Win</button>
                    </div>
                    Wins: {this.state[this.props.player.playerOne]}
                    <div className='py-3'>
                        <h2 className='d-inline'>{this.props.player.playerTwo}</h2>
                        <button className="btn btn-primary float-end" onClick={() => this.addWin(this.props.player.playerTwo)}>Add Win</button>
                    </div>
                    Wins: {this.state[this.props.player.playerTwo]}
                </div>
                <div className='text-center'>
                    <h2>Current Winner: {this.state[this.props.player.playerOne] >
                        this.state[this.props.player.playerTwo] ? this.props.player.playerOne :
                        this.state[this.props.player.playerOne] === this.state[this.props.player.playerTwo] ? "TIE" : this.props.player.playerTwo}</h2>
                    <h2>Win Difference: {Math.abs(this.state[this.props.player.playerOne] - this.state[this.props.player.playerTwo])}</h2>
                </div>
                <div className='text-center'>
                    <button className="btn btn-primary" onClick={this.saveGame}>Save Game</button>
                </div>
            </div>
        );
    }

    addWin = (player) => {
        this.setState({
            [player]: parseInt(this.state[player]) + 1
        })
    }

    saveGame = () => {
        MasterService.saveGame(this.state);
    }
}

export default GameComponent;
