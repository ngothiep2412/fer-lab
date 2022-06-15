import { Component } from "react";
import { Card, CardImg } from "reactstrap";

class DishDetailComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDish: this.props.selectedDish,
    };
  }

  renderDish() {
    return (
      if(this.state.selectedDish != null) {
      <Card>
        <CardImg
          top
          src={this.state.selectedDish.image}
          alt={this.state.selectedDish.name}
        />
        <div className="bg-[#FCF8E8] p-2">
          <div className="text-[#DF7861] text-center uppercase mb-2">
            <strong>{this.state.selectedDish.name}</strong>
          </div>
          <div className="text-[#DF7861] text-left">
            {this.state.selectedDish.description}
          </div>
        </div>
      </Card>
      }
      else <div></div>
    );
  }
  renderDishComment() {
    return (
      <Card>
        <div className="bg-[#FCF8E8] text-[#DF7861] p-2 h-[540px] leading-relaxed">
          {this.state.selectedDish.comments.map((item) => {
            var date = new Date(item.date);
            return (
              <div key={item.id} className="font-semibold text-left mb-5">
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
  }
  render() {
    return (
      <div className="row">
        <div className="col-12 col-md-5 m-2 gap-4">
          {this.renderDish(this.state.selectedDish)}
        </div>
        <div className="col-12 col-md-5 m-2 gap-4">
          {this.renderDishComment(this.state.selectedDish)}
        </div>
      </div>
    );
  }
}

export default DishDetailComponent;
