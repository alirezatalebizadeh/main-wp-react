import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './component/Header/Header';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Footer from './component/Footer/Footer'

function App() {
  return (
    <div className="App">
      <Row>
        {/* <Header /> */}
        <Footer />
      </Row>
    </div>
  );
}

export default App;
