import {Outlet} from 'react-router-dom';
import Header from '../components/Header';
import Navber from '../components/Navber';

function Layout(){

    return(
        <>
            <Header/>
            <Navber/>
            <Outlet/>
        </>
    );
}

export default Layout;