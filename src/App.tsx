import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Messenger from './pages/messenger';
import Registration from './pages/registration';

import UserContext from './contexts/userContext';

export const App = () => {
  const [userData, setUserData] = useState(null);

  return (
    // @ts-ignore
    <UserContext.Provider value={{ userData, setUserData }}>
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
