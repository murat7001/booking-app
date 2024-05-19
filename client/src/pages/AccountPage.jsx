import React, { useContext, useState } from 'react'
import { UserContext } from '../UserContext'
import { Link, Navigate, useParams } from 'react-router-dom'
import axios from 'axios';

const AccountPage = () => {
    const [redirect, setRedirect] = useState(false)
    const { subpage } = useParams();
    const { user, ready, setUser } = useContext(UserContext);
    if (!ready) {
        return 'Loadinggg'
    }

    const linkClasses = (type = null) => {
        let classes = 'py-2 px-6'
        if (type === subpage || (subpage === undefined && type === 'profile')) {
            classes += ' bg-primary text-white rounded-full'
        }
        return classes;
    }

    const logout = async() => {
        await axios.post('/logout');
        setRedirect('/');
        setUser(null);
    }

    if (redirect) {
        return <Navigate to={redirect}/>
    }

    if (ready && !user && !redirect) {
        return <Navigate to={'/login'}></Navigate>
    }
    return (
        <div>
            <nav className='w-full flex justify-center mt-8 gap-2 mb-8'>
                <Link className={linkClasses('profile')} to={'/account'}>My profile</Link>
                <Link className={linkClasses('bookings')} to={'/account/bookings'}>My booking</Link>
                <Link className={linkClasses('places')} to={'/account/places'}>My accomodations</Link>
            </nav>
            {subpage === undefined && (
                <div className='text-center max-w-lg mx-auto'>
                    Logged in as {user.name} ({user.email})<br/>
                    <button onClick={logout} className='primary max-w-s mt-2'>Logout</button>
                </div>
            )}
        </div>
    )
}

export default AccountPage