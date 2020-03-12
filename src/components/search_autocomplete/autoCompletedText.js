import React from 'react';
import Countries from './countries';

class AutocompletedText extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            suggestions: [],
            text: ''
        }
    }

    onTextChange = (e) => {
        const value = e.target.value;
        let suggestions = [];

        if (value.length > 0) {
            const regex = new RegExp(`^${value}`, 'i');
            suggestions = Countries.sort().filter(v => regex.test(v));
        }

        this.setState(() => ({
            suggestions, 
            text: value,
        }))
    }

    selectedText(value) {
        this.setState(() => ({
            text: value,
            suggestions: []
        }))
    }

    renderSuggestions = () => {
        let { suggestions } = this.state;

        if (suggestions.length === 0) {
            return null;
        }

        return (
            <ul>
                {
                    suggestions.map((item, i) => (
                        <li 
                            key={i} 
                            onClick={this.selectedText(item)}
                        >{item}</li>
                    ))
                }
            </ul>
        )
    }

    render() {
        const { text, suggestions } = this.state;
        return (
            <div id="notebooks">
                <h2>Text Autocomplete</h2>
                <input id="query" type="text" onChange={this.onTextChange} value={text} />
                {this.renderSuggestions()}
                <span>Suggestions: {suggestions.length}</span>
            </div>
        )
    }
}

export default AutocompletedText;