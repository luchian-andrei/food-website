import "./App.css";
import Header from "./components/Header";
import LeCatering from "./components/LeCatering";
import AboutCatering from "./components/AboutCatering";
import Menu from "./components/Menu";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="flex flex-col justify-center items-center font-playfair tracking-[3px] font-medium overflow-hidden">
      <Header />
      <LeCatering />
      <AboutCatering />
      <Menu />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
