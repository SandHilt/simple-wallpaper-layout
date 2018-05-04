import * as React from 'react';
import './App.css';
import Header from './header/Header';
import Navigation from './navigation/Navigation';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <Header />
        <Navigation length={40} />
      </div>
    );
  }
}

export default App;
