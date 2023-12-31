import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Users from './component/Users';
import { Create } from './component/Create';
import { Update } from './component/Update';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Users/>} />
        <Route path="/create" element={<Create allUsers={undefined} setAllUsers={undefined}/>} />
        <Route path="/update/:id" element={<Update/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
