import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './index.css';
import Layout from "./Layout";
import Home from "../src/pages/Home";
import About from "../src/pages/About";
import MHome from "../src/pages/MHome";
import Reviews from "../src/pages/Reviews";
import AboutUs from "../src/pages/AboutUs";
import FAQ from "../src/pages/FAQ";
import Help from "../src/pages/Help";
import Listings from "../src/pages/Listings";

const App = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path = "/" element = {<Layout />}>
          {/*<Route index element={<Home />}></Route>
          <Route path="about" element={<About />}></Route>*/}
          <Route path="mhome" element={<MHome />}></Route>
          <Route path="reviews" element={<Reviews />}></Route>
          <Route path="about us" element={<AboutUs />}></Route>
          <Route path="faq" element={<FAQ />}></Route>
          <Route path="help" element={<Help />}></Route>
          {/*<Route path="listings" element={<Listings />}></Route>*/}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <App/>
  </React.StrictMode>
);
