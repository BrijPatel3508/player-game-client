import React from 'react';

class FormComponent extends React.Component {

    constructor() {
        super();
        this.state = {
            fields: {
                playerOne: "",
                playerTwo: "",
            }
        }
    }

    render() {
        const { fields } = this.state;
        return (
            <div>
                <h1>Please Add Both Player Details</h1>
                <form autoComplete="off">
                    <div className="form-group p-3">
                        Player 1 Name
                        <input type="text" className="form-control" name="playerOne" value={fields.playerOne}
                            onChange={event => this.handleUserInput(event)}
                            placeholder="Player 1" />
                    </div>

                    <div className="form-group p-3">
                        Player 2 Name
                        <input type="text" className="form-control" placeholder="Player 2"
                            name="playerTwo" value={fields.playerTwo}
                            onChange={event => this.handleUserInput(event)}
                        />
                    </div>
                    <div className='text-center'>
                        <button className="btn btn-primary" disabled={this.validatePlayerNames()} onClick={this.navigateToGame}>Continue</button>
                    </div>
                </form>
            </div>
        );
    }

    handleUserInput = e => {
        this.setState({
            fields: {
                ...this.state.fields,
                [e.target.name]: e.target.value
            }
        });
    };

    validatePlayerNames() {
        return this.state.fields.playerOne.length === 0 ||
            this.state.fields.playerTwo.length === 0 ||
            this.state.fields.playerOne.toLowerCase() === this.state.fields.playerTwo.toLowerCase()
    }

    navigateToGame = e => {
        this.props.parentCallback({ playerOne: this.state.fields.playerOne, playerTwo: this.state.fields.playerTwo, view: 'playerGame' });
        e.preventDefault();
    };
}

export default FormComponent;
