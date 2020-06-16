import React from 'react';
import PropTypes from 'prop-types';
import { Jumbotron, Container } from 'react-bootstrap';
import { MdLocalAirport } from 'react-icons/md';
import PageNav from '../PageNav';
import PageToast from '../PageToast';

import './style.scss';

const PageContent = ({ children }) => (
  <>
    <Jumbotron className="text-center">
      FAB-FLIGHTS <MdLocalAirport size="32" />
    </Jumbotron>

    <PageToast />
    <Container>
      <PageNav />
      {children}
    </Container>
  </>
);

PageContent.propTypes = {
  children: PropTypes.element,
};

export default PageContent;
