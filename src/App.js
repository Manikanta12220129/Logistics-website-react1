import 'bootstrap/dist/css/bootstrap.min.css';
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import Layout from './Components/Layout';
import About from './Pages/About'
import Home from './Pages/Home'
import NewsAndMedia from './Pages/NewsAndMedia';
import ContactUs from './Pages/ContactUs';
import ServcesAndPrices from './Pages/ServcesAndPrices';
import MarinTransport from './Pages/MarinTransport';
// import Chat from './chat/Chat';
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children :[
        {
          path:'',
          element: <Home />,
        },
        {
          path:'About',
          element: <About />,
        },
        {
          path:'NewsAndMedia',
          element: <NewsAndMedia />,
        },
        {
          path:'ContactUs',
          element: <ContactUs />,
        },
        {
          path:'ServcesAndPrices',
          element: <ServcesAndPrices />,
        },
        {
          path:'MarinTransport',
          element: <MarinTransport />,
        }
      ]
    },
  ]);

  return (
    <div className="App">
      {/* <Chat /> */}
    <RouterProvider router={router} />
    </div>
  );
}

export default App;
