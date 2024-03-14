import React from 'react';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import { handlers } from '../../mocks/products';
import { Provider } from 'react-redux';
import { store } from '../../configStore';
import { BrowserRouter } from 'react-router-dom';
import { setupServer } from 'msw/node'

import Home from '../Home';

const server = setupServer(...handlers);
beforeAll(() => server.listen());


describe("Home", () => {

    it('product list', async () => {

        render(<Provider store={store}>
            <BrowserRouter>
                <Home />
            </BrowserRouter>
        </Provider>);

        await waitFor(() => expect(
            screen.getByTestId("products-list")).toBeInTheDocument(),
            { timeout: 2000 })

    })

    it('one single product', async () => {

        render(<Provider store={store}>
            <BrowserRouter>
                <Home />
            </BrowserRouter>
        </Provider>);

        await waitFor(() => expect(screen.getAllByTestId("single-product")[0]).toBeInTheDocument(),
            { timeout: 2000 })

    })

    it('details inside card', async () => {

        render(<Provider store={store}>
            <BrowserRouter>
                <Home />
            </BrowserRouter>
        </Provider>);

        await waitFor(() => expect(screen.getByText(/Apple/i)).toBeInTheDocument(),
            { timeout: 2000 })

    })

    it('add to cart, length becomes one', async () => {

        render(<Provider store={store}>
            <BrowserRouter>
                <Home />
            </BrowserRouter>
        </Provider>);
        await waitFor(() => { return screen.getAllByTestId('add-to-item')[0]; });
        const button = screen.getAllByTestId("add-to-item")[0];
        fireEvent.click(button);
        await waitFor(() => {
            expect(store.getState().billingModel?.productsCartItems?.cartItems?.length).toBe(1);
        });

    })

    it('plus one to cart, length becomes two', async () => {

        render(<Provider store={store}>
            <BrowserRouter>
                <Home />
            </BrowserRouter>
        </Provider>);
        await waitFor(() => { return screen.getAllByTestId('plus-item')[0]; });
        const button = screen.getAllByTestId('plus-item')[0];
        fireEvent.click(button);
        await waitFor(() => {
            expect(store.getState().billingModel?.productsCartItems?.cartItems?.length).toBe(2);
        });

    })

    it('minus one of cart, length becomes one', async () => {

        render(<Provider store={store}>
            <BrowserRouter>
                <Home />
            </BrowserRouter>
        </Provider>);
        await waitFor(() => { return screen.getAllByTestId('minus-item')[0]; });
        const button = screen.getAllByTestId('minus-item')[0];
        fireEvent.click(button);
        await waitFor(() => {
            expect(store.getState().billingModel?.productsCartItems?.cartItems?.length).toBe(1);
        });

    })

    it('click on cart when no.of items > 0', async () => {

        render(<Provider store={store}>
            <BrowserRouter>
                <Home />
            </BrowserRouter>
        </Provider>);
        await waitFor(() => { return screen.getByTestId('show-carts-page'); });
        const button = screen.getByTestId('show-carts-page');
        fireEvent.click(button);
        await waitFor(() => expect(screen.getByTestId('cart-check-view')).toBeInTheDocument())
    })

    it('address list check, if empty display add new address btn', async () => {

        render(<Provider store={store}>
            <BrowserRouter>
                <Home />
            </BrowserRouter>
        </Provider>);
        await waitFor(() => { return screen.getByTestId('add-new-address0'); });
        const button = screen.getByTestId('add-new-address0');
        // console.log("button11", button);
        if(button){
            fireEvent.click(button);
            await waitFor(() => expect(screen.getByTestId('address-details-popup')).toBeInTheDocument())
        }
        screen.debug()
    })

})