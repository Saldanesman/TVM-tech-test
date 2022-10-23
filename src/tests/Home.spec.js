import Home from "../app/pages/Home/Home";
import { render, fireEvent } from "@testing-library/react";

describe("Welcome", () => {
  it("Should render text screen", () => {
    const sut = render(<Home />);
    const homeText = 'Welcome to the technical test of Rubén Saldaña. To access the application, press the button below:';
    const textElement = sut.getByText(homeText);
    expect(textElement).toBeInTheDocument();
  });

  it("Should open Bikes page when the button is clicked", () => {
    const sut = render(<Home />);
    const btnGoBikes = sut.getByTestId('btnGoToBikes');
    fireEvent.click(btnGoBikes);
    expect().toHaveBeenCalled();
  });
});


// https://www.youtube.com/watch?v=G4rcw_ZtanI&ab_channel=AgustinNavarroGaldon