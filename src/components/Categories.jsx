// src/components/CategoriesSlider.js
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

  // Always call hooks in the same order
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

  // Styles
  const wrapperStyle = {
    position: "relative",
    height: "3rem",
    margin: "80px",
  };
  const lineStyle = {
    position: "absolute",
    top: "50%",
    left: 0,
    right: 0,
    height: "2px",
    background: "#ffffff80",
   
  };
  const circleStyle = (left) => ({
    position: "absolute",
    top: "50%",
    left,
    width: "8px",
    height: "8px",
    background: "#ffffff",
    borderRadius: "50%",
    transform: "translate(-50%, -50%)",
  });
  const labelStyle = (left, isActive) => ({
    position: "absolute",
    top: 0,
    left,
    transform: "translateX(-50%)",
    cursor: "pointer",
    color: isActive ? "#FFC107" : "#FFFFFF",
    fontFamily: "monospace",
    fontSize: "0.9rem",
    letterSpacing: "1px",

  });
  const knobStyle = {
    position: "absolute",
    top: "50%",
    left: positions[selectedIndex],
    width: "6px",
    height: "20px",
    background: "#FFC107",
    transform: "translate(-50%, -50%)",
  };

  return (
    <div style={wrapperStyle}>
      {/* Track Line */}
      <div style={lineStyle} />

      {/* End circles */}
      <div style={circleStyle("0%" )} />
      <div style={circleStyle("100%")} />

      {/* Category labels */}
      {categories.map((cat, idx) => (
        <span 
          key={cat.id}
          style={labelStyle(positions[idx], selected === cat.id)}
          onClick={() => handleClick(cat.id)}
        >
          {cat.category.toUpperCase()}
        </span>
      ))}

      {/* Knob Indicator */}
      <div style={knobStyle} />
    </div>
  );
}

export default CategoriesSlider;
