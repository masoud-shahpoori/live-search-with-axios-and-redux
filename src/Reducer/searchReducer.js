import { SET_LOADING, GET_PRODUCTS,SEARCH,NotFind_PRODUCTS,LESCHARACT } from "../Action/actions";

const defaultState = {
  loading: false,
  products: [],
  query:"",
  isSearched: true,
  searchNotFind: false,
  message:""
};


export default function(state = defaultState, action) {
  if (action.type === SET_LOADING) {
    return { ...state, loading: true };
  }
  if (action.type === SEARCH) {
    
    return { ...state, query: action.query,searchNotFind: false };
  }

  if (action.type === GET_PRODUCTS) {
    return { ...state, loading: false, products: action.payload,query: action.query,searchNotFind: false};
  }
  if (action.type === NotFind_PRODUCTS) {
    return { ...state, loading: false, searchNotFind: true,products:[] ,message:"Cant find product" };
  }
  if (action.type === LESCHARACT) {
    return { ...state, loading: false,products:[] ,message:"For Searching Please Write More 3 character"};
  }
  return state;
}
