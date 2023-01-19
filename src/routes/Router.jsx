import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../components/Header/Header";
import MainPage from "../Page/MainPage";
import Footer from "../components/Footer/Footer";
import MenuPage from "../Page/MenuPage";
import MenuDetailPage from "../Page/MenuDetailPage";

export default function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/menudetails" element={<MenuDetailPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
