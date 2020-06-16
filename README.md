## Instalação e configuração

1. Faça um clone desse repositório;
2. Acesse a raiz do projeto `cd front`;
3. Faça uma cópia do env `cp .env.example .env` e configure a URL da API;
4. De preferencia use o `yarn`, instale seguindo [link](https://yarnpkg.com/getting-started/install);
5. Rode `yarn` para instalar as depenências;
6. Rode `yarn start` para iniciar o servidor.

## Gerar ambiente de produção execute.

```
    yarn build
```

## Estrutura de pastas

```
└── public
└── src
    ├── components/ # componentes compartilháveis em toda aplicação
    ├── configs/ # variáveis de configurações
    ├── pages/ # páginas da aplicação
    ├── routes/ # configurações das rotas
    ├── services/ # configuração de serviços utilizados
    └── store # configuração e dispatch das ações do Redux
        └── modules # tipo de dados do Redux separados em módulos para uma melhor organização (actions, reducer e sagas)
    └── utils/ # funções helpers
└── __tests__/ # para testes de comportamento e interface
```

## Variáveis de ambiente:

```
REACT_APP_API_URL=http://localhost:3333
```

### Descrição das variáveis:

`REACT_APP_API_URL`= informar url do back-end do [back](https://github.com/YaakovDantas/fab_desafio_back)

## Tecnologias

- React
- Redux
- Redux Saga
- Redux Persist
- Unform
- Axios
- Testing Library
- Jest
- ESlint
- Prettier
- React app rewired
