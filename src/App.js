import './App.css';
import Card3Alter from './Components/Card3Alter';
import Footer from './Components/footer';
import Card1 from './Components/Card1';
import Navbar from './Components/Navbar';
import Card2 from './Components/Card2';
import Slider from './Components/Slider';
import Card3 from './Components/Card3';
import Card4 from './Components/Card4';
import Faqs from './Components/Faqs';
import ResponsiveNavbar from './Components/ResponsiveNavbar';

function App() {
  return (
    <div style={{backgroundColor:"#dae9b6"}} >
      <ResponsiveNavbar/>
      {/* <Navbar/> */}
      <Card1/>
      <Card2/>
      <Slider/>
      <Card3/>
      <Card3Alter />
      <Card4/>
      <Faqs/>
      <Footer/>

    </div>
  );
}

export default App;
