import { Component } from "react";
import { Card, CardImg } from "reactstrap";

class DishDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDish: null,
    };
  }
  renderDish() {
    this.setState({ selectedDish: this.props.selectedDish });
    if (this.props.selectedDish != null) {
      return (
        <Card>
          <CardImg
            top
            src={this.props.selectedDish.image}
            alt={this.props.selectedDish.name}
          />
          <div className="bg-[#FCF8E8] p-2">
            <div className="text-[#DF7861] text-center uppercase mb-2">
              <strong>{this.props.selectedDish.name}</strong>
            </div>
            <div className="text-[#DF7861] text-left">
              {this.props.selectedDish.description}
            </div>
          </div>
        </Card>
      );
    } else return <div></div>;
  }
  renderDishComment() {
    if (this.props.selectedDish != null) {
      return (
        <Card>
          <div className="bg-[#FCF8E8] text-[#DF7861] p-2 h-[540px] leading-relaxed">
            {this.props.selectedDish.comments.map((item) => {
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
    } else return <div></div>;
  }
  render() {
    console.log(this.state.selectedDish);
    return (
      <div className="row">
        <div className="col-12 col-md-5 m-2 gap-4">
          {this.renderDish(this.props.selectedDish)}
        </div>
        <div className="col-12 col-md-5 m-2 gap-4">
          {this.renderDishComment(this.props.selectedDish)}
        </div>
      </div>
    );
  }
}

export default DishDetail;
