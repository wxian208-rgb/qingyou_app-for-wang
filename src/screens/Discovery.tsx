import React, { useState } from 'react';
import { Icons } from '../components/Icons';
import { AVATARS, CATEGORIES } from '../data';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';

export default function Discovery() {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState(CATEGORIES[0]);
  const [selectedTag, setSelectedTag] = useState(CATEGORIES[0].subcategories[0]);

  return (
    <div className="pt-16 pb-32">
      {/* Top Bar */}
      <header className="fixed top-0 w-full flex justify-between items-center px-6 h-16 bg-background/80 backdrop-blur-xl z-50 shadow-sm">
        <div className="flex items-center gap-4">
          <h1 className="font-headline text-2xl font-bold tracking-tight text-primary flex items-center gap-2">
            青柚
            <span className="text-[10px] font-normal text-stone-400 border-l border-stone-200 pl-2 hidden sm:inline">捕捉灵魂的数字镜像</span>
          </h1>
        </div>
        <button className="p-2 rounded-full hover:bg-primary/5 transition-colors">
          <Icons.Search size={24} className="text-primary" />
        </button>
      </header>

      {/* Categories */}
      <div className="sticky top-16 z-40 bg-background/95 backdrop-blur-md pt-4 pb-2">
        <nav className="flex overflow-x-auto no-scrollbar px-6 gap-6 items-center justify-start md:justify-center">
          {CATEGORIES.map((cat) => (
            <button 
              key={cat.name} 
              onClick={() => {
                setSelectedCategory(cat);
                setSelectedTag(cat.subcategories[0]);
              }}
              className={`whitespace-nowrap pb-1 transition-colors ${selectedCategory.name === cat.name ? 'text-primary font-bold border-b-2 border-primary' : 'text-stone-500 hover:text-primary'}`}
            >
              {cat.name}
            </button>
          ))}
        </nav>
        <div className="flex overflow-x-auto no-scrollbar px-6 gap-3 mt-4 justify-start md:justify-center">
          {selectedCategory.subcategories.map((tag) => (
            <button 
              key={tag} 
              onClick={() => setSelectedTag(tag)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${selectedTag === tag ? 'bg-primary-container text-on-primary-container' : 'bg-surface-container-low text-on-surface-variant hover:bg-surface-container-high'}`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="px-5 mt-6">
        <div className="masonry-grid">
          {AVATARS.filter(a => 
            a.category === selectedCategory.name && 
            (selectedTag === "全部" || a.tags.includes(selectedTag))
          ).map((avatar, index) => (
            <motion.div
              key={avatar.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="masonry-item group relative overflow-hidden rounded-lg bg-surface-container-lowest shadow-sm active:scale-[0.98] transition-all duration-300 cursor-pointer"
              onClick={() => navigate(`/detail/${avatar.id}`)}
            >
              <img 
                src={avatar.url} 
                alt={avatar.title} 
                className="w-full object-cover rounded-lg aspect-square"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          ))}
          
          {/* Ad Card */}
          <div className="masonry-item relative overflow-hidden rounded-lg bg-gradient-to-br from-primary to-primary-container p-6 text-white active:scale-[0.98] transition-transform">
            <div className="absolute top-2 right-2 px-2 py-0.5 bg-white/20 rounded text-[8px] tracking-widest uppercase">限时活动</div>
            <Icons.Users size={30} className="opacity-80" />
            <h3 className="mt-4 font-bold text-base leading-tight">邀请好友获取下载高清权益</h3>
            <p className="mt-2 text-[10px] opacity-90 font-light">邀请好友获取下载高清权益，每日最多邀请5位好友</p>
            <button className="mt-6 w-full py-2 bg-white text-primary rounded-full text-xs font-bold hover:bg-primary-container transition-colors">立即邀请</button>
          </div>
        </div>
      </div>
    </div>
  );
}
