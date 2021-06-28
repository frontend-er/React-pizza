import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Categories, ShortPopup, PizzaBlock } from "../components";

import { setCategory } from '../redux/action/filters';

function Home() {
  const dispatch = useDispatch();
  const items = useSelector(({ pizzas }) => pizzas.items);

  const onSelectCategory = index => {
    dispatch(setCategory(index));
  }
  setCategory(5)
  return (
    <div className="container">
      <div className="content__top">
        <Categories
          onClick={onSelectCategory}
          items={["Мясные", "Вегитарианские", "Гриль", "Острые", "Закрытые"]}
        />
        <ShortPopup items={[{ name: "популярности", type: 'popular' }, { name: "цене", type: 'price' }, { name: "алфавиту", type: 'alphabet' }]} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {
          items && items.map(obj => <PizzaBlock key={obj.id} {...obj} />)
        }


      </div>
    </div>
  );
}

export default Home;
