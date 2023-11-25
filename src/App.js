import './App.css';
import Header from './components/Header'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import HelloUser from './components/HelloUser';
import ContadorClick from './components/ContadorClick';
import PropsJson from './components/PropsJson';
import Data from './data/alunos.json';
import Cep from './components/Cep';

function App() {
  
  const nomeUser="End-F."
  
  // <PropsJson alunos={Data}></PropsJson>
  return (
    <div className="App">
      <Header></Header>
      <Cep></Cep>
      <ContadorClick></ContadorClick>
      <HelloUser nome={nomeUser}></HelloUser>
      <Projects></Projects>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
