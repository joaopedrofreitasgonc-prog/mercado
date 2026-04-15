import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Products from './pages/Products';
import Offers from './pages/Offers';
import JoinClub from './pages/JoinClub';
import OnlineStore from './pages/OnlineStore';
import ProductDetail from './pages/ProductDetail';
import About from './pages/About';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsConditions from './pages/TermsConditions';
import LivroReclamacoes from './pages/LivroReclamacoes';

export default function App() {
  return (
    <Router>
      <CartProvider>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col selection:bg-brand-primary selection:text-white">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/produtos" element={<Products />} />
              <Route path="/ofertas" element={<Offers />} />
              <Route path="/aderir-clube" element={<JoinClub />} />
              <Route path="/loja-online" element={<OnlineStore />} />
              <Route path="/produto/:id" element={<ProductDetail />} />
              <Route path="/sobre" element={<About />} />
              <Route path="/privacidade" element={<PrivacyPolicy />} />
              <Route path="/termos" element={<TermsConditions />} />
              <Route path="/reclamacoes" element={<LivroReclamacoes />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </CartProvider>
    </Router>
  );
}
