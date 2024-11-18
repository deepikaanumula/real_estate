
import React from 'react';
import NavDash from './NavDash';

import PropertyManagement from './PropertyManagement';


const Dashboard = () => {
    return (
        <div>
            <NavDash />
            <section id="property-management">
                <PropertyManagement/>
            </section>
           
        </div>
    );
};

export default Dashboard;
