import React from 'react';
import { motion } from 'motion/react';
import { Scale, Gavel, FileCheck, AlertCircle } from 'lucide-react';

export default function TermsConditions() {
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
              <Scale size={24} />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">Termos e Condições</h1>
          </div>

          <div className="prose prose-slate dark:prose-invert max-w-none space-y-8 text-slate-600 dark:text-slate-400">
            <section>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                <Gavel size={20} className="text-brand-primary" /> 1. Aceitação dos Termos
              </h2>
              <p>
                Ao aceder e utilizar o website do Mercado Fresco, o utilizador concorda em cumprir e ficar vinculado aos seguintes termos e condições de utilização. Se não concordar com qualquer parte destes termos, não deverá utilizar o nosso website.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                <FileCheck size={20} className="text-brand-primary" /> 2. Utilização do Serviço
              </h2>
              <p>
                O utilizador compromete-se a utilizar este website apenas para fins lícitos e de uma forma que não infrinja os direitos de terceiros ou restrinja a utilização do website por outros.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                <AlertCircle size={20} className="text-brand-primary" /> 3. Preços e Disponibilidade
              </h2>
              <p>
                Todos os preços indicados no website incluem IVA à taxa legal em vigor. O Mercado Fresco reserva-se o direito de alterar preços e disponibilidade de produtos sem aviso prévio, embora nos esforcemos por manter a informação sempre atualizada.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">4. Propriedade Intelectual</h2>
              <p>
                Todo o conteúdo deste website, incluindo textos, gráficos, logótipos e imagens, é propriedade do Mercado Fresco ou dos seus fornecedores de conteúdos e está protegido pelas leis de direitos de autor.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">5. Resolução de Litígios</h2>
              <p>
                Em caso de litígio, o consumidor pode recorrer a uma Entidade de Resolução Alternativa de Litígios de Consumo. Mais informações em www.consumidor.pt.
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
