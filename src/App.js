import React from 'react';
import { Route } from 'react-router';
import { connect } from "react-redux";


import { Header } from './components';
import { Home, Cart } from './pages';
import axios from 'axios';
import { setPizzas } from "./redux/action/pizzas";
import store from './redux/store';


/*


function App() {


  React.useEffect(() => {
    
  }, [])



}
*/

class App extends React.Component {

  componentDidMount() {
    axios.get('http://localhost:3000/db.json').then(({ data }) => {

      this.props.setPizzas(data.pizzas)
    });
  }

  render() {
    return (
      <div className="wrapper">
        <Header />

        <div className="content">
          <Route exact path="/" render={() => <Home items={this.props.items} />} />
          <Route exact path="/cart" component={Cart} />

        </div>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    items: state.pizzas.items
  }
}


export default connect(mapStateToProps, { setPizzas })(App);
