
import React, { useContext } from 'react';
import { AuthContext } from '../contexts/UserContext';


const Home = () => {
    const {user}=useContext(AuthContext);
 

    return (
        <div>
   this is home
        </div>
    );
};

export default Home;