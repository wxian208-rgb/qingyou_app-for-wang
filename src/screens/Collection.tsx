import React, { useState } from 'react';
import { Icons } from '../components/Icons';
import { AVATARS, WALLPAPERS } from '../data';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';

export default function Collection() {
  const navigate = useNavigate();
  const [filter, setFilter] = useState<'avatar' | 'wallpaper'>('avatar');

  const items = filter === 'avatar' ? AVATARS : WALLPAPERS;

  return (
    <div className="pt-24 pb-32 px-5 max-w-5xl mx-auto">
      {/* Top Bar */}
      <nav className="fixed top-0 left-0 w-full flex justify-between items-center px-6 h-16 bg-background/80 backdrop-blur-xl shadow-sm z-50">
        <div className="flex items-center gap-4">
          <h1 className="font-headline text-2xl font-bold tracking-tight text-primary flex items-center gap-2">
            青柚
            <span className="text-[10px] font-normal text-stone-400 border-l border-stone-200 pl-2 hidden sm:inline">捕捉灵魂的数字镜像</span>
          </h1>
        </div>
        <button className="p-2 rounded-full hover:bg-primary/5 transition-colors">
          <Icons.Search size={24} className="text-primary" />
        </button>
      </nav>

      {/* Header */}
      <header className="mb-10">
        <div className="flex items-end justify-between">
          <div className="space-y-1">
            <span className="text-primary font-semibold tracking-wider text-[10px] uppercase">My Gallery</span>
            <h1 className="font-headline text-4xl text-on-surface font-extrabold tracking-tight leading-none">精品收藏</h1>
          </div>
          <div className="flex gap-2 bg-surface-container-high p-1 rounded-full">
            <button 
              onClick={() => setFilter('avatar')}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${filter === 'avatar' ? 'bg-primary text-white shadow-sm' : 'text-on-surface-variant hover:bg-surface-container-highest'}`}
            >
              头像
            </button>
            <button 
              onClick={() => setFilter('wallpaper')}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${filter === 'wallpaper' ? 'bg-primary text-white shadow-sm' : 'text-on-surface-variant hover:bg-surface-container-highest'}`}
            >
              壁纸
            </button>
          </div>
        </div>
      </header>

      {/* Grid */}
      <div className="masonry-grid">
        {items.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            className="masonry-item group relative overflow-hidden rounded-[2.5rem] bg-surface-container-low transition-all hover:translate-y-[-4px] cursor-pointer"
            onClick={() => navigate(`/detail/${item.id}`)}
          >
            <img 
              src={item.url} 
              alt={item.title} 
              className={`w-full object-cover ${filter === 'avatar' ? 'aspect-square' : 'aspect-[9/16]'}`}
              referrerPolicy="no-referrer"
            />
            <button className="absolute top-4 right-4 w-10 h-10 rounded-full glass-effect flex items-center justify-center active:scale-90 transition-transform">
              <Icons.Heart size={16} className="text-white" fill="white" />
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
