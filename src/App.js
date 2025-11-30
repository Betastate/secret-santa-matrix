import logo from './logo.svg';
import './App.css';

import Checkboxes from './components/Checkboxes';

function App() {
  return (
    <div className="App">
      <Checkboxes people={["John", "Timmy", "Olivia", "Jason", "Cyril", "Selena", "Vasko", "Helena"]} />
    </div>
  );
}

export default App;
