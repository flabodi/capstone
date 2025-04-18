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
  const ITEM_WIDTH = 150;
  const ITEM_HEIGHT = 300;
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
      <h2 className="text-center">
        BEVI COME UN NOBILE. <br /> VIVI COME TI PARE
      </h2>
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
      <div className="navigation">
        <button
          onClick={handlePrev}
          disabled={disablePrev}
          className={`navArrow ${disablePrev ? "arrowDisabled" : ""}`}
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

      {active && (
        <div className="info">
          <h3>{active.name}</h3>
          <p>Prezzo: €{active.price}</p>
          {Array.isArray(active.description) && (
            <p>
              {active.description
                .map((b) => b.children.map((c) => c.text).join(""))
                .join("\n")}
            </p>
          )}
        </div>
      )}
    </div>
  );
}

export default ProductCarousel;
