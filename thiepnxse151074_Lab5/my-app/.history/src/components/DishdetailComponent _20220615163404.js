import { Component } from "react";
import { Card } from "reactstrap";

class DishDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDish: this.props.selectedDish,
    };
  }

  renderDish(dish) {
    if (dish != null)
      return (
        <Card>
          <CardImg top src={dish.image} alt={dish.name} />
          <div className="bg-[#FCF8E8] p-2">
            <div className="text-[#DF7861] text-center uppercase mb-2">
              <strong>{dish.name}</strong>
            </div>
            <div className="text-[#DF7861] text-left">{dish.description}</div>
          </div>
        </Card>
      );
    else return <div></div>;
  }
  renderDishComment(dish) {
    if (dish != null)
      return (
        <Card>
          <div className="bg-[#FCF8E8] text-[#DF7861] p-2 h-[540px] leading-relaxed">
            {dish.comments.map((item, index) => {
              var date = new Date(item.date);
              return (
                <div key={index} className="font-semibold text-left mb-5">
                  <h5>{item.comment}</h5>
                  <span>
                    By: <strong>{item.author}</strong>, {date.toDateString()}
                  </span>
                </div>
              );
            })}
          </div>
        </Card>
      );
    else return <div></div>;
  }
}

export default DishDetail;
