import './App.css';
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
  useLocation,
} from 'react-router-dom';
import ListRegister from './pages/ListRegister';
import FormRegister from './pages/FormRegister';

function App() {
  
  const router = createBrowserRouter([
    {
      path: '',
      element: <Navigate to="/table" />,
    },
    {
      path: 'table',
      element: <ListRegister />,
    },
    {
      path: 'declaration',
      element: <FormRegister />,
    },
    {
      path:'edit',
      element: <FormRegister/>,
      children:[
        {
          path:':idItem',
          element:<FormRegister/>
        }
      ]
    }
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
