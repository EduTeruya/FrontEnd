import { RouterProvider } from 'react-router-dom';
import './App.css';
import Header from './components/sections/Header';
import { indexRoute } from './routes/indexRoute';

function App() {
  return (
    <>
      <Header />
      <RouterProvider router={indexRoute} />
    </>
  )
}

export default App;
