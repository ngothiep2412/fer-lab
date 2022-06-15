import React, { Component } from 'react';
import {Card} from "reactstrap"

class DishDetail  extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedDish: null,
        }
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
                  <div className="w-full absolute bottom-[8px] text-center bg-[#ECB390] text-white uppercase">
                    <CardTitle>{dish.name}</CardTitle>
                  </div>
                </div>
              </div>
            </div>
          );
        });
};

export default DishDetail ;