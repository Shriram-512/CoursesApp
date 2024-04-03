import logo from './logo.svg';
import './App.css';
import Header from './components/Header'

function App() {
  return (
    <div >
      <Header name="Simran Kasare" title='1st card'/>
      <h1>
        This is react project
      </h1>
      <hr/>
      <Header name='Suhani Kasare' title="2nd card"/>
      <p>I am learning react project</p>

    </div>
  );
}

export default App;
