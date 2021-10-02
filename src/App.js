import React from 'react';
import './App.css';

import UsersContainer from './components/UsersContainer';
import UsersTable from './components/UsersTable';
import UsersCard from './components/UsersCard';

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
        <UsersContainer
          viewTable={viewTable}
          render={({users}) =>
          (viewTable === true) ?
            (<UsersTable users={users} />) :
            (<UsersCard users={users} />)
        }/>
      </div>
    );
  }
}

export default App;
