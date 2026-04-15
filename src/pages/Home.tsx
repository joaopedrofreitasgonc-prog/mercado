import { useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  ArrowRight,
  ChevronRight,
  Star,
  ShoppingBasket,
  CheckCircle2,
  Badge as BadgeIcon,
  Tag,
  HeadphonesIcon
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { products, faqs } from '../constants';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function Home() {
  const { hash } = useLocation();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [hash]);

  return (
    <>
      {/* Hero Section */}
      <section id="home" className="relative h-[80vh] flex items-center overflow-hidden bg-brand-secondary dark:bg-slate-950">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/Faça as suas compras sem sair de casa.jpg" 
            alt="Corredor de supermercado moderno" 
            className="w-full h-full object-cover opacity-30 dark:opacity-20"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-secondary via-brand-secondary/80 to-transparent dark:from-slate-950 dark:via-slate-950/80 dark:to-transparent" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white leading-[1.1] mb-6">
              A frescura que a sua família <span className="text-brand-primary">merece.</span>
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-100 mb-10 leading-relaxed">
              Produtos selecionados diretamente dos produtores locais para garantir a melhor qualidade na sua mesa todos os dias.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-brand-primary hover:bg-brand-primary/90 text-white rounded-full px-8 py-7 text-lg">
                <Link to="/produtos">
                  Ver Produtos <ArrowRight className="ml-2" size={20} />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full px-8 py-7 text-lg border-slate-200 dark:border-slate-700 hover:bg-white dark:hover:bg-slate-800 dark:text-white">
                <Link to="/ofertas">Nossas Ofertas</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-24 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img 
                src="/images/sobre o nosso mercado.jpg" 
                alt="Colheita fresca de produtos biológicos" 
                className="rounded-3xl shadow-2xl z-10 relative dark:opacity-90"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-brand-accent rounded-3xl -z-0 opacity-20" />
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">Sobre o Mercado Fresco</h2>
              <p className="text-lg text-slate-600 dark:text-slate-100 mb-8 leading-relaxed">
                Nascemos da paixão pela terra e pelo que é nosso. O Mercado Fresco não é apenas um supermercado; é um ponto de encontro entre a tradição e a modernidade, onde a qualidade é o nosso compromisso inabalável.
              </p>
              <div className="space-y-4">
                {[
                  'Parcerias diretas com produtores locais',
                  'Foco em produtos biológicos e sazonais',
                  'Compromisso com o desperdício zero',
                  'Atendimento personalizado e familiar'
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="text-brand-primary" size={24} />
                    <span className="text-slate-700 dark:text-slate-50 font-medium">{item}</span>
                  </div>
                ))}
              </div>
              <Button asChild variant="link" className="mt-8 text-brand-primary p-0 text-lg font-semibold group">
                <Link to="/sobre">
                  Saiba mais sobre a nossa história <ChevronRight className="ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Products Preview Section */}
      <section id="products" className="py-24 bg-slate-50 dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="w-full md:w-auto">
              <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Produtos em Destaque</h2>
              <p className="text-lg text-slate-600 dark:text-slate-200">A seleção dos melhores frescos da semana.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.slice(0, 6).map((product, idx) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <Link to={`/produto/${product.id}`}>
                  <Card className="border-none shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group dark:bg-slate-900">
                    <div className="relative h-64 overflow-hidden">
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
                        className="absolute bottom-4 right-4 rounded-full w-12 h-12 p-0 bg-white dark:bg-slate-800 text-brand-primary hover:bg-brand-primary hover:text-white shadow-lg opacity-0 group-hover:opacity-100 transition-all"
                      >
                        <ShoppingBasket size={20} />
                      </Button>
                    </div>
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-start">
                        <span className="text-xs font-bold uppercase tracking-wider text-slate-400">{product.category}</span>
                        <div className="flex text-brand-accent">
                          <Star size={12} fill="currentColor" />
                          <Star size={12} fill="currentColor" />
                          <Star size={12} fill="currentColor" />
                          <Star size={12} fill="currentColor" />
                          <Star size={12} fill="currentColor" />
                        </div>
                      </div>
                      <CardTitle className="text-xl font-bold text-slate-800 dark:text-white">{product.name}</CardTitle>
                    </CardHeader>
                    <CardFooter className="pt-0">
                      <span className="text-2xl font-bold text-brand-primary">{product.price}</span>
                    </CardFooter>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <Button asChild size="lg" variant="outline" className="rounded-full px-10 border-slate-200 dark:border-slate-700 hover:bg-white dark:hover:bg-slate-800 dark:text-white text-slate-600 dark:text-slate-100">
              <Link to="/produtos">Ver Todo o Catálogo</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Discounts Section */}
      <section id="discounts" className="py-24 bg-brand-primary text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-12 translate-x-1/2" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <Badge className="mb-6 bg-brand-accent text-white border-none px-4 py-1">Ofertas Exclusivas</Badge>
              <h2 className="text-5xl font-bold mb-8 leading-tight">Descontos Imbatíveis para Membros</h2>
              <p className="text-xl text-brand-secondary/80 mb-10 leading-relaxed">
                Adira ao nosso Clube Fresco e tenha acesso a descontos semanais exclusivos, acumulação de pontos e ofertas personalizadas.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-brand-accent hover:bg-brand-accent/90 text-white rounded-full px-8 py-7 text-lg border-none">
                  <Link to="/aderir-clube">Aderir Agora</Link>
                </Button>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-white/10 backdrop-blur-sm p-8 rounded-3xl border border-white/10">
                  <span className="text-4xl font-bold text-brand-accent">-30%</span>
                  <p className="mt-2 font-medium">Em todos os Frutos Secos</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-8 rounded-3xl border border-white/10">
                  <span className="text-4xl font-bold text-brand-accent">-15%</span>
                  <p className="mt-2 font-medium">Na secção de Talho</p>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="bg-white/10 backdrop-blur-sm p-8 rounded-3xl border border-white/10">
                  <span className="text-4xl font-bold text-brand-accent">-50%</span>
                  <p className="mt-2 font-medium">Na 2ª unidade de Iogurtes</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-8 rounded-3xl border border-white/10">
                  <span className="text-4xl font-bold text-brand-accent">GRÁTIS</span>
                  <p className="mt-2 font-medium">Saco reutilizável em compras {'>'} 30€</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Shop Online CTA Section */}
      <section className="py-24 bg-white dark:bg-slate-900 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-brand-secondary dark:bg-slate-800/50 rounded-[3rem] overflow-hidden relative border border-brand-primary/10">
            <div className="grid lg:grid-cols-2 items-center">
              <div className="p-12 md:p-20 relative z-10">
                <Badge className="mb-6 bg-brand-primary text-white border-none px-4 py-1">Novo Serviço</Badge>
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
                  Faça as suas compras sem sair de casa
                </h2>
                <p className="text-lg text-slate-600 dark:text-slate-100 mb-10 leading-relaxed">
                  Agora já pode encomendar os seus produtos favoritos através da nossa loja online. Escolha, adicione ao carrinho e nós entregamos à sua porta com toda a frescura garantida.
                </p>
                <Button asChild size="lg" className="bg-brand-primary hover:bg-brand-primary/90 text-white rounded-full px-10 py-8 text-xl font-bold shadow-xl shadow-brand-primary/20">
                  <Link to="/loja-online">
                    Ir para a Loja Online <ArrowRight className="ml-2" size={24} />
                  </Link>
                </Button>
              </div>
              <div className="relative h-[400px] lg:h-full min-h-[500px]">
                <img 
                  src="/images/Faça as suas compras sem sair de casa.jpg" 
                  alt="Entrega de compras online" 
                  className="absolute inset-0 w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-secondary lg:bg-gradient-to-l dark:from-slate-800/50" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Support Section */}
      <section id="support" className="py-24 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Apoio ao Cliente</h2>
            <p className="text-lg text-slate-600 dark:text-slate-200">Estamos aqui para ajudar. Encontre respostas rápidas ou entre em contacto connosco.</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-8">Perguntas Frequentes</h3>
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, idx) => (
                  <AccordionItem key={idx} value={`item-${idx}`} className="border-slate-100 dark:border-slate-800">
                    <AccordionTrigger className="text-left text-lg font-medium text-slate-700 dark:text-slate-100 hover:text-brand-primary">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-slate-600 dark:text-slate-200 text-base leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            <div className="bg-slate-50 dark:bg-slate-950 p-10 rounded-3xl border border-slate-100 dark:border-slate-800">
              <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-8">Envie-nos uma mensagem</h3>
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700 dark:text-slate-100">Nome</label>
                    <Input placeholder="O seu nome" className="rounded-xl border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 dark:text-white" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700 dark:text-slate-100">Email</label>
                    <Input type="email" placeholder="seu@email.com" className="rounded-xl border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 dark:text-white" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700 dark:text-slate-100">Assunto</label>
                  <Input placeholder="Como podemos ajudar?" className="rounded-xl border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 dark:text-white" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700 dark:text-slate-100">Mensagem</label>
                  <textarea 
                    className="w-full min-h-[150px] rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-4 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-all"
                    placeholder="Escreva aqui a sua mensagem..."
                  />
                </div>
                <Button className="w-full bg-brand-primary text-white rounded-xl py-6 text-lg">
                  Enviar Mensagem
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
