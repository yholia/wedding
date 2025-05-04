import Greetings from './components/Greetings';
import EventDetails from './components/EventDetails';
import ColorScheme from './components/ColorScheme';
import './App.css'

function App() {
  return (
    <div className="min-h-screen">
      <Greetings />
      <EventDetails />
      <ColorScheme />
    </div>
  );
}

export default App;
