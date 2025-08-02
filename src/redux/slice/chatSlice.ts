import {createSlice} from '@reduxjs/toolkit';
// import {PayloadAction} from '@reduxjs/toolkit';


interface chatState {

messages : string[];

}

const initialState: chatState =[];


const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    addChatMessage: (state, action:string) => {
      state.push(action.payload);
    }
  }
});

export const {addChatMessage} = chatSlice.actions;
export default chatSlice.reducer;
