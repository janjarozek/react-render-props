import React from 'react';
import './App.css';

import UsersContainer from './components/UsersContainer';

class App extends React.Component {
  state = {
    viewTable: true
  }

  changeView = () => {
    this.setState({ viewTable: !this.state.viewTable })
  }

  render() {
    const {viewTable} = this.state;

    return (
      <div className="App">
        <button onClick={this.changeView}>Change view</button>
        <UsersContainer viewTable={viewTable} />
      </div>
    );
  }
}

export default App;
