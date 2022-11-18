import React, { Fragment } from "react";
import { Card } from "./components/Card";
import { Header } from "./components/Header";
import banner from "./imagens/banner2.png"
import card1 from "./imagens/card1.jpg"
import card2 from "./imagens/card2.jpg"
import card3 from "./imagens/card3.jpg"
import card4 from "./imagens/card4.jpg"
import "./styles/global.css";

function App() {
  return (
    <>
      <Header />

      <img width="100%" src={banner} />

      <h2 style={{ margin: 15 }}>Filmes</h2>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap"
        }}
      >
        <Card
          srcImg={card1}
          titulo="Liga Da Justiça"

        />
        <Card 
        srcImg={card2}
        titulo="Batman"
        />
        <Card
        srcImg={card3}
        titulo="Mulher Maravilha"
        />
        <Card
        srcImg={card4}
        titulo="Homem de aço"
        />
      </div>

    </>
  );
}

export default App;
