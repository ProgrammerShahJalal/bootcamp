import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css'
import notfoundImg from '../../../images/404.svg';


const NotFound = () => {
    return (
        <div className="notFound">
            <h2 className='mt-5'>The Page Not Found!</h2>
            <img className='w-50' src={notfoundImg} alt="" />
            <div className='mt-5'>
                <Link to="/home"><button className="btn btn-lg bg-primary text-white mb-5">Go to home</button></Link>
            </div>
        </div>
    );
};

export default NotFound;