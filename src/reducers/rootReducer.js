const initstate = {
  details: {
    name: 'sangavi',
    age: '23',
    phone: '1234567890',
    email: 'sangavi.gopal@latentview.com',
  },
};

const rootReducer = (state = initstate, Action) => {
  if (Action.type === "UPDATE") {
    return Object.assign({}, state, {
        modalOpen: true,
      details: Action.payload,
    });
  }
  return state;
};

export default rootReducer;
