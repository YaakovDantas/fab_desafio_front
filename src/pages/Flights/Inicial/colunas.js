import React from 'react';
import { differenceInCalendarDays } from 'date-fns';

const colunas_da_tabela = [
  {
    title: 'Código Voo',
    dataIndex: 'codigoVoo',
  },
  {
    title: 'Origem',
    dataIndex: 'origem',
    key: 'origem',
    render: (value, row, index) => {
      return `Pais: ${value.pais.toUpperCase()}, Estado:  ${value.estado.toUpperCase()}, Cidade: ${value.cidade.toUpperCase()}`;
    },
  },
  {
    title: 'Destino',
    dataIndex: 'destino',
    render: (value, row, index) => {
      return `Pais: ${value.pais.toUpperCase()}, Estado:  ${value.estado.toUpperCase()}, Cidade: ${value.cidade.toUpperCase()}`;
    },
  },
  {
    title: 'Data',
    dataIndex: 'data',
    render: (value, row, index) => {
      const data = new Date(value);
      const dia = data.getDate();
      const mes = (data.getMonth() + 1).toString().padStart(2, '0');
      const ano = data.getFullYear();
      const hora = data.getHours();
      const minutos = data
        .getMinutes()
        .toString()
        .padStart(2, '0');

      return `${dia}/${mes}/${ano} ${hora}:${minutos}`;
    },
  },
  {
    title: 'Decola',
    dataIndex: 'data',
    render: (value, row, index) => {
      const dias_para_o_voo = differenceInCalendarDays(
        new Date(value),
        new Date()
      );

      let tipo = 'success';
      let texto = 'Hoje';

      if (dias_para_o_voo === 0) {
        tipo = 'danger';
      } else if (dias_para_o_voo === 1) {
        tipo = 'warning';
        texto = `Em ${dias_para_o_voo} dia`;
      } else if (dias_para_o_voo < 0) {
        tipo = 'secondary';
        texto = 'Voo perdido';
      } else {
        tipo = 'success';
        texto = `Em ${dias_para_o_voo} dias`;
      }

      return (
        <div className={`bg-${tipo} p-1 text-center rounded text-light`}>
          {texto}
        </div>
      );
    },
  },
];

export default colunas_da_tabela;
