import PropTypes from 'prop-types';
import React, { Component } from 'react';
import currencyFormatter from 'currency-formatter';
import sha256 from 'sha256';
import isEmpty from 'lodash/isEmpty';
import { AppContext as Context } from '../../store/Provider';

const Basket = ({ isOpened, toggle }) => {
  return (
    <Context.Consumer>
      {({ basket }) => {
        let total = 0;
        return (
          <div className={`basket ${isOpened ? 'show' : ''} bg-light`}>
            <div className="container">
              <div className="row">
                <button
                  className="btn btn-danger rounded rounded-circle"
                  onClick={toggle}
                  style={{
                    position: 'absolute',
                    left: 5,
                    top: 5,
                    zIndex: 3
                  }}
                >
                  &times;
                </button>
                <div className="col-12 pt-5">
                  {!isEmpty(basket) ? (
                    basket.map(item => {
                      total += item.price;
                      return (
                        <div key={sha256(`${Date.now()}`)}>
                          <p> {item.name} </p>
                        </div>
                      );
                    })
                  ) : (
                    <p>Nothing here</p>
                  )}
                </div>
                <div className="col py-2">
                  <hr />
                  <h4 className="text-primary">
                    Total: {currencyFormatter.format(total, { code: 'EUR' })}
                  </h4>
                </div>
                <button className="btn btn-block btn-success mx-2">
                  Check out
                </button>
              </div>
            </div>
          </div>
        );
      }}
    </Context.Consumer>
  );
};

Basket.propTypes = {
  toggle: PropTypes.func.isRequired,
  isOpened: PropTypes.bool.isRequired
};

export default Basket;
