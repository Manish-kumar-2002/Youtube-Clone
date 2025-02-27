import { Provider } from "react-redux";
import Body from "./components/Body";
import Header from "./components/Header";
import store from "./utils/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import WatchPageContainer from "./components/WatchPageContainer";
import MainContainer from "./components/MainContainer";


const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children:[
      {
        path:"/",
        element:<MainContainer />
      },
      {
        path:"/watch",
        element:<WatchPageContainer />
      }
    ]
  },
]);

function App() {
  return (
    <Provider store={store}>
      <Header />
      <RouterProvider router={appRouter}/>
    </Provider>
  );
}

export default App;
