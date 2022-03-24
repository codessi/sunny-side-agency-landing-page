import Client from './component/Client'
import './App.scss';
import Header from './component/Header';
import Learn from './component/Learn'
import Service from './component/Service';
import Pictures from './component/Pictures'
import Footer from './component/Footer';



function App() {
  return (
    <>
      <Header />
      <Learn /> 
      <Service /> 
      <Client />
      <Pictures />
      <Footer />
    </>
  );
}

export default App;
