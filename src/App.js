import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Slider from './Components/Slider';
import Title from './Components/Title';
import Wallet from './Components/Wallet';
import Live from './Components/Live';
import Service from './Components/Service';
import TopSeller from './Components/TopSeller';
import Nft from './Components/Nft';
import Form from './Components/Form';

function App() {
  return (
    <>
      <Header/>
      <Slider/>
      <Title/>
      <Wallet/>
      <Live/>
      <Title/>
      <Service/>
      <TopSeller/>
      <Title/>
      <Form/>
      <Nft/>
      <Footer/>
    </>
  );
}
export default App;