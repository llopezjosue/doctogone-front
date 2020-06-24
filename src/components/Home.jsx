import React from 'react';

import CaregiverHome from './Caregiver/CaregiverHome';
import UserHome from './User/UserHome';


function Home() {
  return (
    <div className="App">
        <CaregiverHome />
        <UserHome />
    </div>
  );
}

export default Home;
