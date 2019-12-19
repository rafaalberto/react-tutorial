import React, { Component } from 'react';
import Table from './Table';
import Form from './Form';

class App extends Component {
  state = {
    characters: []
  }

  handleSubmit = character => {
    this.setState({ characters: [...this.state.characters, character] });
  }

  removeCharacter = index => {
    const { characters } = this.state;

    this.setState({
      characters: characters.filter((character, idx) => {
        return idx !== index
      }),
    })
  }

  render() {
    const {characters} = this.state
    
    return (
      <div className="container">
        <Form handleSubmit={this.handleSubmit} /><br/>
        <Table characterData={characters} removeCharacter={this.removeCharacter} />
      </div>
    );
  }
}

export default App;
