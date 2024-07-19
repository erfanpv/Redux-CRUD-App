import { createSlice } from "@reduxjs/toolkit";

const userList = [
  {
    name: "erfan",
    email: "erfan@gmail.com",
    id: 1,
  },
];

const userSlice = createSlice({
  name: "users",
  initialState: userList,
  reducers: {
    addUser: (state, action) => {
      state.push(action.payload);
    },
    updateUser: (state, action) => {
      const { name, email } = action.payload;
      const updatingUser = state.find((user) => user.id == id);
      if (updateUser) {
        updatingUser.name = name;
        updatingUser.email = email;
      }
    },
    deleteUser: (state, action) => {
      const { id } = action.payload;
      const findUser = state.find((user) => user.id == id);

      if (findUser) {
        return state.filter((item) => item.id != id);
      }
    },
  },
});

export const { addUser, updateUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;
