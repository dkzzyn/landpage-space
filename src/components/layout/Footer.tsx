import { Mail, Phone, MapPin, Instagram, Linkedin, Facebook } from 'lucide-react';
import { Logo } from '../ui/Logo';

export function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-dark-surface pt-20 pb-10 border-t border-gray-200 dark:border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <div className="mb-6">
              <Logo />
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Conectamos empresas aos melhores técnicos de campo em TI com agilidade, segurança e tecnologia.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors"><Facebook size={20} /></a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-bold text-gray-900 dark:text-white mb-6">Empresa</h3>
            <ul className="space-y-4">
              <li><a href="#sobre" className="text-gray-600 dark:text-gray-400 hover:text-primary">Sobre Nós</a></li>
              <li><a href="#como-funciona" className="text-gray-600 dark:text-gray-400 hover:text-primary">Como Funciona</a></li>
              <li><a href="#carreiras" className="text-gray-600 dark:text-gray-400 hover:text-primary">Carreiras</a></li>
              <li><a href="#blog" className="text-gray-600 dark:text-gray-400 hover:text-primary">Blog</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-gray-900 dark:text-white mb-6">Serviços</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary">Suporte Presencial</a></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary">Infraestrutura</a></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary">Redes</a></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary">Segurança</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-gray-900 dark:text-white mb-6">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                <Mail size={18} className="text-primary" />
                contato@spacetecnology.com
              </li>
              <li className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                <Phone size={18} className="text-primary" />
                +55 (11) 99999-9999
              </li>
              <li className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                <MapPin size={18} className="text-primary" />
                São Paulo, SP
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500 dark:text-gray-500">
            © 2024 Space Tecnology. Todos os direitos reservados.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-gray-500 hover:text-primary">Termos de Uso</a>
            <a href="#" className="text-gray-500 hover:text-primary">Política de Privacidade</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
