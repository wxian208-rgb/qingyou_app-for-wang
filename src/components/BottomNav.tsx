import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Icons } from './Icons';
import { motion } from 'motion/react';

export default function BottomNav() {
  const location = useLocation();
  
  const navItems = [
    { path: '/', label: '头像', icon: Icons.UserCircle },
    { path: '/wallpapers', label: '壁纸', icon: Icons.Image },
    { path: '/collection', label: '收藏', icon: Icons.Heart },
    { path: '/profile', label: '我的', icon: Icons.User },
  ];

  return (
    <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-8 pb-6 pt-3 bg-background/80 backdrop-blur-2xl rounded-t-[2rem] shadow-[0_-4px_30px_rgba(48,51,47,0.06)]">
      {navItems.map((item) => {
        const isActive = location.pathname === item.path;
        return (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) => 
              `flex flex-col items-center justify-center w-12 h-12 transition-all relative ${
                isActive ? 'text-primary' : 'text-stone-400'
              }`
            }
          >
            {isActive ? (
              <motion.div
                layoutId="nav-active"
                className="absolute inset-0 bg-gradient-to-br from-primary to-primary-container rounded-full shadow-lg shadow-primary/20"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            ) : null}
            <item.icon 
              size={24} 
              className={`relative z-10 ${isActive ? 'text-white' : ''}`} 
              fill={isActive ? "currentColor" : "none"}
            />
            <span className={`font-body text-[10px] font-medium tracking-wide mt-1 relative z-10 ${isActive ? 'text-primary font-bold' : ''}`}>
              {item.label}
            </span>
          </NavLink>
        );
      })}
    </nav>
  );
}
