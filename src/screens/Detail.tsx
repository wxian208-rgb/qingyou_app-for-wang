import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Icons } from '../components/Icons';
import { AVATARS } from '../data';
import { motion } from 'motion/react';

export default function Detail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const avatar = AVATARS.find(a => a.id === id) || AVATARS[0];

  return (
    <div className="bg-background min-h-screen">
      {/* Top Bar */}
      <header className="fixed top-0 w-full flex justify-between items-center px-6 h-16 bg-background/80 backdrop-blur-xl z-50 shadow-sm">
        <div className="flex items-center gap-4">
          <button 
            onClick={() => navigate(-1)}
            className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-primary/5 transition-colors active:scale-95"
          >
            <Icons.ArrowLeft size={24} className="text-primary" />
          </button>
          <h1 className="font-headline text-2xl font-bold text-primary tracking-tight flex items-center gap-2">
            青柚
            <span className="text-[10px] font-normal text-stone-400 border-l border-stone-200 pl-2 hidden sm:inline">捕捉灵魂的数字镜像</span>
          </h1>
        </div>
        <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-primary/5 transition-colors active:scale-95">
          <Icons.Search size={24} className="text-primary" />
        </button>
      </header>

      <main className="pt-16 pb-32">
        {/* Hero Image */}
        <section className="w-full aspect-square overflow-hidden bg-surface-container-low">
          <motion.img 
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            src={avatar.url} 
            alt={avatar.title} 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </section>

        {/* Action Bar */}
        <div className="flex items-center justify-center gap-8 py-5 bg-background border-b border-surface-container-low">
          <button className="flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors active:scale-95">
            <Icons.Heart size={20} />
            <span className="text-sm font-medium">3.8k</span>
          </button>
          <button className="flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors active:scale-95">
            <Icons.Bookmark size={20} />
            <span className="text-sm font-medium">收藏</span>
          </button>
          <button className="flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors active:scale-95">
            <Icons.Share2 size={20} />
            <span className="text-sm font-medium">分享</span>
          </button>
        </div>

        {/* Content */}
        <article className="px-6 mt-6 max-w-2xl mx-auto">
          {/* Download Section */}
          <section className="bg-surface-container-low rounded-lg p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 blur-3xl" />
            <div className="relative z-10">
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 flex items-center justify-center rounded-full bg-primary-container text-primary">
                    <Icons.CheckCircle2 size={16} />
                  </div>
                  <p className="text-sm font-medium text-on-surface">
                    今日免费下载次数: <span className="text-primary font-bold ml-1">2/5</span>
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-3">
                <button className="flex-1 flex flex-col items-center justify-center gap-1.5 py-3 bg-gradient-to-br from-primary to-primary-container text-on-primary-container rounded-2xl shadow-sm active:scale-[0.98] transition-all group">
                  <Icons.Download size={20} className="group-hover:translate-y-0.5 transition-transform" />
                  <span className="text-xs font-semibold">下载头像</span>
                </button>
                <button className="flex-1 flex flex-col items-center justify-center gap-1.5 py-3 bg-white text-primary border border-primary/10 rounded-2xl hover:bg-primary/5 active:scale-[0.98] transition-all">
                  <Icons.PlayCircle size={20} />
                  <span className="text-xs font-semibold">看视频</span>
                </button>
                <button className="flex-1 flex flex-col items-center justify-center gap-1.5 py-3 bg-white text-secondary border border-secondary/10 rounded-2xl hover:bg-secondary/5 active:scale-[0.98] transition-all">
                  <Icons.Users size={20} />
                  <span className="text-xs font-semibold">邀请好友</span>
                </button>
              </div>
            </div>
          </section>
        </article>

        {/* More Inspirations */}
        <section className="mt-16 px-6">
          <h4 className="font-headline text-xl text-on-surface mb-6 px-2">更多头像灵感</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {AVATARS.slice(0, 4).map(a => (
              <div key={a.id} className="aspect-square rounded-lg overflow-hidden bg-surface-container cursor-pointer" onClick={() => navigate(`/detail/${a.id}`)}>
                <img src={a.url} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" referrerPolicy="no-referrer" />
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
