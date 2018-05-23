import React from 'react';
import PropTypes from 'prop-types';

import SearchFilter from './SearchFilters';
import ShoppingList from './ShoppingList';
import { Consumer } from '../../store/Provider';

const Shopping = ({ match }) => {
  return (
    <Consumer>
      {context => {
        return (
          <div className="container-fluid">
            <div className="row">
              <div
                className="col-md-2 d-none d-md-block"
                style={{ borderRight: '1px solid grey' }}
              >
                <SearchFilter />
              </div>
              <div className="col-12 col-md-10">
                <h2 className="text-center text-primary py-3">
                  Shopping Items
                </h2>
                <ShoppingList match={match} {...context} />
              </div>
            </div>
          </div>
        );
      }}
    </Consumer>
  );
};

Shopping.propTypes = {
  match: PropTypes.object.isRequired
};

export default Shopping;