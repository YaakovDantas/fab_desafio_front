export const FlightActions = {
  BUSCAR_VOOS: '@VOO/BUSCAR',
  ADD_LISTA: '@VOO/ADD',
  CRIAR_VOO: '@VOO/CRIAR',
};

export function getVoos() {
  return {
    type: FlightActions.BUSCAR_VOOS,
  };
}

export function setVoos(voos) {
  return {
    type: FlightActions.ADD_LISTA,
    payload: { voos },
  };
}

export function createFlight(data, origem_id, destino_id) {
  return {
    type: FlightActions.CRIAR_VOO,
    payload: { data, origem_id, destino_id },
  };
}
