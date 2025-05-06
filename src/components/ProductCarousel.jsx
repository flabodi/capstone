import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../redux/feauters/products/productsSlice";
import "./ProductCarousel.css"; // Import the CSS file

function ProductCarousel({ featuredOnly = false, maxProducts = 5 }) {
  const dispatch = useDispatch();
  const allProducts = useSelector((state) => state.products.products);
  const status = useSelector((state) => state.products.status);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Layout constants
  const VISIBLE_COUNT = 5;
  const ITEM_WIDTH = 260;
  const ITEM_HEIGHT = 600;
  const GAP = 16;
  const VIEWPORT_WIDTH = VISIBLE_COUNT * ITEM_WIDTH + (VISIBLE_COUNT - 1) * GAP;
  const CENTER_INDEX = Math.floor(VISIBLE_COUNT / 2);

  // Filtra i prodotti in base alle opzioni
  const products = React.useMemo(() => {
    let filtered = [...allProducts];

    // Filtra per prodotti in evidenza se richiesto
    if (featuredOnly) {
      filtered = filtered.filter((product) => product.feautured === true);
    }

    // Limita al numero massimo di prodotti specificato
    return filtered.slice(0, maxProducts);
  }, [allProducts, featuredOnly, maxProducts]);

  useEffect(() => {
    if (status === "idle") dispatch(getProducts());
  }, [dispatch, status]);

  useEffect(() => {
    if (status === "succeeded" && products.length) {
      setCurrentIndex(Math.floor(products.length / 2));
    }
  }, [status, products]);

  if (status === "loading") return <p>Caricamento...</p>;
  if (status === "failed") return <p>Errore nel caricamento dei prodotti</p>;
  if (products.length === 0) return <p>Nessun prodotto disponibile</p>;

  // Duplicate products array
  const items = [...products, ...products];

  // Calculate shift based on duplicated list
  const shiftX = (currentIndex - CENTER_INDEX) * (ITEM_WIDTH + GAP);
  const active = items[currentIndex];

  // Disable navigation at ends of duplicated list
  const disablePrev = currentIndex <= 0;
  const disableNext = currentIndex >= items.length - 1;

  const handlePrev = () => {
    if (!disablePrev) setCurrentIndex(currentIndex - 1);
  };

  const handleNext = () => {
    if (!disableNext) setCurrentIndex(currentIndex + 1);
  };

  return (
    <div className="wrapper">
      <h1 className="text-center">
        BEVI COME UN NOBILE. <br /> VIVI COME TI PARE
      </h1>
      <div className="carouselContainer">
        <div
          className="viewport"
          style={{
            width: VIEWPORT_WIDTH,
            height: ITEM_HEIGHT,
          }}
        >
          <div
            className="carousel"
            style={{
              transform: `translateX(-${shiftX}px)`,
            }}
          >
            {items.map((item, idx) => {
              const isActive = idx === currentIndex;
              const imageUrl = item.cover;
              return (
                <div
                  key={`${item.id}-${idx}`}
                  className={`carouselItem ${
                    isActive ? "activeItem" : "inactiveItem"
                  }`}
                  style={{
                    width: ITEM_WIDTH,
                    height: ITEM_HEIGHT,
                    marginRight: idx < items.length - 1 ? GAP : 0,
                  }}
                >
                  {imageUrl ? (
                    <img
                      src={imageUrl}
                      alt={item.name}
                      className="productImage"
                      style={{ height: ITEM_HEIGHT }}
                    />
                  ) : (
                    <div className="placeholder">Nessuna immagine</div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Navigazione con frecce sotto il carosello */}
      <div className="navigation d-flex justify-content-between align-items-center w-100 px-3 ">
        <button
          onClick={handlePrev}
          disabled={disablePrev}
          className={`navArrow  ${disablePrev ? "arrowDisabled" : ""}`}
        >
          ←
        </button>
        <button
          onClick={handleNext}
          disabled={disableNext}
          className={`navArrow ${disableNext ? "arrowDisabled" : ""}`}
        >
          →
        </button>
      </div>
      <div className="row mx-5">
        {/* Colonna 1: titolo e lista dei più venduti */}
        <div className="col-md-4">
         <u> <h3> I PIU VENDUTI :</h3></u>
          {/* Esempio di lista statica; sostituisci con la tua mappatura */}
          
        </div>

        {/* Colonna 2: nome e prezzo del prodotto attivo */}
        <div className="col-md-4">
          {active && (
            <>
              <h1>{active.name}</h1>
              <h3>{active.info}</h3>
            </>
          )}
        </div>

        {/* Colonna 3: descrizione */}
        <div className="col-md-4 imb-font">
          {active && Array.isArray(active.description) && (
            <div>
              {active.description.map((block, i) => (
                <p key={i}>
                  {block.children.map(child => child.text).join('')}
                </p>
              ))}
            </div>
          )}
        </div>
      </div>
      
    </div>
  );
}

export default ProductCarousel;
