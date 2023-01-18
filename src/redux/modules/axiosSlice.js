import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { Reducer } from "@reduxjs/toolkit";

const initialState = {
  SOOL: [],
  isLoading: false,
  error: null,
};

export const axiosList = createAsyncThunk(
  "axiosList",
  async (payload, thunkAPI) => {
    try {
      const response = await axios.get("http://localhost:3001/SOOL");
      console.log("data", response.data);
      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const axiosSlice = createSlice({
  name: "axiosSlice",
  initialState,
  reducers: {},
  extraReducers: {
    [axiosList.pending]: (state) => {
      state.isLoading = true; // 네트워크 요청이 시작되면 로딩상태를 true로 변경합니다.
    },
    [axiosList.fulfilled]: (state, action) => {
      state.isLoading = false; // 네트워크 요청이 끝났으니, false로 변경합니다.
      state.SOOL = action.payload; // Store에 있는 todos에 서버에서 가져온 todos를 넣습니다.
    },
    [axiosList.rejected]: (state, action) => {
      state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
      state.error = action.payload; // catch 된 error 객체를 state.error에 넣습니다.
    },
  },
});

export default axiosSlice.reducer;
