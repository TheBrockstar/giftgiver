import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class App extends Component {
  constructor() {
    super();
    this.state = {
      gifts: []
    }
  }

  addGift = _ => {
    const { gifts } = this.state;
    
    const ids = this.state.gifts.map(gift => gift.id);

    const maxId = ids.length > 0 ? Math.max(...ids) : 0;

    gifts.push({ id: maxId + 1 });

    this.setState({ gifts });
  }

  render() {
    return (
      <div>
        <h2>Gift Giver</h2>
        <Button className="button-add" onClick={this.addGift}>Add Gift</Button>
      </div>
    )
  }
}

export default App;