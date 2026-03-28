import React from 'react';
import { Icons } from '../components/Icons';
import { motion } from 'motion/react';

export default function Profile() {
  const stats = [
    { value: '1.2k', label: '已获下载' },
    { value: '342', label: '作品收藏' },
    { value: '100', label: '灵感积分' },
  ];

  const menuItems = [
    { icon: Icons.History, label: '下载记录与授权' },
    { icon: Icons.Settings, label: '偏好生成预设' },
    { icon: Icons.Shield, label: '隐私政策' },
    { icon: Icons.Info, label: '关于我们' },
  ];

  return (
    <div className="pt-24 px-6 max-w-2xl mx-auto space-y-10 pb-32">
      {/* Top Nav */}
      <header className="fixed top-0 left-0 w-full flex justify-between items-center px-6 h-16 bg-background/80 backdrop-blur-xl z-50 shadow-sm">
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

      {/* Profile Header */}
      <section className="flex flex-col items-center text-center space-y-6">
        <div className="relative group">
          <div className="w-32 h-32 rounded-full overflow-hidden shadow-lg bg-surface-container-high transition-transform duration-300 group-hover:scale-105 ring-4 ring-primary/10">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBVn2VEgRsPJiQ1wvNZxfJIDH8LjpE63p-HQXP_wxiyeNXIZKVJShcZXnswS09oP-4uAU62jLWjCZOc4zql6S0rfBNY-ov4ajrA4MQPq8NKSTK-2Pq4o2MGUW3sZTDlZsGHqiK8nHFfLBgFRU6q6Z5zI7iCoZM9kvq8C_UzS7WV0oMIb8FFo46p6-3T8qfJYAsVhjcGfi3y-jq2Y7N0f4kvWaDlnT_rhvjTcdhsM95rhI-O-phwkTiUn5FZn89yOf6i8AqJA4y5Tw" 
              alt="Avatar" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute bottom-1 right-1 bg-primary text-white p-1.5 rounded-full border-4 border-background shadow-md">
            <Icons.Palette size={14} fill="currentColor" />
          </div>
        </div>
        <div className="space-y-3">
          <h1 className="text-3xl font-extrabold tracking-tight text-primary">柚见你</h1>
          <p className="text-on-surface-variant text-sm leading-relaxed max-w-sm mx-auto">
            捕捉灵魂的数字镜像。专注于赛博朋克与超现实主义头像收藏。
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-2">
            <span className="px-3 py-1 bg-primary/10 text-primary text-[12px] font-bold rounded-full">头像收藏家</span>
            <span className="px-3 py-1 bg-secondary-container text-on-secondary-container text-[12px] font-medium rounded-full">提示词大师</span>
            <span className="px-3 py-1 bg-surface-container-high text-on-surface-variant text-[12px] font-medium rounded-full">Lv.4</span>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="grid grid-cols-3 gap-1 bg-surface-container-low p-1 rounded-2xl overflow-hidden">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-surface-container-lowest py-6 text-center hover:bg-white transition-colors cursor-pointer group">
            <span className="block text-2xl font-bold text-primary mb-1 group-active:scale-95 transition-transform">{stat.value}</span>
            <span className="text-[11px] uppercase tracking-wider text-on-surface-variant font-bold">{stat.label}</span>
          </div>
        ))}
      </section>

      {/* Promo Banner */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-primary-container p-8 min-h-[180px] flex items-center shadow-lg shadow-primary/10 group cursor-pointer">
        <div className="z-10 space-y-4">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold text-white uppercase tracking-widest">限时活动</div>
          <h2 className="text-white text-2xl font-bold tracking-tight">邀请好友获取<br/>下载高清权益</h2>
          <p className="text-white/80 text-sm max-w-[220px]">邀请好友获取下载高清权益，每日最多邀请5位好友</p>
          <button className="bg-white text-primary px-6 py-2 rounded-full text-sm font-bold hover:shadow-xl transition-all active:scale-95">立即邀请</button>
        </div>
        <div className="absolute right-[-10px] bottom-[-20px] opacity-30 group-hover:scale-110 transition-transform duration-700">
          <Icons.Sparkles size={180} className="text-white" fill="currentColor" />
        </div>
      </section>

      {/* Menu */}
      <section className="space-y-4">
        <h3 className="text-[11px] uppercase tracking-[0.2em] text-on-surface-variant font-bold px-2">账户管理</h3>
        <div className="bg-surface-container-lowest rounded-3xl overflow-hidden shadow-sm border border-surface-container">
          {menuItems.map((item, i) => (
            <div 
              key={item.label}
              className={`flex items-center justify-between p-5 hover:bg-surface-container-low transition-colors cursor-pointer active:scale-[0.99] duration-150 ${i !== menuItems.length - 1 ? 'border-b border-surface-container' : ''}`}
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-2xl bg-primary/5 flex items-center justify-center text-primary">
                  <item.icon size={20} />
                </div>
                <span className="font-semibold text-on-surface">{item.label}</span>
              </div>
              <Icons.ChevronRight size={20} className="text-outline-variant" />
            </div>
          ))}
        </div>
      </section>

      {/* Pro Banner */}
      <section className="p-6 bg-surface-container-low rounded-3xl border border-outline-variant/10 flex items-center gap-6">
        <div className="flex-1">
          <h4 className="font-bold text-on-surface flex items-center gap-2">
            青柚 Pro
            <span className="text-[10px] bg-primary text-white px-2 py-0.5 rounded-full">MEMBER</span>
          </h4>
          <p className="text-sm text-on-surface-variant">解锁无限灵感生成，私享云端头像库。</p>
        </div>
        <button className="bg-primary text-on-primary px-6 py-2 rounded-full text-sm font-bold shadow-md active:scale-95 transition-transform hover:shadow-lg">
          去升级
        </button>
      </section>
    </div>
  );
}
