import "./App.css";
import Header from "./components/header/Header";
import Banner from "./components/banner/Banner";
import Testimonio from "./components/testimonio/Testimonio";
import Services from "./components/servicios/Services";
import Faq from "./components/faq/Faq";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="app">
      <Header />

      <Banner />

      <Testimonio />

      <Services />

      <Faq />

      <Contact />

      <Footer />
    </div>
  );
}

export default App;
