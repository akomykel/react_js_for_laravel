import React, {Component} from 'react';
import axios from 'axios';

export default class CompaniesComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            companies: [],
            isLoaded: false,
        }
    }

    componentDidMount(){
        axios.get('http://localhost:8000/api/showConnectwiseCompanies')
             .then(response=>{
                this.setState({
                    isLoaded: true,
                    companies:response.data,
                });
             });
    }

    render() {
        var { isLoaded, companies } = this.state;

        if(!isLoaded){
            return <div>Loading connectwise companies...</div>;
        } else {
            return (
                <div className="App">
                    <h2>Data Retrieved:</h2>
                    <div>
                        {companies.map(company => (
                            <div key={company.id}>
                                <div style={{padding:'5px'}}>
                                    <div>Company: {company.name}</div>
                                    <div>Status: {company.status.name}</div>
                                    <div>Address: {company.addressLine1}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            );
        }
    }
}
