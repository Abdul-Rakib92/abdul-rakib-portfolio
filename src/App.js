import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Home from "./components/Home";
import Project from "./components/Project";
import SocialIcon from "./components/SocialIcon";

function App() {
  return (
    <div>
      <Header></Header>
      <Home></Home>
      <About></About>
      <Project></Project>
      <Contact></Contact>

      <SocialIcon></SocialIcon>
      
    </div>
  );
}

export default App;
