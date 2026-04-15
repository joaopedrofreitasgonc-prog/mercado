import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ShoppingBasket, 
  Trash2, 
  Plus, 
  Minus, 
  ArrowRight, 
  CreditCard,
  Truck,
  ShieldCheck,
  Search,
  Filter,
  X,
  CheckCircle2,
  ChevronRight,
  ShoppingBag,
  Wallet,
  Banknote,
  Mail
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Input } from '@/components/ui/input';
import { products } from '../constants';
import { useCart } from '../context/CartContext';

interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

const categories = ['Todos', 'Frutas', 'Padaria', 'Despensa', 'Laticínios', 'Garrafeira', 'Peixaria'];

export default function OnlineStore() {
  const { 
    cart, 
    addToCart, 
    removeFromCart, 
    updateQuantity, 
    clearCart,
    subtotal,
    shipping,
    total 
  } = useCart();

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [isCheckoutStarted, setIsCheckoutStarted] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [email, setEmail] = useState('');
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'mbway' | 'cash'>('card');
  const [checkoutError, setCheckoutError] = useState('');

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'Todos' || product.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  const handleCheckout = () => {
    if (!email || !email.includes('@')) {
      setCheckoutError('Por favor, insira um email válido.');
      return;
    }
    setCheckoutError('');
    setIsCheckoutStarted(true);
    // Simulate order placement
    setTimeout(() => {
      setOrderPlaced(true);
      clearCart();
      setIsCheckoutStarted(false);
      setEmail('');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 2000);
  };

  if (orderPlaced) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-950 px-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md w-full bg-white dark:bg-slate-900 rounded-[3rem] p-12 text-center shadow-xl border border-slate-100 dark:border-slate-800"
        >
          <div className="w-24 h-24 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-8 text-green-600">
            <CheckCircle2 size={48} />
          </div>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Encomenda Confirmada!</h2>
          <p className="text-slate-600 dark:text-slate-200 mb-8">
            Obrigado pela sua compra. Irá receber um email com os detalhes da sua encomenda em breve.
          </p>
          <Button 
            onClick={() => setOrderPlaced(false)}
            className="w-full bg-brand-primary hover:bg-brand-primary/90 text-white rounded-2xl py-6 text-lg font-bold"
          >
            Voltar à Loja
          </Button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="py-24 bg-slate-50 dark:bg-slate-950 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header & Search */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
          <div className="max-w-2xl">
            <Badge className="bg-brand-primary/10 text-brand-primary border-none mb-4 px-4 py-1 rounded-full">
              Loja Online
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">
              Frescura à distância de um clique
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-200">
              Escolha os melhores produtos locais e receba-os no conforto da sua casa com toda a segurança.
            </p>
          </div>
          
          <div className="relative w-full md:w-80">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
            <Input 
              placeholder="Procurar produtos..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 pr-4 py-6 bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 rounded-2xl focus:ring-brand-primary/20"
            />
          </div>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
                selectedCategory === cat 
                ? 'bg-brand-primary text-white shadow-lg shadow-brand-primary/20' 
                : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Product Grid */}
          <div className="lg:w-2/3">
            <AnimatePresence mode="popLayout">
              {filteredProducts.length > 0 ? (
                <motion.div 
                  layout
                  className="grid grid-cols-1 sm:grid-cols-2 gap-6"
                >
                  {filteredProducts.map((product) => (
                    <motion.div
                      layout
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      key={product.id}
                    >
                      <Card className="group border-none shadow-sm hover:shadow-xl transition-all duration-300 dark:bg-slate-900 overflow-hidden rounded-[2rem]">
                        <div className="relative h-48 overflow-hidden">
                          <img 
                            src={product.image} 
                            alt={product.name} 
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                            referrerPolicy="no-referrer" 
                          />
                          {product.discount && (
                            <Badge className="absolute top-4 left-4 bg-brand-accent text-white border-none font-bold">
                              -{product.discount}
                            </Badge>
                          )}
                          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <Button 
                              onClick={() => addToCart(product)}
                              className="bg-white text-brand-primary hover:bg-brand-primary hover:text-white rounded-full px-6"
                            >
                              Adicionar Rápido
                            </Button>
                          </div>
                        </div>
                        <CardContent className="p-6">
                          <div className="flex justify-between items-start mb-2">
                            <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">{product.category}</span>
                            <span className="text-brand-primary font-bold text-lg">{product.price}</span>
                          </div>
                          <h3 className="font-bold text-slate-900 dark:text-white text-lg mb-4 line-clamp-1">{product.name}</h3>
                          <Button 
                            onClick={() => addToCart(product)}
                            className="w-full bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white hover:bg-brand-primary hover:text-white transition-colors rounded-xl py-6"
                          >
                            <Plus size={18} className="mr-2" /> Adicionar ao Carrinho
                          </Button>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </motion.div>
              ) : (
                <div className="py-20 text-center bg-white dark:bg-slate-900 rounded-[3rem] border border-dashed border-slate-200 dark:border-slate-800">
                  <div className="w-20 h-20 bg-slate-50 dark:bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-4 text-slate-300">
                    <Search size={40} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Sem resultados</h3>
                  <p className="text-slate-500">Não encontramos produtos para "{searchQuery}" nesta categoria.</p>
                  <Button 
                    variant="link" 
                    onClick={() => {setSearchQuery(''); setSelectedCategory('Todos');}}
                    className="text-brand-primary mt-4"
                  >
                    Limpar filtros
                  </Button>
                </div>
              )}
            </AnimatePresence>
          </div>

          {/* Cart Sidebar */}
          <div className="lg:w-1/3">
            <Card className="sticky top-32 border-none shadow-2xl rounded-[2.5rem] dark:bg-slate-900 overflow-hidden">
              <CardHeader className="bg-brand-primary text-white p-8">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <ShoppingBag size={24} />
                    <CardTitle>O Seu Carrinho</CardTitle>
                  </div>
                  <Badge className="bg-white/20 text-white border-none px-3">
                    {cart.reduce((acc, item) => acc + item.quantity, 0)} itens
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="p-8 max-h-[60vh] overflow-y-auto">
                <AnimatePresence mode="popLayout">
                  {cart.length > 0 ? (
                    <div className="space-y-6">
                      {cart.map((item) => (
                        <motion.div 
                          key={item.id}
                          layout
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                          className="flex items-center gap-4"
                        >
                          <div className="w-16 h-16 rounded-2xl overflow-hidden shrink-0 border border-slate-100 dark:border-slate-800">
                            <img src={item.image} alt={item.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                          </div>
                          <div className="flex-grow">
                            <h4 className="font-bold text-sm text-slate-900 dark:text-white line-clamp-1">{item.name}</h4>
                            <div className="flex items-center justify-between mt-1">
                              <span className="text-brand-primary font-bold text-sm">{(item.price * item.quantity).toFixed(2)}€</span>
                              <div className="flex items-center gap-2 bg-slate-50 dark:bg-slate-800 rounded-xl px-2 py-1 border border-slate-100 dark:border-slate-800">
                                <button 
                                  onClick={() => updateQuantity(item.id, -1)} 
                                  className="text-slate-400 hover:text-brand-primary transition-colors p-1"
                                >
                                  <Minus size={14} />
                                </button>
                                <span className="text-xs font-bold w-4 text-center">{item.quantity}</span>
                                <button 
                                  onClick={() => updateQuantity(item.id, 1)} 
                                  className="text-slate-400 hover:text-brand-primary transition-colors p-1"
                                >
                                  <Plus size={14} />
                                </button>
                              </div>
                            </div>
                          </div>
                          <button 
                            onClick={() => removeFromCart(item.id)}
                            className="text-slate-300 hover:text-red-500 transition-colors p-2"
                          >
                            <Trash2 size={18} />
                          </button>
                        </motion.div>
                      ))}
                    </div>
                  ) : (
                    <div className="py-12 text-center">
                      <div className="w-20 h-20 bg-slate-50 dark:bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-4 text-slate-300">
                        <ShoppingBasket size={40} />
                      </div>
                      <p className="text-slate-500 font-medium">O seu carrinho está vazio.</p>
                      <p className="text-sm text-slate-400 mt-2">Explore os nossos produtos e comece a comprar.</p>
                    </div>
                  )}
                </AnimatePresence>
              </CardContent>
              
              {cart.length > 0 && (
                <div className="px-8 pb-8 pt-0">
                  <Separator className="mb-6 dark:bg-slate-800" />
                  
                  {/* Checkout Info */}
                  <div className="space-y-6 mb-8">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700 dark:text-slate-100 flex items-center gap-2">
                        <Mail size={16} className="text-brand-primary" /> Email para Confirmação
                      </label>
                      <Input 
                        type="email" 
                        placeholder="seu@email.com" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="rounded-xl border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 focus:ring-brand-primary/20"
                      />
                    </div>

                    <div className="space-y-3">
                      <label className="text-sm font-bold text-slate-700 dark:text-slate-100 flex items-center gap-2">
                        <CreditCard size={16} className="text-brand-primary" /> Método de Pagamento
                      </label>
                      <div className="grid grid-cols-3 gap-2">
                        <button 
                          onClick={() => setPaymentMethod('card')}
                          className={`flex flex-col items-center justify-center p-3 rounded-xl border transition-all ${
                            paymentMethod === 'card' 
                            ? 'border-brand-primary bg-brand-primary/5 text-brand-primary' 
                            : 'border-slate-100 dark:border-slate-800 text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800'
                          }`}
                        >
                          <CreditCard size={20} />
                          <span className="text-[10px] font-bold mt-1">Cartão</span>
                        </button>
                        <button 
                          onClick={() => setPaymentMethod('mbway')}
                          className={`flex flex-col items-center justify-center p-3 rounded-xl border transition-all ${
                            paymentMethod === 'mbway' 
                            ? 'border-brand-primary bg-brand-primary/5 text-brand-primary' 
                            : 'border-slate-100 dark:border-slate-800 text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800'
                          }`}
                        >
                          <Wallet size={20} />
                          <span className="text-[10px] font-bold mt-1">MB WAY</span>
                        </button>
                        <button 
                          onClick={() => setPaymentMethod('cash')}
                          className={`flex flex-col items-center justify-center p-3 rounded-xl border transition-all ${
                            paymentMethod === 'cash' 
                            ? 'border-brand-primary bg-brand-primary/5 text-brand-primary' 
                            : 'border-slate-100 dark:border-slate-800 text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800'
                          }`}
                        >
                          <Banknote size={20} />
                          <span className="text-[10px] font-bold mt-1">Dinheiro</span>
                        </button>
                      </div>
                    </div>
                  </div>

                  <Separator className="mb-6 dark:bg-slate-800" />
                  
                  <div className="space-y-3 mb-8">
                    <div className="flex justify-between text-slate-600 dark:text-slate-200">
                      <span>Subtotal</span>
                      <span className="font-medium">{subtotal.toFixed(2)}€</span>
                    </div>
                    <div className="flex justify-between text-slate-600 dark:text-slate-200">
                      <div className="flex items-center gap-2">
                        <span>Portes</span>
                        {shipping === 0 && <Badge className="bg-green-500/10 text-green-500 border-none text-[10px] font-bold">Grátis</Badge>}
                      </div>
                      <span className="font-medium">{shipping === 0 ? '0.00€' : `${shipping}€`}</span>
                    </div>
                    <div className="flex justify-between text-2xl font-bold text-slate-900 dark:text-white pt-4 border-t border-slate-100 dark:border-slate-800">
                      <span>Total</span>
                      <span className="text-brand-primary">{total.toFixed(2)}€</span>
                    </div>
                  </div>

                  {checkoutError && (
                    <p className="text-red-500 text-xs font-bold mb-4 text-center">{checkoutError}</p>
                  )}

                  <Button 
                    onClick={handleCheckout}
                    disabled={isCheckoutStarted}
                    className="w-full bg-brand-primary hover:bg-brand-primary/90 text-white rounded-2xl py-8 text-xl font-bold shadow-xl shadow-brand-primary/20 transition-all active:scale-95"
                  >
                    {isCheckoutStarted ? 'A processar...' : 'Finalizar Compra'}
                    {!isCheckoutStarted && <ArrowRight className="ml-2" size={24} />}
                  </Button>
                </div>
              )}

              <CardFooter className="bg-slate-50 dark:bg-slate-800/50 p-8 flex flex-col gap-4">
                <div className="flex items-center gap-4 text-xs text-slate-500">
                  <div className="w-8 h-8 rounded-full bg-white dark:bg-slate-900 flex items-center justify-center shadow-sm">
                    <Truck size={14} className="text-brand-primary" />
                  </div>
                  <span>Entrega gratuita em compras superiores a 50€</span>
                </div>
                <div className="flex items-center gap-4 text-xs text-slate-500">
                  <div className="w-8 h-8 rounded-full bg-white dark:bg-slate-900 flex items-center justify-center shadow-sm">
                    <ShieldCheck size={14} className="text-brand-primary" />
                  </div>
                  <span>Pagamento 100% seguro e encriptado</span>
                </div>
              </CardFooter>
            </Card>
          </div>

        </div>
      </div>
    </div>
  );
}
