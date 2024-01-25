import React from 'react';
import './App.css';
import Home  from "../src/pages/Home/home";
import Navbar from "../src/components/Navbar/navbar";
import Footer from "../src/components/Footer/footer";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
