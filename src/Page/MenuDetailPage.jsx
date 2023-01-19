import React from "react";
import MenuDetail from "../components/MenuDetail/MenuDetail";
import ComentInput from "../components/Coment/ComentInput";
import ComentList from "../components/Coment/ComentList";

export default function MenuDetailPage() {
  return (
    <div>
      <MenuDetail />
      <ComentInput />
      <ComentList />
    </div>
  );
}
