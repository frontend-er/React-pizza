import React from 'react';
import { Route } from 'react-router';
import { useDispatch } from "react-redux";


import { Header } from './components';
import { Home, Cart } from './pages';
import axios from 'axios';
import { setPizzas } from "./redux/action/pizzas";

function App() {

  const dispatch = useDispatch();

  React.useEffect(() => {
    axios.get('http://localhost:3001/pizzas').then(({ data }) => {
      dispatch(setPizzas(data));
      //  setPizzas(data.pizzas)
    });
  });



  return (
    <div className="wrapper">
      <Header />

      <div className="content">
        <Route exact path="/" component={Home} />
        <Route exact path="/cart" component={Cart} />

      </div>
    </div>
  );
}




export default App;

