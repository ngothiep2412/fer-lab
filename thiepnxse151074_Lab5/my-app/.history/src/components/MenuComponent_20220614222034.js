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
          <div className="bg-blue-200 p-2">
            <div className="font-semibold text-left mb-2">{dish.name}</div>
            <div className="text-left">{dish.description}</div>
          </div>
        </Card>
      );
    else return <div></div>;
  }
  renderDishComment(dish) {
    if (dish != null)
      return (
        <Card>
          <div className="bg-blue-200 p-2">
            {dish.comments.map((item) => {
              var date = new Date(item.date);
              return (
                <div key={item.id} className="font-semibold text-left mb-2">
                  <h5>{item.comment}</h5>
                  <span>
                    By:<strong>{item.author}</strong>, {date.getMonth()},
                    {date.getDay()},{date.getYear()}
                  </span>
                </div>
              );
            })}
          </div>
        </Card>
      );
    else return <div></div>;
  }

  render() {
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
              <div className="w-full absolute bottom-0 text-center bg-blue-400 text-white uppercase">
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
          <div className="col-12 col-md-5 m-1">
            {this.renderDishComment(this.state.selectedDish)}
          </div>
        </div>
      </div>
    );
  }
}

export default Menu;
