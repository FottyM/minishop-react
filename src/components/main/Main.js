import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import isEmpty from 'lodash/isEmpty';
import Shopping from '../shopping/';
import Item from '../shopping/item';
import Basket from '../basket/basket';
import { Consumer } from '../../provider/Provider';

class Main extends Component {
  render() {
    return (
      <main>
        <Consumer>
          {({ basket, toggleBasket }) => (
            <button
              className="btn btn-outline-mauve"
              style={{
                position: 'fixed',
                right: 10,
                top: 80,
                zIndex: 1
              }}
              onClick={toggleBasket}
            >
              Basket{' '}
              <span className="badge badge-danger">
                {!isEmpty(basket) ? basket.length : 0}
              </span>
            </button>
          )}
        </Consumer>
        <Switch>
          <Route
            exact
            path="/"
            render={() => {
              return <Redirect to="/store/items" />;
            }}
          />
          <Route path="/store/items/:item" component={Item} />
          <Route path="/store/items" component={Shopping} />
          <Route
            path="/about"
            render={({ match }) => (
              <div className="container">
                <h2>About us</h2> <p>{match.path}</p>
              </div>
            )}
          />
          <Route
            path="/contact"
            render={({ match }) => (
              <div className="container">
                <h2>Call me maybe</h2> <p>{match.path}</p>
              </div>
            )}
          />
        </Switch>
        <Consumer>
          {({ clearBasket, isBasketOpened, toggleBasket }) => (
            <Basket
              isOpened={isBasketOpened}
              toggle={toggleBasket}
              emptyBasket={clearBasket}
            />
          )}
        </Consumer>
      </main>
    );
  }
}

export default Main;
