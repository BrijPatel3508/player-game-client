import React from 'react';
import FormComponent from './playerForm.component';
import GameComponent from './playerGame.component';
import UserListComponent from './users.component';
import GamesListComponent from './gamesList.component';
import MasterService from '../services/master.service';

class Dashboard extends React.Component {
    state = {
        view: "",
        player: {
            playerOne: "",
            playerTwo: ""
        },
        users: [],
        games: []
    }

    getUsersData() {
        MasterService.getUsers().then(
            (response) => {
                this.setState({ users: response.data.users });
            },
            error => {
                const resMessage =
                    (error.response &&
                        error.response.data &&
                        error.response.data.message) ||
                    error.message ||
                    error.toString();
                console.log(resMessage);
            }
        );
    }

    getSavedGames() {
        MasterService.getGames().then(
            (response) => {
                this.setState({ games: response.data.games });
            },
            error => {
                const resMessage =
                    (error.response &&
                        error.response.data &&
                        error.response.data.message) ||
                    error.message ||
                    error.toString();
                console.log(resMessage);
            }
        );
    }

    handleCallback = (childData) => {
        this.setState({
            view: childData.view,
            player: {
                playerOne: childData.playerOne,
                playerTwo: childData.playerTwo
            }
        })
    }

    setView = (view) => {
        this.setState({ view: view })
    }

    render() {
        return (
            <div>
                <button className="btn btn-primary btn-block m-3" onClick={() => { this.getUsersData(); this.setState({ view: "getUsers" }) }}>Get All Users</button>
                <button className="btn btn-primary btn-block m-3" onClick={() => { this.setState({ view: "playerForm" }) }}>Create New Game</button>
                <button className="btn btn-primary btn-block m-3" onClick={() => { this.getSavedGames(); this.setState({ view: "getAllSavedGames" }) }}>Get All Games</button>
                {this.state.view === 'playerForm' ? <FormComponent parentCallback={this.handleCallback} /> : null}
                {this.state.view === 'playerGame' ? <GameComponent player={this.state.player} /> : null}
                {this.state.view === 'getUsers' ? <UserListComponent users={this.state.users} /> : null}
                {this.state.view === 'getAllSavedGames' ? <GamesListComponent games={this.state.games} /> : null}
            </div>
        )
    }
}

export default Dashboard;