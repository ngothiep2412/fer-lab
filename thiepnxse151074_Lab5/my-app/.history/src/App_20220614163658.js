import "./App.css";
import { Navbar, NavbarBrand } from "reactstrap";
import { Component } from "react";
import Menu from "./components/MenuComponent";
import { DISHES } from './shared/dishes';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES
    };
  }
  <Menu dishes={this.state.dishes} />


}

export default App;
