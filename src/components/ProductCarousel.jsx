import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../redux/feauters/products/productsSlice";
import "./ProductCarousel.css"; 

function ProductCarousel({ featuredOnly = false, maxProducts = 5 }) {
  const dispatch = useDispatch();
  const allProducts = useSelector((state) => state.products.products);
  const status = useSelector((state) => state.products.status);
  const [currentIndex, setCurrentIndex] = useState(0);


  const VISIBLE_COUNT = 5;
  const ITEM_WIDTH = 260;
  const ITEM_HEIGHT = 600;
  const GAP = 16;
  const VIEWPORT_WIDTH = VISIBLE_COUNT * ITEM_WIDTH + (VISIBLE_COUNT - 1) * GAP;
  const CENTER_INDEX = Math.floor(VISIBLE_COUNT / 2);

 
  const products = React.useMemo(() => {
    let filtered = [...allProducts];

    if (featuredOnly) {
      filtered = filtered.filter((product) => product.feautured === true);
    }

    
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

  
  const items = [...products, ...products];

 
  const shiftX = (currentIndex - CENTER_INDEX) * (ITEM_WIDTH + GAP);
  const active = items[currentIndex];

  
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
       
        <div className="col-md-4">
         <u> <h3> I PIU VENDUTI :</h3></u>
          
          
        </div>

        
        <div className="col-md-4">
          {active && (
            <>
              <h1>{active.name}</h1>
              <h3>{active.info}</h3>
            </>
          )}
        </div>

        
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
