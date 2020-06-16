//smoke test
//list
import React from "react";
import ReactDOM from "react-dom";

import list from "./List";
import card from "./Card";

describe("<List />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");

    // Pass required props in the usual way
    ReactDOM.render(function List(props) {
      return (
        <section className="List">
          <header className="List-header">
            <h2>{props.header}</h2>
          </header>
          <div className="List-cards">
            {props.cards.map((card) => (
              <Card key={card.id} title={card.title} content={card.content} />
            ))}
            <button type="button" className="List-add-button">
              + Add Random Card
            </button>
          </div>
        </section>
      );
    });

    ReactDOM.unmountComponentAtNode(div);
  });
});
