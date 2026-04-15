import { ShoppingBasket, MapPin, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

export default function Footer() {
  return (
    <footer id="footer" className="bg-slate-900 text-slate-300 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-brand-primary rounded-xl flex items-center justify-center text-white">
                <ShoppingBasket size={24} />
              </div>
              <span className="text-2xl font-display font-bold text-white tracking-tight">Mercado Fresco</span>
            </div>
            <p className="text-slate-400 leading-relaxed">
              O seu supermercado de confiança, focado na frescura e na qualidade dos produtos locais.
            </p>
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-brand-primary transition-colors cursor-pointer">
                <span className="font-bold text-white">f</span>
              </div>
              <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-brand-primary transition-colors cursor-pointer">
                <span className="font-bold text-white">in</span>
              </div>
              <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-brand-primary transition-colors cursor-pointer">
                <span className="font-bold text-white">ig</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Contactos</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-brand-primary shrink-0" size={20} />
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=R.+Rio+de+Vila,+150+Vila+Frescainha+(S%C3%A3o+Martinho),+Barcelos" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-brand-primary transition-colors"
                >
                  R. Rio de Vila, 150 Vila Frescainha (São Martinho), Barcelos
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-brand-primary shrink-0" size={20} />
                <span>+351 210 000 000</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-brand-primary shrink-0" size={20} />
                <span>geral@mercadofresco.pt</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Boletim de Notícias</h4>
            <p className="text-slate-400 mb-6">Receba as nossas ofertas semanais diretamente no seu email.</p>
            <div className="flex gap-2">
              <Input placeholder="O seu email" className="bg-slate-800 border-slate-700 text-white rounded-xl" />
              <Button className="bg-brand-primary text-white rounded-xl">OK</Button>
            </div>
          </div>
        </div>
        
        <Separator className="bg-slate-800 mb-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>© 2026 Mercado Fresco. Todos os direitos reservados.</p>
          <div className="flex gap-6">
            <Link to="/privacidade" className="hover:text-white transition-colors">Política de Privacidade</Link>
            <Link to="/termos" className="hover:text-white transition-colors">Termos e Condições</Link>
            <Link to="/reclamacoes" className="hover:text-white transition-colors">Livro de Reclamações</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
