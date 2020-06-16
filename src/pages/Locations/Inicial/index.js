import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Table } from 'antd';
import { getLocais } from '../../../store/modules/locations/actions';

import columns from './colunas.js';
import './style.scss';

const Inicial = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLocais());
  }, []);

  const { dados } = useSelector(state => state.locations);

  return (
    <>
      {dados && (
        <Table
          columns={columns}
          dataSource={dados}
          locale={{ emptyText: 'Não existem Locais cadastrados' }}
        />
      )}
    </>
  );
};

export default Inicial;
