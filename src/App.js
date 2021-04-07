import React from 'react';
import { Route } from 'react-router';


import { Header } from './components';
import { Home, Cart } from './pages';
import axios from 'axios';


function App() {
  const [pizzas, setPizas] = React.useState([]);


  React.useEffect(() => {
    axios.get('http://localhost:3000/db.json').then(({ data }) => {
      setPizas(data.pizzas);
  });
}, [])

console.log(pizzas);

return (
  <div className="wrapper">
    <Header />

    <div className="content">
      <Route exact path="/" render={() => <Home items={pizzas} />} />
      <Route exact path="/cart" component={Cart} />

    </div>
  </div>
);
}

export default App;
