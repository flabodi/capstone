import React, { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../redux/feauters/categories/categoriesSlice";
import { setSelectedCategory } from "../redux/feauters/categories/filtersSlice";

function CategoriesSlider() {
  const dispatch = useDispatch();
  const { categories = [], status, error } = useSelector((state) => state.categories);
  const selected = useSelector((state) => state.filters.selectedCategory);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchCategories());
    }
  }, [dispatch, status]);

  const positions = useMemo(() => {
    if (categories.length <= 1) return ["0%"];
    return categories.map((_, i) => `${(i / (categories.length - 1)) * 100}%`);
  }, [categories]);

  const selectedIndex = useMemo(() => {
    const idx = categories.findIndex((c) => c.id === selected);
    return idx >= 0 ? idx : 0;
  }, [categories, selected]);

  if (status === "loading") return null;
  if (status === "failed") return <div>Error: {error}</div>;
  if (categories.length === 0) return null;

  const handleClick = (id) => {
    dispatch(setSelectedCategory(id));
  };

  const isMobile = window.innerWidth <= 576;

  return (
    <div className="categories-wrapper">
  
      {!isMobile && <div className="categories-line" />}
      {!isMobile && <div className="categories-circle" style={{ left: "0%" }} />}
      {!isMobile && <div className="categories-circle" style={{ left: "100%" }} />}

   
      <div className={isMobile ? "categories-scroll" : ""}>
        {categories.map((cat, idx) => (
          <span
            key={cat.id}
            className={`categories-label ${selected === cat.id ? "active" : ""}`}
            style={
              isMobile
                ? {}
                : { left: positions[idx], position: "absolute", transform: "translateX(-50%)", top: "-20px" }
            }
            onClick={() => handleClick(cat.id)}
          >
            {cat.category.toUpperCase()}
          </span>
        ))}
      </div>

    
      {!isMobile && <div className="categories-knob" style={{ left: positions[selectedIndex] }} />}
    </div>
  );
}

export default CategoriesSlider;
