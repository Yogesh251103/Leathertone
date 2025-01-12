import { Navbar } from "./components/Navbar";
import { Hero } from "./section/Hero";
import { Partners } from "./section/Partners";
import { Services } from "./section/Services";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Partners/>
    </>
  );
}

export default App;
