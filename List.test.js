//smoke test
//list
import React from "react";
import ReactDOM from "react-dom";
import { render } from "@testing-library/react";
import List from "./List";

describe("<List />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");

    // Pass required props in the usual way
    ReactDOM.render(
      <div className="List-cards">
        {props.cards.map((card) => (
          <Card key={card.id} title={card.title} content={card.content} />
        ))}
        <button type="button" className="List-add-button">
          + Add Random Card
        </button>
      </div>
    );

    ReactDOM.unmountComponentAtNode(div);
  });
});
