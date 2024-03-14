import React from "react";
import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux';
import '@testing-library/jest-dom'
import App from './App';
import { store } from './configStore';
import { BrowserRouter } from 'react-router-dom';


describe("App", () => {

  it("should render main shoppe app", () => {

    window.history.pushState({}, "", "/");

    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    const shopeeElem = screen.getByTestId("shopee-app");
    expect(shopeeElem).toBeInTheDocument();

  });

  it('render default store page with logo present', () => {

    render(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    )

    const shopeeHead = screen.getByTestId("shopee-header");
    expect(shopeeHead).toBeInTheDocument();
  });
});