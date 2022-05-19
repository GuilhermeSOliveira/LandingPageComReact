import './App.css';
import Header from './components/Header/Header';
import Servicos from './components/Servicos/Servicos';
import Tecnicos from './components/Tecnicos/Tecnicos';

function App() {
  return (
    <div className="App">
     <Header />
     <Servicos />
     <Tecnicos />
    </div>
  );
}

export default App;
