// src/js/reducers/index.js

// const initialState = {
//   articles: []
// };

// const rootReducer = (state = initialState, action) => state;

// export default rootReducer;


import { ADD_ARTICLE } from "../constants/action-types";

const initialState = {
  articles: []
};


//reducers are always written as a function that takes two params (state, action)
//They are almost always a switch statement that returns the initial state as a default
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ARTICLE:
      return { ...state, articles: [...state.articles, action.payload] };
    default:
      return state;
  }
};

export default rootReducer;