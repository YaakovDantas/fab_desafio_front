import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Select from 'react-select';

import './style.scss';

const colourStyles = {
  multiValue: (styles, { data }) => {
    return {
      ...styles,
      backgroundColor: '#00acf0',
      fontSize: '16px',
    };
  },
  multiValueLabel: (styles, { data }) => ({
    ...styles,
    color: 'white',
    fontSize: '16px',
  }),
  multiValueRemove: (styles, { data }) => ({
    ...styles,
    color: 'gray',
    fontSize: '16px',
    ':hover': {
      backgroundColor: '#00acf0',
      color: 'white',
    },
  }),
};

const SelectLocal = ({ listaLocais, callbackValor }) => {
  const dispatch = useDispatch();

  const addLocal = item => {
    callbackValor(item.value);
  };
  return (
    <Select
      name="location"
      isClearable
      placeholder="Informe o local de sua Origem/Destino."
      options={listaLocais}
      onChange={e => addLocal(e)}
      noOptionsMessage={() => 'Nenhuma Origem/Destino foi encontrado'}
      styles={colourStyles}
    />
  );
};

export default SelectLocal;
