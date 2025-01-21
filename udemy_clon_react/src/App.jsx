import Navbar from "./components/Navbar.jsx";
import SaleImage from "./components/SaleImage.jsx";
import Recommended from "./components/recommended.jsx";
import Recommended_container from "./components/Recommended_container.jsx";
import Topics from "./components/topics.jsx";
import PopularSection from "./components/PopularSection.jsx";
import Footer from "./components/footer.jsx";

import "./App.css";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <SaleImage></SaleImage>
      <Recommended></Recommended>
      <Recommended_container></Recommended_container>
      <Topics></Topics>
      <PopularSection></PopularSection>
      <Footer></Footer>
    </div>
  );
}

export default App;
