import './App.css';
import Tickets from './components/Tickets';
import Event from './components/Event';

function App() {
  return (
    <div className='container'>
      <div className='get-tickets'>
        <Tickets />
      </div>
      <div className='event-draw'>
        <Event />
      </div>
    </div>
  );
}

export default App;
