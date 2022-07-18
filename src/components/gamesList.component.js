import React from 'react';

class GamesListComponent extends React.Component {

    render() {
        return (
            <div>
                {
                    this.props.games.map((value, index) => {
                        return (<div key={index} className="card text-white bg-secondary mb-3">
                            <div className="card-header">
                                <span>{value.playerOneName}: {value.playerOneScore}</span>
                                <span className='float-end'>{value.playerTwoName}: {value.playerTwoScore}</span>
                                <div className='text-center'>
                                    <p>Current Winner: {value.playerOneScore >
                                        value.playerTwoScore ? value.playerOneName :
                                        value.playerOneScore === value.playerTwoScore ? "TIED" : value.playerTwoName}</p>
                                    <p>Win Difference: {Math.abs(value.playerOneScore - value.playerTwoScore)}</p>
                                </div>
                            </div>
                        </div>)
                    })
                }
            </div>
        );
    }
}

export default GamesListComponent;
