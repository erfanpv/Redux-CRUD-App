import { configureStore } from "@reduxjs/toolkit";
import Home from "./Components/Home";
import { Provider } from "react-redux";
import userReducer from "./Redux/UserReducer/UserReducer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Create from "./Components/Create";
import Update from "./Components/Update";

const store = configureStore({
  reducer: {
    users: userReducer,
  },
});

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/create" element={<Create />}></Route>
          <Route path={`/update/:id`} element={<Update/>}></Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
