import logo from './logo.svg';
import './App.css';

import Checkboxes from './components/Checkboxes';

function App() {
  return (
    <div className="App">
      <Checkboxes people={["Pesho", "Kiro", "Gosho", "Asen", "Cura"]} />
    </div>
  );
}

export default App;
