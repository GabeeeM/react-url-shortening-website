import "./App.css";
import Shortener from "./components/Shortener";
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
    </div>
  );
}

export default App;
