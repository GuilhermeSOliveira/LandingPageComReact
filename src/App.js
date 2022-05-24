import './App.css';
import Header from './components/Header/Header';
import Orcamento from './components/Orcamento/Orcamento';
import Servicos from './components/Servicos/Servicos';
import Tecnicos from './components/Tecnicos/Tecnicos';

function App() {
  return (
    <div className="App">
     <Header />
     <Servicos />
     <Tecnicos />
     <Orcamento />
    </div>
  );
}

export default App;
