import { Suspense } from 'react';
import { Outlet } from "react-router-dom";
import Header from 'components/Header/Header'
import Loading from 'components/Loading/Loading';
import Futter from 'components/Futter/Futter';

const SharedLayout = ({ children }) => {
    return (
        <div className='wrapper-relative'>
            <Header headTitle='PhoneBook Pro:' headSubTitle='Your Digital Contact Organizer' />
            <Suspense fallback={<Loading />}>
                <Outlet />
            </Suspense>
            {children}
            <Futter />
        </div>
    )
}

export default SharedLayout;