import './App.css';
import HeaderComponent from './components/HeaderComponent/HeaderComponent';
import ContentComponent from './components/ContentComponent/ContentComponent'
import FooterComponent from './components/FooterComponent/FooterComponent';

function App() {
  return (
    <div className="App">
      <HeaderComponent/>
      <ContentComponent/>
      <FooterComponent/>
    </div>
  );
}

export default App;
