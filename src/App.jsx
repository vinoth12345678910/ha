import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Outer from './Outer';
import Loginform from './Loginform';
import Checkbox from './Checkbox';
import Profile from './Profile';
import Support from './Support';

function App() {
  return (
    <>
      {/* Navbar should be persistent */}

      <Routes>
        <Route path="/" element={<Outer />} />
        <Route path="/Loginform" element={<Loginform />} />
        <Route path="/Checkbox" element={<Checkbox />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/support" element={<Support />} />
      </Routes>
    </>
  );
}

export default App;







