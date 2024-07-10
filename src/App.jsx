import { useState } from "react";
import ProductList from "./ProductList";
import "./App.css";
import AboutUs from "./AboutUs";

function App() {
  const [showProductList, setShowProductList] = useState(false);

  const handleGetStartedClick = () => {
    setShowProductList(true);
  };

  return (
    <div className="app-container">
      <div className={`landing-page ${showProductList ? "fade-out" : ""}`}>
        <div className="background-image">
          <img
            src="https://images.unsplash.com/photo-1487070183336-b863922373d4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="background image"
          />
        </div>
        <div className="content">
          <div className="landing_content">
            <h1>Welcome To Paradise Nursery</h1>
            <div className="divider"></div>
            <p>Where Green Meets Serenity</p>

            <button
              className="get-started-button"
              onClick={handleGetStartedClick}
            >
              Get Started
            </button>
          </div>
          <div className="aboutus_container">
            <AboutUs />
          </div>
        </div>
      </div>
      <div
        className={`product-list-container ${showProductList ? "visible" : ""}`}
      >
        <ProductList />
      </div>
    </div>
  );
}

export default App;
