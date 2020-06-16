import React from 'react';

import { Link } from 'react-router-dom';
import { MdFormatListBulleted } from 'react-icons/md';
import { RiTreasureMapLine } from 'react-icons/ri';
import { FaMapMarked } from 'react-icons/fa';

const PageNav = () => (
  <div
    className="mb-5"
    style={{ display: 'flex', justifyContent: 'space-between' }}
  >
    <div className="btn btn-secondary">
      <Link to="/" className="text-light">
        <MdFormatListBulleted size={18} className="mb-1 mr-1" /> Listar Voo
      </Link>
    </div>
    <div className="btn btn-secondary">
      <Link to="/formFlight" className="text-light">
        <RiTreasureMapLine size={18} className="mb-1 mr-1" />
        Criar Voo
      </Link>
    </div>
    <div className="btn btn-secondary">
      <Link to="locations" className="text-light">
        <MdFormatListBulleted size={18} className="mb-1 mr-1" /> Listar Locais
      </Link>
    </div>
    <div className="btn btn-secondary">
      <Link to="formLocations" className="text-light">
        <FaMapMarked size={18} className="mb-1 mr-1" />
        Criar Local
      </Link>
    </div>
  </div>
);

export default PageNav;
