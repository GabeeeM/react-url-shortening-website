import "./App.css";
import Shortener from "./components/Shortener";
import Boost from "./containers/Boost";
import Footer from "./containers/Footer";
import Hero from "./containers/Hero";
import Navbar from "./containers/Navbar";
import Statistics from "./containers/Statistics.jsx";

function App() {
  return (
    <div className="App h-screen">
      <Navbar />
      <Hero />
      <Shortener />
      <Statistics />
      <Boost />
      <Footer />
    </div>
  );
}

export default App;
