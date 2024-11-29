import React from "react";
import menuData from "../../static/menus.json";
import testimonial from "../../static/testimonial.json"
import "./Menu.css";
import MenuCard from "../../components/MenuCard/MenuCard";
import Testimonial from "../../components/Testimonial/Testimonial";

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
      <hr></hr>
      <div className="menu-header">
        <h1>Testimonials</h1>
      </div>
      <div className="menu-items">
        {testimonial.map(item => (
            <div key={item.id}>
                <Testimonial rating={item.rating} name={item.name} avatar={item.avatar} comment={item.comment}/>
            </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;
