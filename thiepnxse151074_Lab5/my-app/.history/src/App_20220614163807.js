import "./App.css";
import { Navbar, NavbarBrand } from "reactstrap";
import { Component } from "react";
import Menu from "./components/MenuComponent";
import { DISHES } from "./shared/dishes";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
    };
  }
  render() {
    return (
      <div className="App">
        <Navbar dark className="bg-blue-600">
          <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
        <Menu></Menu>
      </div>
    );
  }
}

export default App;
