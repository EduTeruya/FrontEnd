import { Outlet } from 'react-router-dom';
import Header from '../components/sections/Header'

const primaryLayout = () => {
    return (
        <>
         <Header />
         <main>
            <Outlet />
         </main>
        </>
      );
}
 
export default primaryLayout;