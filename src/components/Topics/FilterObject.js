import React, { Component } from 'react';

class FilterObject extends Component {
    constructor () {
        super()
        this.state = {
            employees: [
                {
                    name: "Joe Smhoe",
                    title: "CEO",
                    age: 30,
                    hairColor: 'red'
                    
                },
                {
                    name: "Brian Ryan",
                    title: "Janitor",
                    age: 40
                },
                {
                    name: "Princess Leya",
                    title: "CFO",
                    age: 33
                }
            ],
            userInput: '',
            filteredEmployees: []
        }
    }
    handleChange(val) {
        this.setState({userInput: val})
    }

    filterEmployees(prop) {
        let employees = this.state.employees
        let filteredEmployees = []
        for (let i = 0; i < employees.length; i++){
            if ( employees[i].hasOwnProperty(prop) ) {
                filteredEmployees.push(employees[i])
            }
        }
            this.setState({ filteredEmployees: filteredEmployees})

    }
        
    render() {
        return (
            <div className="puzzleBox FilterObjectPB">
               <span className="puzzleText">Original { JSON.stringify(this.state.employees, 10, null)}</span>
               <h4> Filter Object</h4>
               <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value)}></input>
               <button className="confirmationButton" onClick={ () => this.filterEmployees(this.state.userInput)}>Filter</button>
               <span className="resultsBox FilterObjectPB"> Filtered {JSON.stringify(this.state.filteredEmployees, null, 10)}</span>
            </div>
        )
    }
}


export default FilterObject;