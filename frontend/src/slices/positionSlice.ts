import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface PositionSlice {
  position: number;
  mobileView: boolean;
}

export const initialState: PositionSlice = {
  position: 0,
  mobileView: false,
};

export const positionSlice = createSlice({
  name: "utility",
  initialState,
  reducers: {
    setPosition: (state, action: PayloadAction<number>) => {
      state.position = action.payload;
    },
    setMobileView: (state, action: PayloadAction<boolean>) => {
      state.mobileView = action.payload;
    },
  },
});

export const { setPosition, setMobileView } = positionSlice.actions;
export default positionSlice.reducer;
