import React, { Component } from 'react';
import './App.css';
import giphy from './api/giphy';
import ButtonsIndex from './components/ButtonsIndex';
import ResultsIndex from './components/ResultsIndex';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      fetchedResults: []
    }
  }

  onButtonClick = async (searchTerm) => {
    const response = await giphy.get('/v1/gifs/search', {
      params: {
        q: searchTerm
      }
    });

    this.setState({
      searchTerm: searchTerm,
      fetchedResults: response.data.data
    })
  }

  render() {
    console.log(this.state.fetchedResults.length);
    
    return (
      <div className="App">
        <ButtonsIndex
          onButtonClick={this.onButtonClick}
        />
        <ResultsIndex
          fetchedResults={this.state.fetchedResults}
        />
      </div>
    );
  }
}

export default App;
