import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const PageWrapper = ({ children }) => (
  <div className="page-wrapper">{children}</div>
);

PageWrapper.propTypes = {
  children: PropTypes.element.isRequired,
};

export default PageWrapper;
