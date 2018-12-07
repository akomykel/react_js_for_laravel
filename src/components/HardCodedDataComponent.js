import React, {Component} from 'react';
import axios from 'axios';

export default class HardCodedDataComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            infos: [],
            isLoaded: false,
        }
    }

    componentDidMount(){
        axios.get('http://localhost:8000/api/my_first_api')
             .then(response=>{
                this.setState({
                    isLoaded: true,
                    infos:response.data,
                });
             });
    }

    render() {
        var { isLoaded, infos } = this.state;

        if(!isLoaded){
            return <div>Loading Info...</div>;
        } else {
            return (
                <div className="App">
                    <h2>Data Retrieved:</h2>
                    <div>
                        {infos.map(info => (
                            <div key={info.mobile}>
                                <div style={{padding:'5px'}}>
                                    <div>Name: {info.name}</div>
                                    <div>Email: {info.email}</div>
                                    <div>Mobile: {info.mobile}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            );
        }
    }
}
