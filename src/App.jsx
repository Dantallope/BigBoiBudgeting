import './css/App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home, { homeLoader } from './pages'
import Error from './pages/error';
import Main, { mainLoader } from "./layouts/Main";
import About from './pages/about'
import Services from './pages/services'
import ContactUs from './pages/contact-us'
import SignIn from './pages/sign-in'
import Budget from './pages/budget'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    loader: mainLoader,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: homeLoader,
        errorElement: <Error />
      },
      {
        path: "/about",
        element: <About />,
        errorElement: <Error />
      },
      {
        path: "/budget",
        element: <Budget />,
        errorElement: <Error />
      },
      {
        path: "/sign-in",
        element: <SignIn />,
        errorElement: <Error />
      },
      {
        path: "/contact-us",
        element: <ContactUs />,
        errorElement: <Error />
      },
      {
        path: "/services",
        element: <Services />,
        errorElement: <Error />
      },
    ]
  },
]);

function App() {
  return (
    <div className="App">
      <ApolloProvider client={client}>
        <RouterProvider router={router}>
          <Main />
        </RouterProvider>
      </ApolloProvider>
    </div>
  );
}

export default App;


//Old Code
/*

function App() {
  return (
    <ApolloProvider client={client}>
    <Router>
      <NavBar />
        <Routes>
          {/* <Route path="/" exact element={ <Home/> } /> */
//           <Route path="/about"  element={ <About/> } />
//           <Route path="/services"  element={ <Services/> } />
//           <Route path="/contact-us"  element={ <ContactUs/> } />
//           <Route path="/sign-in"  element={ <SignIn/> } />
//           <Route path="/sign-up"  element={ <SignUp/> } />
//         </Routes>
//     </Router>
//     </ApolloProvider>
//   );
// }

// */