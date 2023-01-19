import React from "react";
import Board from "../components/Board/Board";
import Main from "../components/Main/Main";
import MainCard from "../components/Main/MainCard";
import MainSlide from "../components/MainSlide/MainSlide";
import MoreButton from "../components/Buttons/MoreButton";

export default function MainPage() {
  return (
    <div>
      <MainSlide />
      <Main />
      <MoreButton />
      <MainCard />
      <Board />
      <MoreButton />
    </div>
  );
}
