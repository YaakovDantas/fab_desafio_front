const colunas_da_tabela = [
  {
    title: 'Cep',
    dataIndex: 'cep',
    render: (value, row, index) => {
      return value.toUpperCase();
    },
  },
  {
    title: 'País',
    dataIndex: 'pais',
    render: (value, row, index) => {
      return value.toUpperCase();
    },
  },
  {
    title: 'Estado',
    dataIndex: 'estado',
    render: (value, row, index) => {
      return value.toUpperCase();
    },
  },
  {
    title: 'Cidade',
    dataIndex: 'cidade',
    render: (value, row, index) => {
      return value.toUpperCase();
    },
  },
];

export default colunas_da_tabela;
