import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import store from "./Redux/Store/store";
import router from "./Routes/Router";

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
