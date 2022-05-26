import './App.css';
import Contato from './components/Contato';
import Header from './components/Header';
import Orcamento from './components/Orcamento';
import Servicos from './components/Servicos';
import Tecnicos from './components/Tecnicos';



function App() {
  return (
    <div className="App">
     <Header />
     <Servicos />
     <Tecnicos />
     <Orcamento />
     <Contato />
    </div>
  );
}

export default App;
