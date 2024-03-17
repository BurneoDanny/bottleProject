import logo from './logo.svg';
import './App.css';
import Header from './header/header';
import Section1 from './section1/section1';
import Section2 from './section2/section2';
import Uploader from './uploader/uploader';
import Footer from './footer/footer';
import Section3 from './section3/section3';
import Section4 from './section4/section4';
import Section5 from './section5/section5';
import ParticleJs from './Particles/Particles';
import Section6 from './Section6/Section6';

function App() {

  return (
    <div className="App">
      <ParticleJs />
      <Header />
      <Section5 />
      <Section1 />
      <Section3 />
      <Section2 />
      <Section6 />
      <Section4 />
      <Uploader />
      {/* //         <h1 className="text-white text-4xl font-medium">¿Que estamos esperando?</h1>
                <p className="text-white text-lg font-light">El cambio esta en nuestras manos.</p> */}
      <Footer />
    </div>
  );
}

export default App;
