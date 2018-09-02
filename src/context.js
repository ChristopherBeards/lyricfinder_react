import React, { Component } from 'react';

// Create the context
const Context = React.createContext();

export class Provider extends Component {
  state = {
    track_list: [
      { track: { tract_name: 'song' } },
      { track: { tract_name: 'abc' } },
    ],
    heading: 'Top 10 Tracks',
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
