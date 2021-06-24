import axios from "axios";

export const SEARCH = "SEARCH";
export const SET_LOADING = "SET_LOADING";
export const GET_PRODUCTS = "GET_PRODUCTS";
export const NotFind_PRODUCTS = "NotFind_PRODUCTS";
export const LESCHARACT = "LESCHARACT";

export const setLoading = () => {
  return { type: SET_LOADING };
};

var cancel;
var CancelToken = axios.CancelToken;

export const handleSearch = (e) => {
  let query = e.target.value;

  var value = query.trim();
  return function (dispatch) {
    const searchUrl = `
  https://www.googleapis.com/books/v1/volumes?country=US&projection=lite&printType=books&key=AIzaSyD6SlU9JUr7Z-3SOOy0TfZTJtqv_EEqfZY&q=intitle:${query}&startIndex=0&maxResults=5
  `;
    let preApiCall = () => {
      if (cancel != undefined) {
        cancel();
      }
    };
    preApiCall();

    if (value.length < 3) {
      dispatch({ type: LESCHARACT });
    } else {
      dispatch(setLoading())
      axios({
        method: "get",
        url: searchUrl,
        cancelToken: new CancelToken(function executor(c) {
          cancel = c;
        }),
      })
        .then((response) => {
          if (response.data.totalItems == 0) {
            dispatch({ type: NotFind_PRODUCTS });
          } else {
            dispatch({
              type: GET_PRODUCTS,
              payload: response.data.items,
              query: query,
            });
          }
        })
        .catch((error) => {
          dispatch({ type: NotFind_PRODUCTS });
        });
    }
  };
};
