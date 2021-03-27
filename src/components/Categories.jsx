import React from "react";

function Categories({ items, onClick }) {

  const [activeItem,setActiveItem] = React.useState(null);


  return (
    <div>
      <div className="categories">
        <ul>
          <li>Все</li>
          {items.map((name, index) => (
            <li className={activeItem === index ? 'active' : ''} onClick={() => setActiveItem(index)} key={`${name}_${index}`}>{name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Categories;
