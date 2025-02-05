import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Messenger from './pages/messenger';
import Registration from './pages/registration';

import UserContext from './contexts/userContext';
import { UserEntity } from './types/UserEntity';
import { UserContextType } from './types/UserContextType';

export const App = () => {
  const [userData, setUserData] = useState<UserEntity | null>(null);

  const value: UserContextType = {
    userData,
    setUserData,
  };

  return (
    <UserContext.Provider value={value}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Registration />} />

          <Route path="/messenger" element={<Messenger />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
};

export default App;
