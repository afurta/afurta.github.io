import React from "react";
import "./App.css";
import InfoTable from "./components/infoTable";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Admin from "./components/admin/admin";
import ErrorPage from "./components/errorPage/ErrorPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App: React.FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div className="container">
          <>
            <Routes>
              <Route path="/" element={<InfoTable />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="*" element={<ErrorPage />} />
            </Routes>
          </>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
