import './App.css';
import Tickets from './components/Tickets';
import Draw from './components/Draw';
import Event from './components/Event';

function App() {
  return (
    <div className="App">
      <Tickets />
      <Event />
      <Draw />
    </div>
  );
}

export default App;
