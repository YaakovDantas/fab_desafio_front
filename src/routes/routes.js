const routes = [
  {
    title: 'Listagem',
    component: 'Flights/Inicial',
    path: '/',
    auth: false,
    exact: true,
  },
  {
    title: 'Detalhe',
    component: 'Flights/Form',
    path: '/formFlight',
    auth: false,
    exact: true,
  },
  {
    title: 'Locations',
    component: 'Locations/Inicial',
    path: '/locations',
    auth: false,
    exact: true,
  },
  {
    title: 'Location Form',
    component: 'Locations/Form',
    path: '/formLocations',
    auth: false,
    exact: true,
  },
];

export default routes;
