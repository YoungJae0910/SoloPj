import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../components/Header/Header";
import MainPage from "../Page/MainPage";
import Footer from "../components/Footer/Footer";
import MenuPage from "../Page/MenuPage";
import MenuDetailPage from "../Page/MenuDetailPage";
import MenuDetail from "../components/MenuDetail/MenuDetail";

export default function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/menudetail/:id" element={<MenuDetailPage />} />
        {/* params설정 : route 자체에서 path값에 /:id를 준다 */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
