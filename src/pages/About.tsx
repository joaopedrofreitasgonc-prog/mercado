import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  Heart, 
  Users, 
  Sprout, 
  Award, 
  MapPin, 
  Calendar,
  ChevronRight,
  Quote
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export default function About() {
  const milestones = [
    { year: '2010', title: 'A Semente', description: 'O Mercado Fresco começou como uma pequena banca familiar no mercado municipal de Barcelos.' },
    { year: '2015', title: 'Primeira Loja', description: 'Abrimos o nosso primeiro espaço físico dedicado exclusivamente a produtos biológicos e locais.' },
    { year: '2018', title: 'Expansão Sustentável', description: 'Implementámos a política de desperdício zero e eliminámos 90% dos plásticos de uso único.' },
    { year: '2023', title: 'Digitalização', description: 'Lançámos a nossa loja online para levar a frescura da horta a mais famílias em toda a região.' },
  ];

  return (
    <div className="bg-white dark:bg-slate-950 min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden bg-brand-secondary/30 dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <Badge className="mb-4 bg-brand-primary text-white border-none px-4 py-1">A Nossa História</Badge>
            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white leading-tight mb-6">
              Da terra para a sua mesa, com <span className="text-brand-primary">amor.</span>
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
              Há mais de uma década que trabalhamos lado a lado com os produtores locais para garantir que a qualidade e a frescura nunca faltam na sua casa.
            </p>
          </motion.div>
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-full hidden lg:block">
          <img 
            src="/images/cabaz de fruta tropical.jpg" 
            alt="Mãos a trabalhar na terra" 
            className="w-full h-full object-cover opacity-20 dark:opacity-10"
            referrerPolicy="no-referrer"
          />
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-[2.5rem] bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800"
            >
              <div className="w-14 h-14 bg-brand-primary/10 rounded-2xl flex items-center justify-center text-brand-primary mb-6">
                <Heart size={28} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Paixão Local</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Acreditamos no poder da nossa comunidade. 90% dos nossos produtos vêm de um raio de 50km da nossa loja principal.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-8 rounded-[2.5rem] bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800"
            >
              <div className="w-14 h-14 bg-brand-accent/10 rounded-2xl flex items-center justify-center text-brand-accent mb-6">
                <Sprout size={28} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Sustentabilidade</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Respeitamos os ciclos da natureza. Promovemos o consumo sazonal e combatemos ativamente o desperdício alimentar.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-8 rounded-[2.5rem] bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800"
            >
              <div className="w-14 h-14 bg-brand-primary/10 rounded-2xl flex items-center justify-center text-brand-primary mb-6">
                <Users size={28} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Transparência</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Sabemos quem planta, quem colhe e quem entrega. Partilhamos a origem de cada produto com total honestidade.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold mb-4">A Nossa Jornada</h2>
            <p className="text-slate-400 text-lg">Os marcos que definiram quem somos hoje.</p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-slate-800 hidden md:block" />

            <div className="space-y-24">
              {milestones.map((m, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className={`flex flex-col md:flex-row items-center gap-8 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                >
                  <div className="flex-1 text-center md:text-left">
                    <div className={`flex flex-col ${idx % 2 === 0 ? 'md:items-start' : 'md:items-end'}`}>
                      <span className="text-brand-primary font-bold text-5xl mb-2">{m.year}</span>
                      <h4 className="text-2xl font-bold mb-4">{m.title}</h4>
                      <p className={`text-slate-400 leading-relaxed max-w-sm ${idx % 2 === 0 ? '' : 'md:text-right'}`}>
                        {m.description}
                      </p>
                    </div>
                  </div>
                  <div className="relative z-10 w-12 h-12 bg-brand-primary rounded-full flex items-center justify-center border-4 border-slate-900">
                    <Calendar size={20} />
                  </div>
                  <div className="flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-32 bg-white dark:bg-slate-950">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Quote size={64} className="mx-auto text-brand-primary/20 mb-8" />
          <h2 className="text-3xl md:text-4xl font-display italic text-slate-800 dark:text-slate-200 leading-relaxed mb-12">
            "O nosso compromisso não é apenas vender comida, é nutrir a nossa comunidade com o que a terra tem de melhor, respeitando sempre quem a trabalha."
          </h2>
          <div className="flex items-center justify-center gap-4">
            <img 
              src="https://picsum.photos/seed/founder/100/100" 
              alt="Fundador do Mercado Fresco" 
              className="w-16 h-16 rounded-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="text-left">
              <p className="font-bold text-slate-900 dark:text-white">António Oliveira</p>
              <p className="text-slate-500 text-sm">Fundador do Mercado Fresco</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-brand-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-4xl font-bold mb-8">Venha conhecer-nos pessoalmente</h2>
          <p className="text-xl text-brand-secondary/80 mb-12 max-w-2xl mx-auto">
            Visite a nossa loja em Barcelos e descubra a verdadeira frescura dos nossos produtos.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="bg-white text-brand-primary hover:bg-slate-100 rounded-full px-10 py-7 text-lg font-bold">
              <a 
                href="https://www.google.com/maps/search/?api=1&query=R.+Rio+de+Vila,+150+Vila+Frescainha+(S%C3%A3o+Martinho),+Barcelos" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center"
              >
                Ver Localização <MapPin className="ml-2" size={20} />
              </a>
            </Button>
            <Button asChild size="lg" className="bg-white text-brand-primary hover:bg-slate-100 rounded-full px-10 py-7 text-lg font-bold">
              <Link to="/#footer">Contactar-nos</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
