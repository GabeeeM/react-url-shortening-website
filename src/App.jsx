import "./App.css";
import Shortener from "./components/Shortener";
import Hero from "./containers/Hero";
import Navbar from "./containers/Navbar";

function App() {
  return (
    <div className="App h-screen">
      <Navbar />
      <Hero />
    </div>
  );
}

export default App;
