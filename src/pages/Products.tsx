import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  Search, 
  ShoppingBasket,
  Star,
  X
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { products } from '../constants';
import { useCart } from '../context/CartContext';

export default function Products() {
  const location = useLocation();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const queryParams = new URLSearchParams(location.search);
  const initialSearch = queryParams.get('search') || '';
  
  const [searchTerm, setSearchTerm] = useState(initialSearch);
  const [selectedCategory, setSelectedCategory] = useState('Todos');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const search = queryParams.get('search');
    if (search !== null) {
      setSearchTerm(search);
    }
  }, [location.search]);

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'Todos' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const categories = ['Todos', 'Frutas', 'Padaria', 'Laticínios', 'Despensa', 'Garrafeira', 'Peixaria'];

  return (
    <div className="py-24 bg-slate-50 dark:bg-slate-950 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">Catálogo de Produtos</h1>
          <p className="text-lg text-slate-600 dark:text-slate-200">Explore a nossa seleção completa de frescos e produtos de qualidade.</p>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6 bg-white dark:bg-slate-900 p-6 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-800">
          <div className="relative w-full md:w-96 group">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-brand-primary transition-colors" size={18} />
            <Input 
              placeholder="Procurar produto..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-10 rounded-xl border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus-visible:ring-brand-primary/20"
            />
            {searchTerm && (
              <button 
                onClick={() => setSearchTerm('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
              >
                <X size={16} />
              </button>
            )}
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <Button 
                key={cat} 
                variant={selectedCategory === cat ? 'default' : 'outline'} 
                onClick={() => setSelectedCategory(cat)}
                className={selectedCategory === cat ? 'bg-brand-primary' : 'bg-white dark:bg-slate-800 dark:text-white dark:border-slate-700'}
              >
                {cat}
              </Button>
            ))}
          </div>
        </div>

        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map((product, idx) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
              >
                <Link to={`/produto/${product.id}`}>
                  <Card className="border-none shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group dark:bg-slate-900 h-full flex flex-col">
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={product.image} 
                        alt={product.name} 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 dark:opacity-80"
                        referrerPolicy="no-referrer"
                      />
                      {product.discount && (
                        <Badge className="absolute top-4 left-4 bg-brand-accent text-white border-none">
                          -{product.discount}
                        </Badge>
                      )}
                      <Button 
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          addToCart(product);
                          navigate('/loja-online');
                        }}
                        className="absolute bottom-4 right-4 rounded-full w-10 h-10 p-0 bg-white dark:bg-slate-800 text-brand-primary hover:bg-brand-primary hover:text-white shadow-lg opacity-0 group-hover:opacity-100 transition-all"
                      >
                        <ShoppingBasket size={18} />
                      </Button>
                    </div>
                    <CardHeader className="pb-2 flex-grow">
                      <div className="flex justify-between items-start">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">{product.category}</span>
                        <div className="flex text-brand-accent">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} size={10} fill="currentColor" />
                          ))}
                        </div>
                      </div>
                      <CardTitle className="text-lg font-bold text-slate-800 dark:text-white">{product.name}</CardTitle>
                    </CardHeader>
                    <CardFooter className="pt-0">
                      <span className="text-xl font-bold text-brand-primary">{product.price}</span>
                    </CardFooter>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <ShoppingBasket size={64} className="mx-auto text-slate-200 mb-4" />
            <h3 className="text-xl font-bold text-slate-800 dark:text-white">Nenhum produto encontrado</h3>
            <p className="text-slate-500">Tente ajustar a sua pesquisa ou os filtros.</p>
            <Button 
              variant="link" 
              onClick={() => { setSearchTerm(''); setSelectedCategory('Todos'); }}
              className="mt-4 text-brand-primary"
            >
              Limpar todos os filtros
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
