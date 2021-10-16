import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "aws-amplify";
import { listTranslations } from "../../graphql/queries";
import { i18n } from "../../../next.config";

export const initialState = {
  loading: false,
  hasErrors: false,
  translations: [],
  lang: i18n.defaultLocale,
  supportedLangs: i18n.locales,
};

export const getTranslations = createAsyncThunk(
  "translations/getTransaltions",
  async () => {
    const {
      data: {
        listTranslations: { items },
      },
    } = await API.graphql({ query: listTranslations });
    return items;
  }
);

const translationsSlice = createSlice({
  name: "translations",
  initialState,
  extraReducers: {
    [getTranslations.pending]: (state) => {
      state.loading = true;
    },
    [getTranslations.fulfilled]: (state, { payload }) => {
      state.translations = payload;
      state.loading = false;
      state.hasErrors = false;
    },
    [getTranslations.rejected]: (state) => {
      state.loading = false;
      state.hasErrors = true;
    },
  },
});

export default translationsSlice.reducer;
