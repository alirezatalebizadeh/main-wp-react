import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './component/Header/Header';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Footer from './component/Footer/Footer'
import Main from './component/Main/Main';

function App() {
  return (
    <div className="App">
      <Main />
      <Footer />
    </div>
  );
}

export default App;
