import { getDataApi, searchAPI } from "../api/api";

const initialState = {
  data: [],
  isLoading: true,
};

export const stockReducers = (state = initialState, action) => {
  switch (action.type) {
    case "SET_STOCKS":
      return {
        ...state,
        data: action.payload,
      };
    case "SET_LOADING":
      return {
        ...state,
        isLoading: action.loading,
      };
  }
  return state;
};

export const setStock = (data) => ({ type: "SET_STOCKS", payload: data });

export const setLoading = (loading) => ({ type: "SET_LOADING", loading });

export const getStock = () => async (dispatch) => {
  dispatch(setLoading(true));
  const data = await searchAPI.fetchData();
  dispatch(setStock(data));
  dispatch(setLoading(false));
};
