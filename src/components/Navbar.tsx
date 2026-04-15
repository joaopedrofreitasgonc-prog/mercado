import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ShoppingBasket, 
  Menu, 
  X, 
  Search, 
  Moon, 
  Sun,
  Info,
  Tag,
  HeadphonesIcon
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useCart } from '../context/CartContext';
import { Badge } from '@/components/ui/badge';

export default function Navbar() {
  const { cart } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [navSearchTerm, setNavSearchTerm] = useState('');
  const location = useLocation();
  const navigate = useNavigate();
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window !== 'undefined') {
      return (localStorage.getItem('theme') as 'light' | 'dark') || 'light';
    }
    return 'light';
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (navSearchTerm.trim()) {
      navigate(`/produtos?search=${encodeURIComponent(navSearchTerm.trim())}`);
      setNavSearchTerm('');
      setIsMenuOpen(false);
    }
  };

  const navLinks = [
    { name: 'Início', href: '/', icon: ShoppingBasket },
    { name: 'Sobre Nós', href: '/#about', icon: Info },
    { name: 'Produtos', href: '/#products', icon: ShoppingBasket },
    { name: 'Catálogo', href: '/produtos', icon: ShoppingBasket },
    { name: 'Ofertas', href: '/ofertas', icon: Tag },
    { name: 'Descontos', href: '/#discounts', icon: Tag },
    { name: 'Apoio ao Cliente', href: '/#support', icon: HeadphonesIcon },
  ];

  return (
    <nav className="sticky top-0 z-50 glass border-b border-slate-100 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-brand-primary rounded-xl flex items-center justify-center text-white">
              <ShoppingBasket size={24} />
            </div>
            <span className="text-2xl font-display font-bold text-brand-primary tracking-tight">Mercado Fresco</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            <form onSubmit={handleSearch} className="relative hidden lg:block group">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-brand-primary transition-colors" size={18} />
              <Input 
                placeholder="Pesquisar no catálogo..." 
                value={navSearchTerm}
                onChange={(e) => setNavSearchTerm(e.target.value)}
                className="pl-10 pr-10 w-64 rounded-full bg-slate-50 dark:bg-slate-800 border-none focus-visible:ring-brand-primary/30"
              />
              {navSearchTerm && (
                <button 
                  type="button"
                  onClick={() => setNavSearchTerm('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
                >
                  <X size={14} />
                </button>
              )}
            </form>
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.href} 
                className="text-sm font-medium text-slate-600 dark:text-slate-100 hover:text-brand-primary dark:hover:text-brand-primary transition-colors"
              >
                {link.name}
              </Link>
            ))}
            
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-100 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>

            <Button asChild className="bg-brand-primary hover:bg-brand-primary/90 text-white rounded-full px-6 relative">
              <Link to="/loja-online">
                Loja Online
                {cart.length > 0 && (
                  <Badge className="absolute -top-2 -right-2 bg-brand-accent text-white border-none h-5 w-5 flex items-center justify-center p-0 text-[10px] rounded-full">
                    {cart.reduce((acc, item) => acc + item.quantity, 0)}
                  </Badge>
                )}
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-2 md:hidden">
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-100 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>
            <button 
              className="p-2 text-slate-600 dark:text-slate-100"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-4">
              <form onSubmit={handleSearch} className="relative mb-4 group">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-brand-primary transition-colors" size={18} />
                <Input 
                  placeholder="Pesquisar no catálogo..." 
                  value={navSearchTerm}
                  onChange={(e) => setNavSearchTerm(e.target.value)}
                  className="pl-10 pr-10 w-full rounded-xl bg-slate-50 dark:bg-slate-800 border-none focus-visible:ring-brand-primary/30"
                />
                {navSearchTerm && (
                  <button 
                    type="button"
                    onClick={() => setNavSearchTerm('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
                  >
                    <X size={16} />
                  </button>
                )}
              </form>
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  to={link.href} 
                  className="flex items-center gap-3 text-lg font-medium text-slate-600 dark:text-slate-100"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <link.icon size={20} className="text-brand-primary" />
                  {link.name}
                </Link>
              ))}
              <Button asChild className="w-full bg-brand-primary text-white rounded-xl py-6">
                <Link to="/loja-online" onClick={() => setIsMenuOpen(false)}>Loja Online</Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
