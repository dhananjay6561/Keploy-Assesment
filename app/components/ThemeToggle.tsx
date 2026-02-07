'use client';

import { Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);
  useEffect(() => {
    const saved = localStorage.getItem('theme');
    const dark = saved === 'dark';
    setIsDark(dark);
    document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
  }, []);
  
  function handleClick() {
    const newTheme = isDark ? 'light' : 'dark';
    setIsDark(!isDark);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  }

  return (
    <button
      onClick={handleClick}
      className="w-10 h-10 rounded-full bg-gradient-to-r from-orange-500 to-orange-400 flex items-center justify-center hover:scale-110 transition-transform"
    >
      {isDark ? <Moon size={20} className="text-white" /> : <Sun size={20} className="text-white" />}
    </button>
  );
}