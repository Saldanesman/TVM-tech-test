import Home from "../app/pages/Home/Home";
import { render, fireEvent } from "@testing-library/react";
import { createMemoryHistory } from 'history';
import { Router } from "react-router-dom";

describe("Welcome", () => {
  it("Should render text screen", () => {
    const sut = render(<Home />);
    const homeText = 'Welcome to the technical test of Rubén Saldaña. To access the application, press the button below:';
    const textElement = sut.getByText(homeText);
    expect(textElement).toBeInTheDocument();
  });

  it("Should open Bikes page when the button is clicked", () => {
    const history = createMemoryHistory({ initialEntries: ['/']});
    const { getByText } = render(
      <Router history={history}> 
        <Home />
      </Router>
    );
    expect(history.location.pathname).toBe('/');
    fireEvent.click(getByText('Go!'));
    expect(history.location.pathname).toBe('/bikes');
  });
});


// https://www.youtube.com/watch?v=G4rcw_ZtanI&ab_channel=AgustinNavarroGaldon