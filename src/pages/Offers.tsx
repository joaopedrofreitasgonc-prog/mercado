import { motion } from 'motion/react';
import { 
  Tag, 
  ShoppingBasket, 
  Clock, 
  ArrowRight,
  Percent,
  Flame,
  Star
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { products } from '../constants';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function Offers() {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  // Filter products that have a discount
  const discountedProducts = products.filter(p => p.discount);

  const flashDeals = [
    { id: 101, name: 'Cabaz de Fruta Tropical', price: '12.99€', oldPrice: '19.99€', discount: '35%', timeLeft: '04:22:15', image: '/images/cabaz de fruta tropical.jpg' },
    { id: 102, name: 'Vinho do Porto Vintage', price: '24.50€', oldPrice: '35.00€', discount: '30%', timeLeft: '02:15:40', image: '/images/Vinho do Porto Vintage.webp' },
  ];

  return (
    <div className="py-24 bg-slate-50 dark:bg-slate-950 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-brand-accent text-white border-none px-4 py-1">Campanhas Ativas</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">Nossas Ofertas</h1>
          <p className="text-lg text-slate-600 dark:text-slate-400">Poupe mais com as nossas promoções semanais e ofertas exclusivas.</p>
        </div>

        {/* Flash Deals */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <Flame className="text-orange-500" size={32} />
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Ofertas Relâmpago</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {flashDeals.map((deal) => (
              <motion.div
                key={deal.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white dark:bg-slate-900 rounded-3xl overflow-hidden shadow-xl border border-orange-100 dark:border-orange-900/30 flex flex-col sm:flex-row"
              >
                <div className="sm:w-1/2 h-64 sm:h-auto relative">
                  <img src={deal.image} alt={deal.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  <div className="absolute top-4 left-4 bg-orange-500 text-white font-bold px-3 py-1 rounded-full text-sm">
                    -{deal.discount}
                  </div>
                </div>
                <div className="p-8 sm:w-1/2 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-orange-500 mb-2 font-bold text-sm">
                      <Clock size={16} />
                      Termina em: {deal.timeLeft}
                    </div>
                    <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-2">{deal.name}</h3>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-3xl font-bold text-brand-primary">{deal.price}</span>
                      <span className="text-lg text-slate-400 line-through">{deal.oldPrice}</span>
                    </div>
                  </div>
                  <Button 
                    onClick={() => {
                      addToCart(deal);
                      navigate('/loja-online');
                    }}
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white rounded-xl py-6"
                  >
                    Aproveitar Agora
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Weekly Discounts */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <Percent className="text-brand-primary" size={32} />
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Promoções da Semana</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {discountedProducts.map((product, idx) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
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
                      <Badge className="absolute top-4 left-4 bg-brand-accent text-white border-none">
                        -{product.discount}
                      </Badge>
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
        </div>

        {/* Membership Banner */}
        <div className="bg-brand-primary rounded-[3rem] p-12 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-12 translate-x-1/2" />
          <div className="relative z-10 max-w-2xl">
            <h2 className="text-4xl font-bold mb-6">Quer ofertas ainda melhores?</h2>
            <p className="text-xl text-brand-secondary/80 mb-8">
              Os membros do Clube Fresco recebem talões de desconto personalizados e acumulam 5% de todas as compras em cartão.
            </p>
            <Button asChild size="lg" className="bg-brand-accent hover:bg-brand-accent/90 text-white rounded-full px-10 py-7 text-lg border-none">
              <Link to="/aderir-clube">Aderir ao Clube Fresco</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
