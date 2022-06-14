import { Component } from "react";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardBody,
  CardTitle,
} from "reactstrap";

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

  renderDish(dish) {
    if (dish != null)
      return (
        <Card>
          <CardImg top src={dish.image} alt={dish.name} />
          <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
      );
    else return <div></div>;
  }

  render() {
    const menu = this.props.dishes.map((dish) => {
      return (
        <div className="col-12 col-md-5 m-1 gap-4">
          <div
            className="w-[400px] h-auto "
            key={dish.id}
            onClick={() => this.onDishSelect(dish)}
          >
            <div className="relative">
              <img
                className="w-[100px] h-[100px] flex-shrink-0 object-cover"
                src={dish.image}
                alt={dish.name}
              />
              <div className="absolute bottom-0">
                <CardTitle>{dish.name}</CardTitle>
              </div>
            </div>
          </div>
        </div>
      );
    });

    return (
      <div className="container">
        <div className="row">{menu}</div>
        <div className="row">
          <div className="col-12 col-md-5 m-1">
            {this.renderDish(this.state.selectedDish)}
          </div>
        </div>
      </div>
    );
  }
}

export default Menu;
