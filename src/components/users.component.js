import React from 'react';

class UsersListComponent extends React.Component {

    render() {
        return (
            <div>
                {
                    this.props.users.map((value, index) => {
                        return (<div key={index} className="card text-white bg-secondary mb-3">
                            <div className="card-header">
                                <span>USERNAME: {value.username}</span>
                                <span className='float-end'>EMAIL: <a href={"mailto:" + value.email}>{value.email}</a></span>
                            </div>
                        </div>)
                    })
                }
            </div>
        );
    }
}

export default UsersListComponent;
