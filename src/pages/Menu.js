import React from "react";
import menuData from "../static/menus.json";
import "./Menu.css";
import MenuCard from "../components/MenuCard/MenuCard";

function Menu() {
  return (
    <div className="menu-container">
      <div className="menu-header">
        <h1>Menu</h1>
      </div>
      <div className="menu-items">
        {menuData.map((item) => (
          <MenuCard
            key={item.id}
            image={item.image}
            dish={item.dish}
            price={item.price}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
}

export default Menu;
