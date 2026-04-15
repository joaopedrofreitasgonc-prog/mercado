import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  ShoppingBasket, 
  ArrowLeft, 
  Star, 
  Truck, 
  ShieldCheck, 
  RefreshCcw,
  CheckCircle2
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { products } from '../constants';
import { useCart } from '../context/CartContext';

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const product = products.find(p => p.id === Number(id));

  if (!product) {
    return (
      <div className="py-24 text-center">
        <h2 className="text-2xl font-bold mb-4">Produto não encontrado</h2>
        <Button asChild variant="outline">
          <Link to="/produtos">Voltar ao Catálogo</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="py-24 bg-white dark:bg-slate-950 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Button asChild variant="ghost" className="mb-8 hover:bg-slate-100 dark:hover:bg-slate-800">
          <Link to="/produtos" className="flex items-center gap-2">
            <ArrowLeft size={20} /> Voltar ao Catálogo
          </Link>
        </Button>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Product Image */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative"
          >
            <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl bg-slate-100 dark:bg-slate-900">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            {product.discount && (
              <Badge className="absolute top-8 left-8 bg-brand-accent text-white border-none px-4 py-2 text-lg font-bold">
                -{product.discount}
              </Badge>
            )}
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col"
          >
            <div className="mb-6">
              <Badge variant="outline" className="mb-4 border-brand-primary text-brand-primary">
                {product.category}
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
                {product.name}
              </h1>
              <div className="flex items-center gap-4 mb-6">
                <div className="flex text-brand-accent">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={20} fill="currentColor" />
                  ))}
                </div>
                <span className="text-slate-500 text-sm">(48 avaliações de clientes)</span>
              </div>
              <div className="flex items-baseline gap-4">
                <span className="text-4xl font-bold text-brand-primary">{product.price}</span>
                {product.discount && (
                  <span className="text-xl text-slate-400 line-through">
                    {(parseFloat(product.price.replace('€', '')) * 1.2).toFixed(2)}€
                  </span>
                )}
              </div>
            </div>

            <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
              Este produto é selecionado cuidadosamente pelos nossos especialistas para garantir a máxima frescura e qualidade. Proveniente de produtores locais que respeitam o meio ambiente e as tradições agrícolas.
            </p>

            <div className="space-y-4 mb-10">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-green-500" size={20} />
                <span className="text-slate-700 dark:text-slate-200">Em stock e pronto para entrega</span>
              </div>
              <div className="flex items-center gap-3">
                <Truck className="text-brand-primary" size={20} />
                <span className="text-slate-700 dark:text-slate-200">Entrega gratuita em compras superiores a 50€</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button 
                onClick={() => {
                  addToCart(product);
                  navigate('/loja-online');
                }}
                size="lg" 
                className="w-full bg-brand-primary hover:bg-brand-primary/90 text-white rounded-2xl py-8 text-xl font-bold shadow-lg shadow-brand-primary/20"
              >
                <ShoppingBasket className="mr-2" size={24} /> Adicionar ao Carrinho
              </Button>
            </div>

            <Separator className="mb-8 dark:bg-slate-800" />

            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-4 rounded-2xl bg-slate-50 dark:bg-slate-900">
                <ShieldCheck className="mx-auto text-brand-primary mb-2" size={24} />
                <span className="text-xs font-bold text-slate-700 dark:text-slate-300 block">Qualidade Garantida</span>
              </div>
              <div className="text-center p-4 rounded-2xl bg-slate-50 dark:bg-slate-900">
                <RefreshCcw className="mx-auto text-brand-primary mb-2" size={24} />
                <span className="text-xs font-bold text-slate-700 dark:text-slate-300 block">Devolução Fácil</span>
              </div>
              <div className="text-center p-4 rounded-2xl bg-slate-50 dark:bg-slate-900">
                <Truck className="mx-auto text-brand-primary mb-2" size={24} />
                <span className="text-xs font-bold text-slate-700 dark:text-slate-300 block">Entrega Rápida</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Related Products */}
        <div className="mt-32">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-12">Produtos Semelhantes</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4).map((p) => (
              <Link key={p.id} to={`/produto/${p.id}`} className="group">
                <div className="aspect-square rounded-3xl overflow-hidden mb-4 bg-slate-100 dark:bg-slate-900">
                  <img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" referrerPolicy="no-referrer" />
                </div>
                <h3 className="font-bold text-slate-800 dark:text-white group-hover:text-brand-primary transition-colors">{p.name}</h3>
                <span className="text-brand-primary font-bold">{p.price}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
