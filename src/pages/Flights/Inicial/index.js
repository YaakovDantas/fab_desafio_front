import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Table } from 'antd';
import { getVoos } from '../../../store/modules/flights/actions';

import columns from './colunas.js';
import './style.scss';

const Inicial = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getVoos());
  }, []);

  const { dados } = useSelector(state => state.flights);

  return (
    <>
      {dados && (
        <Table
          columns={columns}
          dataSource={dados}
          locale={{ emptyText: 'Não existem voos cadastrados' }}
        />
      )}
    </>
  );
};

export default Inicial;
