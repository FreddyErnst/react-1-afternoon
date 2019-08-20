import React, { Component } from 'react';

class Palindrome extends Component {
    constructor() {
        super()
        this.state = {
            userInput: '',
            palindrome: ''
        }
    }
    handleEvent (val) {
        this.setState({userValue: val})
    }
    isPalindrome (userInput) {
        let forwards = userInput;
        let backwards = userInput;
        backwards = backwards.split('')
        backwards = backwards.reverse()
        backwards = backwards.join('')
        if (forwards === backwards) {
            this.setState({palindrome: 'true'})
        } else {
            this.setState({palindrome: 'false'})
        }
        
    }
    render() {
        return (
            <div className="puzzleBox filteredStringPB">
                <h4> Palindrome </h4>
                <input className="inputLine" onChange={(e) => this.handleChange(e.target.value)}></input>
                <button className="confirmationBox" onClick={() => this.isPalindrome(this.state.userInput)}> Check</button>
                <span class="resultsBox"> Palindrome {this.state.palindrome}</span>
            </div>
        )
    }
}

export default Palindrome;