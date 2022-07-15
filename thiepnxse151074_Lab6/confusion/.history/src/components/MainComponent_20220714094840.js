import React, { Component } from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import Home from "./HomeComponent";
import Menu from "./MenuComponent";
import DishDetail from "./DishdetailComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import { BATH } from "../shared/bath_shower";
import { Switch, Route, Redirect } from "react-router-dom";
import { BEDDING } from "../shared/bedding";
import { LIGHTING } from "../shared/lighting";
import Contact from "./ContactComponent";
import About from "./AboutComponent";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bath: BATH,
      lighting: LIGHTING,
      bedding: BEDDING,
    };
  }
  onDishSelect(dishId) {
    this.setState({ selectedDish: dishId });
  }
  render() {
    const HomePage = () => {
      return (
        <Home
          dish={this.state.bath.filter((dish) => dish.featured)[0]}
          promotion={this.state.bedding.filter((promo) => promo.featured)[0]}
          leader={this.state.leaders.filter((leader) => leader.featured)[0]}
        />
      );
    };
    const DishWithId = ({ match }) => {
      return (
        <DishDetail
          dish={
            this.state.bath.filter(
              (dish) => dish.id === parseInt(match.params.dishId, 10)
            )[0]
          }
          comments={this.state.lighting.filter(
            (comment) => comment.dishId === parseInt(match.params.dishId, 10)
          )}
        />
      );
    };

    return (
      <div>
        <Header />
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route
            exact
            path="/aboutus"
            component={() => <About leaders={this.state.leaders} />}
          />
          <Route
            exact
            path="/menu"
            component={() => <Menu dishes={this.state.bath} />}
          />

          <Route path="/menu/:dishId" component={DishWithId} />
          <Route exact path="/contactus" component={Contact}></Route>
          <Redirect to="/home" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default Main;
