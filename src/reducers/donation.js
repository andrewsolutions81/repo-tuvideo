const initialState = {
  donationAmount: 0,
  idUser: null,
};

function donationReducer(state = initialState, action = {}) {
  const { type, payload } = action;
  switch (type) {
    case 'SET_DONATION':
      return {
        donationAmount: payload.amount,
        idUser: payload.userId,
      };
    default:
      return state;
  }
}

export default donationReducer;
// funcion que cambia el estdo segun la accion  al llamar la accion modifica estos campos
// el reducer sabe como manipularlo
//
