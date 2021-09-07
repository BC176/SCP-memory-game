import Main from './views/Main';
import './App.css';
import UserList from './components/UserList';
import UserForm from './components/UserForm';
import UserProfile from './components/UserProfile';
import MemoryGame from './components/MemoryGame';
import { Router } from "@reach/router";

function App() {
  return (
    <div className="App">
      <Router>
        <Main path='/' />
        <UserList path='/high-scores' />
        <UserForm path='/new' />
        <UserProfile path='/user/:userID' />
        <MemoryGame path='/game' />
      </Router>
    </div>
  );
}

export default App;
