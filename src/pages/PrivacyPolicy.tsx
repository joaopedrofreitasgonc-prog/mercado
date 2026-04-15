import React from 'react';
import { motion } from 'motion/react';
import { Shield, Lock, Eye, FileText } from 'lucide-react';

export default function PrivacyPolicy() {
  return (
    <div className="bg-slate-50 dark:bg-slate-950 min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white dark:bg-slate-900 rounded-[2.5rem] p-8 md:p-16 shadow-sm border border-slate-100 dark:border-slate-800"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-brand-primary/10 rounded-2xl flex items-center justify-center text-brand-primary">
              <Shield size={24} />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">Política de Privacidade</h1>
          </div>

          <div className="prose prose-slate dark:prose-invert max-w-none space-y-8 text-slate-600 dark:text-slate-400">
            <section>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                <Eye size={20} className="text-brand-primary" /> 1. Introdução
              </h2>
              <p>
                No Mercado Fresco, a privacidade dos nossos clientes é uma prioridade fundamental. Esta política descreve como recolhemos, utilizamos e protegemos as suas informações pessoais quando utiliza o nosso website e serviços.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                <FileText size={20} className="text-brand-primary" /> 2. Informações que Recolhemos
              </h2>
              <p>Recolhemos informações que nos fornece diretamente, tais como:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Nome e dados de contacto (email, telefone, morada);</li>
                <li>Informações de pagamento para processamento de encomendas;</li>
                <li>Preferências de produtos e histórico de compras;</li>
                <li>Comunicações enviadas através do nosso formulário de apoio ao cliente.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                <Lock size={20} className="text-brand-primary" /> 3. Como Protegemos os Seus Dados
              </h2>
              <p>
                Implementamos medidas de segurança técnicas e organizacionais rigorosas para proteger os seus dados contra acesso não autorizado, alteração, divulgação ou destruição. Utilizamos encriptação SSL em todas as transações financeiras.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">4. Partilha de Informações</h2>
              <p>
                Não vendemos nem alugamos as suas informações pessoais a terceiros. Podemos partilhar dados com parceiros de confiança (como empresas de transporte) apenas na medida do necessário para cumprir o seu pedido.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">5. Os Seus Direitos</h2>
              <p>
                De acordo com o RGPD, tem o direito de aceder, retificar, apagar ou limitar o tratamento dos seus dados pessoais. Para exercer estes direitos, contacte-nos através do email geral@mercadofresco.pt.
              </p>
            </section>

            <div className="pt-8 border-t border-slate-100 dark:border-slate-800 text-sm italic">
              Última atualização: 13 de Abril de 2026
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
