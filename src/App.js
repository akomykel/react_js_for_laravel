import React, { Component } from 'react';
import HardCodedDataComponent from './components/HardCodedDataComponent'
import PlayersComponent from './components/PlayersComponent'
import CompaniesComponent from './components/CompaniesComponent'

class App extends Component {

    render(){
        const host = "http://localhost:3000/";
        const info = "info";
        const players = "players";
        const companies = "companies";
        const requestMapping = window.location.href;

        function renderComponent(requestMapping){
            switch(requestMapping){
                case host + info:
                    return <HardCodedDataComponent/>
                case host + players:
                    return <PlayersComponent/>
                case host + companies:
                    return <CompaniesComponent/>
                default:
                    return <div><h2>Data Retrieved:</h2>No component rendered</div>
            }
        }

        return (
            <div>{renderComponent(requestMapping)}</div>
        )
    }
}

export default App;
