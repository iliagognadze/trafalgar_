import logo from './logo.svg';
import './App.css';
import './index.css';
import Navbar from './components/Navbar';
import ConsultToday from './components/ConsultToday';
import OurServices from './components/OurServices';
import HealthcareProviders from './components/HealthcareProviders';
import DownloadApps from './components/DownloadApps';
import LatestArticles from './components/LatestArticles';
import Footer from './components/Footer';



function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <ConsultToday></ConsultToday>
      <OurServices></OurServices>
      <HealthcareProviders></HealthcareProviders>
      <DownloadApps></DownloadApps>
      <LatestArticles></LatestArticles>
      <Footer></Footer>
    </div>
  );
}

export default App;
