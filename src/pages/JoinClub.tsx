import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  UserPlus, 
  CreditCard, 
  Gift, 
  Zap, 
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  PartyPopper
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';

export default function JoinClub() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!formData.name || !formData.email || !formData.phone) {
      setError('Por favor, preencha todos os campos.');
      return;
    }

    if (!formData.email.includes('@')) {
      setError('Por favor, insira um email válido.');
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 1500);
  };

  if (isSuccess) {
    return (
      <div className="py-24 bg-slate-50 dark:bg-slate-950 min-h-screen flex items-center justify-center px-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-xl w-full bg-white dark:bg-slate-900 rounded-[3rem] p-12 text-center shadow-2xl border border-slate-100 dark:border-slate-800"
        >
          <div className="w-24 h-24 bg-brand-primary/10 text-brand-primary rounded-full flex items-center justify-center mx-auto mb-8">
            <PartyPopper size={48} />
          </div>
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Bem-vindo ao Clube!</h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
            A sua adesão foi confirmada com sucesso. Já pode começar a acumular 5% em todas as suas compras e desfrutar das ofertas exclusivas.
          </p>
          <div className="space-y-4">
            <Button asChild className="w-full bg-brand-primary hover:bg-brand-primary/90 text-white rounded-2xl py-7 text-lg font-bold">
              <Link to="/loja-online">Ir para a Loja Online</Link>
            </Button>
            <Button asChild variant="ghost" className="w-full text-slate-500 hover:text-brand-primary">
              <Link to="/">Voltar ao Início</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="py-24 bg-slate-50 dark:bg-slate-950 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column: Benefits */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="mb-4 bg-brand-primary/10 text-brand-primary border-none px-4 py-1 text-sm font-medium">
              Clube Fresco
            </Badge>
            <h1 className="text-5xl font-bold text-slate-900 dark:text-white leading-tight mb-6">
              Faça parte da nossa <span className="text-brand-primary">família.</span>
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 mb-10 leading-relaxed">
              Adira ao Clube Fresco e comece a desfrutar de vantagens exclusivas criadas a pensar em si e na sua poupança.
            </p>

            <div className="space-y-8">
              {[
                { 
                  icon: CreditCard, 
                  title: '5% de Acumulação', 
                  desc: 'Acumule 5% do valor de todas as suas compras em saldo no seu cartão digital.' 
                },
                { 
                  icon: Gift, 
                  title: 'Ofertas de Aniversário', 
                  desc: 'Receba um presente especial e descontos extra no dia do seu aniversário.' 
                },
                { 
                  icon: Zap, 
                  title: 'Acesso Antecipado', 
                  desc: 'Saiba primeiro que todos as promoções semanais e campanhas relâmpago.' 
                }
              ].map((benefit, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="w-12 h-12 bg-white dark:bg-slate-900 rounded-2xl shadow-sm flex items-center justify-center text-brand-primary shrink-0">
                    <benefit.icon size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-1">{benefit.title}</h3>
                    <p className="text-slate-600 dark:text-slate-400">{benefit.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="border-none shadow-2xl rounded-[2.5rem] overflow-hidden dark:bg-slate-900">
              <CardContent className="p-10">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-brand-primary/10 text-brand-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <UserPlus size={32} />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Formulário de Adesão</h2>
                  <p className="text-slate-500">Rápido, simples e 100% gratuito.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Nome Completo</label>
                    <Input 
                      placeholder="Como o devemos tratar?" 
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="rounded-xl py-6 border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Email</label>
                    <Input 
                      type="email" 
                      placeholder="exemplo@email.com" 
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="rounded-xl py-6 border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Telemóvel</label>
                    <Input 
                      type="tel" 
                      placeholder="+351 9xx xxx xxx" 
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="rounded-xl py-6 border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800" 
                    />
                  </div>
                  
                  {error && (
                    <p className="text-red-500 text-xs font-bold text-center">{error}</p>
                  )}

                  <div className="pt-4 space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="mt-1">
                        <CheckCircle2 className="text-brand-primary" size={18} />
                      </div>
                      <p className="text-xs text-slate-500 leading-relaxed">
                        Aceito os termos e condições do Clube Fresco e a política de tratamento de dados pessoais.
                      </p>
                    </div>
                    <Button 
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-brand-primary hover:bg-brand-primary/90 text-white rounded-xl py-7 text-lg font-bold shadow-lg shadow-brand-primary/20 transition-all active:scale-95"
                    >
                      {isSubmitting ? 'A processar...' : 'Confirmar Adesão'}
                      {!isSubmitting && <ArrowRight className="ml-2" size={20} />}
                    </Button>
                  </div>
                </form>

                <div className="mt-8 pt-8 border-t border-slate-100 dark:border-slate-800 flex items-center justify-center gap-2 text-slate-400 text-sm">
                  <ShieldCheck size={16} />
                  Os seus dados estão seguros connosco.
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
