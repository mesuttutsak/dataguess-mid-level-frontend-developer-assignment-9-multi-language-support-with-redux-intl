export type AppState = {
  lang: string;
};

const initialState : AppState = {
  lang: 'en',
};

export const reducer = (state : AppState = initialState, action:any) => {
  switch (action.type) {
    case "setLang": {
      return { ...state, lang: action.payload };
    }
    default:
      return state;
  }
};
