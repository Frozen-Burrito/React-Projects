import React, {Component} from 'react';
import './quiz.css';

class Quiz extends Component {

    constructor(props) {
        super(props);
        this.state = {
            options: [
                {name: 'Pizza', votes: 0},
                {name: 'Donut', votes: 0},
                {name: 'Cookie', votes: 0},
                {name: 'Soda', votes: 0},
            ]
        }
    }

    vote = (i) => {
        let updatedOptions = [...this.state.options];
        updatedOptions[i].votes++;


        // function swap(array, i, j) {
        //     var temp = array[i];
        //     array[i] = array[j];
        //     array[j] = temp;
        // }
        this.setState({options: updatedOptions});
    }


    render() {
        return (
            <>  
                <h1>What's your favorite?</h1>

                <div className="options">
                    {
                        this.state.options.map((opt, i) => 
                            <div key={i} className="option">
                                <div className="votes">
                                    {opt.votes}
                                </div>

                                <div className="optLabel">
                                    {opt.name}
                                </div>
                                <button onClick={this.vote.bind(this, i)}>Vote</button>
                            </div>
                        )
                    }
                </div>
            </>
        )
    }

}

export default Quiz;