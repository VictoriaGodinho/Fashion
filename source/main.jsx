import { useState } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";

function App() {
  const fabrics = [
    { id: 1, name: "Pinkk", img: "images/ppink.jpg" },
    { id: 2, name: "Barbie", img: "images/barbie.jpg" },
    { id: 3, name: "Pink", img: "images/pink.jpg" },
    { id: 4, name: "Gold Glitter", img: "images/purple.jpg" },
    { id: 5, name: "Velvet Red", img: "images/glitter.jpg" },
    { id: 6, name: "Blue Sequin", img: "images/fur.jpg" },
    { id: 7, name: "black", img: "images/black.jpg" },
    { id: 8, name: "Emerald Silk", img: "images/polka.jpg" },
    { id: 9, name: "Denim", img: "images/ppolka.jpg" },
    { id: 10, name: "purple", img: "images/purplee.jpg" },
    { id: 11, name: "purple", img: "images/leopard.jpg" },
    { id: 12, name: "purple", img: "images/pleopard.jpg" },
    { id: 13, name: "Blue Sequin", img: "images/blue-sequin.jpg" },
    { id: 14, name: "Blue Sequin", img: "images/balcg.jpg" },
    { id: 15, name: "Blue Sequin", img: "images/star.jpg" },
  ];

  const [outfit, setOutfit] = useState({
    top: null,
    skirt: null,
    boots: null,
  });

  const handleDrop = (section, fabricImg) => {
    setOutfit((prev) => ({ ...prev, [section]: fabricImg }));
  };

  const handleDragStart = (event, fabricImg) => {
    event.dataTransfer.setData("fabricImg", fabricImg);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDropZone = (event, section) => {
    event.preventDefault();
    const fabricImg = event.dataTransfer.getData("fabricImg");
    handleDrop(section, fabricImg);
  };

  return (
    <div className="app">
      <div className="content">
        {/* LEFT SIDE: Title + description */}
        <div className="header">
          <h1>BARBIE DRESSUP</h1>
          <p>
            <strong>Barbie Fashion Designer</strong> is an interactive digital
            dress-up experience inspired by the iconic 2000s Barbie Fashion
            Plates. Choose from a range of fabrics and drag them onto different
            sections (top, skirt, and boots) to design your own glamorous
            Barbie look!
          </p>
        </div>

        {/* RIGHT SIDE: Barbie box + fabrics */}
        <div className="studio">
          {/* Barbie frame */}
          <div className="designer-stage">
            <div
              className="fabric-zone top-zone"
              onDragOver={handleDragOver}
              onDrop={(e) => handleDropZone(e, "top")}
            >
              {outfit.top && <img src={outfit.top} className="fabric-img" />}
            </div>

            <div
              className="fabric-zone skirt-zone"
              onDragOver={handleDragOver}
              onDrop={(e) => handleDropZone(e, "skirt")}
            >
              {outfit.skirt && <img src={outfit.skirt} className="fabric-img" />}
            </div>

            <div
              className="fabric-zone boots-zone"
              onDragOver={handleDragOver}
              onDrop={(e) => handleDropZone(e, "boots")}
            >
              {outfit.boots && <img src={outfit.boots} className="fabric-img" />}
            </div>

            <img
              src="images/barbie-overlay.png"
              alt="Barbie overlay"
              className="barbie-overlay"
            />
          </div>

          {/* Fabric picker */}
          <div className="fabric-panel">
            <h2>Choose your fabric</h2>
            <div className="fabric-grid">
              {fabrics.map((f) => (
                <img
                  key={f.id}
                  src={f.img}
                  alt={f.name}
                  className="fabric-option"
                  draggable
                  onDragStart={(e) => handleDragStart(e, f.img)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

window.addEventListener("load", () => {
  const root = createRoot(document.getElementById("root"));
  root.render(<App />);
});
