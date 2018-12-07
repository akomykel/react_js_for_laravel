import React, {Component} from 'react';
import axios from 'axios';

export default class PlayersComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            players: [],
            isLoaded: false,
        }
    }

    componentDidMount(){
        axios.get('http://localhost:8000/api/players')
             .then(response => {
                this.setState({
                    isLoaded: true,
                    players:response.data,
                });
                console.log(this.state.players);
             })
             .catch(error => console.log('Failed: ', error))
    }

    render() {
        var { isLoaded, players } = this.state;

        if(!isLoaded){
            return <div>Loading Players...</div>;
        } else {
            return (
                <div className="App">
                    <h2>Data Retrieved:</h2>
                    <div>
                        {this.state.players.map((player) =>
                            <div key={player.id}>
                                <div style={{padding:'5px'}}>
                                    <div>Lastname: {player.lname}</div>
                                    <div>Firstname: {player.fname}</div>
                                    <div>Middlename: {player.mname}</div>
                                    <div>Position: {player.position}</div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            );
        }
    }
}
