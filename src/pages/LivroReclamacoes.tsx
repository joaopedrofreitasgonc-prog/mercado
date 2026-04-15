import React from 'react';
import { motion } from 'motion/react';
import { Book, ExternalLink, ShieldCheck, HelpCircle, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function LivroReclamacoes() {
  return (
    <div className="bg-slate-50 dark:bg-slate-950 min-h-screen pt-32 pb-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center justify-center w-20 h-20 bg-brand-primary/10 rounded-3xl text-brand-primary mb-6"
          >
            <Book size={40} />
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4"
          >
            Livro de Reclamações Eletrónico
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto"
          >
            A transparência e a satisfação dos nossos clientes são os pilares do Mercado Fresco.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Action Card */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2 bg-white dark:bg-slate-900 rounded-[3rem] p-8 md:p-12 shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-800"
          >
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
              <ShieldCheck className="text-brand-primary" /> Formalizar Reclamação ou Elogio
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
              Em conformidade com o Decreto-Lei n.º 74/2017, o Mercado Fresco disponibiliza o acesso à plataforma digital do Livro de Reclamações. Aqui poderá apresentar a sua reclamação, elogio ou sugestão de forma totalmente desmaterializada.
            </p>
            
            <div className="bg-brand-secondary/50 dark:bg-slate-800/50 rounded-3xl p-8 mb-10 border border-brand-primary/10">
              <h3 className="font-bold text-slate-900 dark:text-white mb-4">Como funciona?</h3>
              <ul className="space-y-4 text-slate-600 dark:text-slate-400">
                <li className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-brand-primary text-white flex items-center justify-center text-xs shrink-0 mt-0.5">1</div>
                  <span>Aceda ao portal oficial através do botão abaixo.</span>
                </li>
                <li className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-brand-primary text-white flex items-center justify-center text-xs shrink-0 mt-0.5">2</div>
                  <span>Preencha os dados solicitados sobre a sua experiência.</span>
                </li>
                <li className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-brand-primary text-white flex items-center justify-center text-xs shrink-0 mt-0.5">3</div>
                  <span>A entidade reguladora e o Mercado Fresco serão notificados.</span>
                </li>
              </ul>
            </div>

            <Button asChild size="lg" className="w-full sm:w-auto bg-brand-primary text-white hover:bg-brand-primary/90 rounded-full px-10 py-8 text-lg font-bold shadow-lg shadow-brand-primary/20">
              <a href="https://www.livroreclamacoes.pt" target="_blank" rel="noopener noreferrer">
                Aceder ao Portal Oficial <ExternalLink className="ml-2" size={20} />
              </a>
            </Button>
          </motion.div>

          {/* Sidebar Info */}
          <div className="space-y-8">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-brand-primary text-white rounded-[2.5rem] p-8"
            >
              <MessageSquare className="mb-4 opacity-50" size={32} />
              <h3 className="text-xl font-bold mb-4">Resolução Imediata</h3>
              <p className="text-brand-secondary/80 mb-6">
                Muitas vezes, um simples contacto direto permite-nos resolver a sua situação em minutos.
              </p>
              <div className="space-y-4">
                <div className="bg-white/10 rounded-2xl p-4">
                  <p className="text-xs uppercase tracking-wider opacity-60 mb-1">Email</p>
                  <p className="font-bold">geral@mercadofresco.pt</p>
                </div>
                <div className="bg-white/10 rounded-2xl p-4">
                  <p className="text-xs uppercase tracking-wider opacity-60 mb-1">Telefone</p>
                  <p className="font-bold">+351 210 000 000</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white dark:bg-slate-900 rounded-[2.5rem] p-8 border border-slate-100 dark:border-slate-800"
            >
              <HelpCircle className="text-brand-primary mb-4" size={32} />
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Entidade Reguladora</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                As reclamações apresentadas no livro eletrónico são enviadas diretamente para a <strong>ASAE</strong> (Autoridade de Segurança Alimentar e Económica), que garante a fiscalização e o cumprimento das normas.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Footer Note */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center text-slate-400 text-sm mt-12"
        >
          Mercado Fresco - Qualidade e Transparência desde 2010.
        </motion.p>
      </div>
    </div>
  );
}
