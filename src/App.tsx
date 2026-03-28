import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Discovery from './screens/Discovery';
import Wallpapers from './screens/Wallpapers';
import Collection from './screens/Collection';
import Profile from './screens/Profile';
import Detail from './screens/Detail';
import BottomNav from './components/BottomNav';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background pb-20">
        <Routes>
          <Route path="/" element={<Discovery />} />
          <Route path="/wallpapers" element={<Wallpapers />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/detail/:id" element={<Detail />} />
        </Routes>
        <BottomNav />
      </div>
    </Router>
  );
}
