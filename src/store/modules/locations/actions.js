export const LocationsActions = {
  BUSCAR_LOCAIS: '@LOCATIONS/BUSCAR',
  ADD_LISTA: '@LOCATIONS/ADD',
  CRIAR_LOCAIS: '@LOCATIONS/CRIAR',
};

export function getLocais() {
  return {
    type: LocationsActions.BUSCAR_LOCAIS,
  };
}

export function setLocais(locais, listaSelect) {
  return {
    type: LocationsActions.ADD_LISTA,
    payload: { locais, listaSelect },
  };
}

export function createLocation(cep, pais, estado, cidade) {
  return {
    type: LocationsActions.CRIAR_LOCAIS,
    payload: { cep, pais, estado, cidade },
  };
}
