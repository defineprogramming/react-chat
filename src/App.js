import React from 'react';
import ChatRoom from './components/ChatRoom';
import './styles.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <ChatRoom />
      </div>
    );
  }
}

export default App;