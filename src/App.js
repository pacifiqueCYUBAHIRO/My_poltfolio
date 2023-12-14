
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Blogs from './components/Blogs';
import Poltfolio from './components/Poltfolio';
import Contacts from './components/Contacts';
import Footer from "./components/Footer";
// import SignInForm from "./components/SignInForm";
function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <About />
      <Blogs />
      <Poltfolio />
      <Contacts />
      <Footer />
      
    </div>
  );
}

export default App;
