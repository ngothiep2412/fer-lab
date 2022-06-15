import { Component } from "react";

import { CardTitle } from "reactstrap";
import DishDetailComponent from "./DishdetailComponent ";

class Menu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedDish: null,
    };
  }

  onDishSelect(dish) {
    this.setState({ selectedDish: dish });
  }

  render() {
    console.log(dish);
    const menu = this.props.dishes.map((dish) => {
      return (
        <div className="col-12 col-md-5 m-2 gap-4 mt-4">
          <div
            className="w-full h-auto border border-blue-800 rounded-lg"
            key={dish.id}
            onClick={() => this.onDishSelect(dish)}
          >
            <div className="relative flex items-center justify-center">
              <img
                className="text-center w-full h-full flex-shrink-0 object-cover"
                src={dish.image}
                alt={dish.name}
              />
              <div className="w-full absolute bottom-[8px] text-center bg-[#ECB390] text-white uppercase">
                <CardTitle>{dish.name}</CardTitle>
              </div>
            </div>
          </div>
        </div>
      );
    });

    // return (
    //   <div className="container">
    //     <div className="row">{menu}</div>
    //     <div className="row">
    //       <div className="col-12 col-md-5 m-2 gap-4">
    //         {this.renderDish(this.state.selectedDish)}
    //       </div>
    //       <div className="col-12 col-md-5 m-2 gap-4">
    //         {this.renderDishComment(this.state.selectedDish)}
    //       </div>
    //     </div>
    //   </div>
    // );
    return (
      <div className="container">
        <div className="row">{menu}</div>
        <DishDetailComponent selectedDish={this.props.selectedDish} />;
      </div>
    );
  }
}

export default Menu;
