import { createSlice } from "@reduxjs/toolkit";
import { API } from "aws-amplify";
import { listTranslations } from "../../graphql/queries";

export const initialState = {
  loading: false,
  hasErrors: false,
  translations: [],
};

const translationsSlice = createSlice({
  name: "translations",
  initialState,
  reducers: {
    getTranslations: (state) => {
      state.loading = true;
    },
    getTranslationsSuccess: (state, { payload }) => {
      state.translations = payload;
      state.loading = false;
      state.hasErrors = false;
    },
    getTranslationsFailure: (state) => {
      state.loading = false;
      state.hasErrors = true;
    },
  },
});

export const {
  getTranslations,
  getTranslationsSuccess,
  getTranslationsFailure,
} = translationsSlice.actions;

export default translationsSlice.reducer;

export function fetchTranslations() {
  return async (dispatch) => {
    dispatch(getTranslations());
    try {
      const {
        data: {
          listTranslations: { items },
        },
      } = await API.graphql({ query: listTranslations });

      dispatch(getTranslationsSuccess(items));
    } catch (error) {
      dispatch(getTranslationsFailure());
    }
  };
}
