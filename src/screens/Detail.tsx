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
        <section className="relative w-full aspect-square overflow-hidden bg-surface-container-low">
          <motion.img 
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            src={avatar.url} 
            alt={avatar.title} 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          {/* Floating Actions */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-4 px-6 py-3 rounded-full bg-surface/40 glass-effect border border-white/10 shadow-2xl">
            <button className="flex flex-col items-center gap-1">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white text-on-surface shadow-sm active:scale-90 transition-transform">
                <Icons.Heart size={20} />
              </div>
              <span className="text-[10px] font-medium text-on-surface/80">3.8k</span>
            </button>
            <button className="flex flex-col items-center gap-1">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white text-on-surface shadow-sm active:scale-90 transition-transform">
                <Icons.Bookmark size={20} />
              </div>
              <span className="text-[10px] font-medium text-on-surface/80">收藏</span>
            </button>
            <button className="flex flex-col items-center gap-1">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white text-on-surface shadow-sm active:scale-90 transition-transform">
                <Icons.Share2 size={20} />
              </div>
              <span className="text-[10px] font-medium text-on-surface/80">分享</span>
            </button>
          </div>
        </section>

        {/* Content */}
        <article className="px-6 mt-8 max-w-2xl mx-auto">
          <div className="flex items-center gap-2 mb-4">
            <span className="px-3 py-1 rounded-full bg-primary-container text-on-primary-container text-xs font-semibold">
              {avatar.category}
            </span>
            {avatar.tags.map(tag => (
              <span key={tag} className="px-3 py-1 rounded-full bg-surface-container-high text-on-surface-variant text-xs">
                {tag}
              </span>
            ))}
          </div>
          <h2 className="font-headline text-3xl text-on-surface mb-2 leading-tight font-bold">{avatar.title}</h2>
          <p className="text-base text-on-surface-variant leading-relaxed mb-12">
            {avatar.description}
          </p>

          {/* Download Section */}
          <section className="bg-surface-container-low rounded-lg p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 blur-3xl" />
            <div className="relative z-10">
              <div className="flex justify-between items-end mb-8">
                <div>
                  <p className="text-xs text-on-surface-variant mb-1">头像下载权益</p>
                  <h3 className="text-xl font-bold text-on-surface">今日免费下载次数: <span className="text-primary font-headline">2/5</span></h3>
                </div>
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary-container text-primary">
                  <Icons.CheckCircle2 size={24} />
                </div>
              </div>
              <div className="grid grid-cols-1 gap-4">
                <button className="flex items-center justify-between w-full px-6 py-5 bg-gradient-to-br from-primary to-primary-container text-on-primary-container rounded-full shadow-lg active:scale-[0.98] transition-all group">
                  <span className="font-semibold tracking-wide">立即下载高清头像 (消耗 1 次)</span>
                  <Icons.Download size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <button className="flex items-center justify-center gap-3 w-full px-6 py-4 bg-white text-primary border border-primary/10 rounded-full hover:bg-primary/5 active:scale-[0.98] transition-all">
                    <Icons.PlayCircle size={20} />
                    <span className="text-sm font-semibold">看视频获取下载权益</span>
                  </button>
                  <button className="flex items-center justify-center gap-3 w-full px-6 py-4 bg-white text-secondary border border-secondary/10 rounded-full hover:bg-secondary/5 active:scale-[0.98] transition-all">
                    <Icons.Users size={20} />
                    <span className="text-sm font-semibold">邀请好友 (每日5次)</span>
                  </button>
                </div>
              </div>
              <p className="mt-6 text-center text-[10px] text-on-surface-variant/60">
                图片版权归作者所有 · 个人使用请遵守《青柚社区公约》
              </p>
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
