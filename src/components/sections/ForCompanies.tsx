import { Button } from '../ui/Button';
import { Section } from '../ui/Section';
import { Check, Building2 } from 'lucide-react';

const benefits = [
  'Técnicos 100% qualificados e verificados',
  'Atendimento em até 4 horas nas capitais',
  'Dashboard para controle total de chamados',
  'Relatórios técnicos digitais e padronizados',
  'Redução de até 40% nos custos de Field Service',
];

export function ForCompanies() {
  return (
    <Section id="para-empresas" className="bg-gray-50 dark:bg-dark-surface transition-colors duration-300">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1">
          <div className="relative">
            <div className="absolute -inset-4 bg-primary/20 rounded-2xl blur-xl" />
            <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
              alt="Ambiente corporativo moderno"
              className="relative rounded-2xl shadow-2xl border border-white/10"
            />
            
            {/* Float Card */}
            <div className="absolute -bottom-6 -right-6 bg-white dark:bg-dark-card p-4 rounded-xl shadow-xl border border-gray-100 dark:border-white/10 flex items-center gap-4">
              <div className="bg-green-100 dark:bg-green-900/30 p-2 rounded-lg">
                <Building2 className="text-green-600 dark:text-green-400" />
              </div>
              <div>
                <p className="text-xs text-gray-500 dark:text-gray-400">Empresas atendidas</p>
                <p className="font-bold text-gray-900 dark:text-white text-lg">+1.500</p>
              </div>
            </div>
          </div>
        </div>

        <div className="order-1 md:order-2">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Para Empresas
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg">
            Escale sua operação de TI sem aumentar custos fixos. Tenha técnicos especialistas em qualquer lugar do Brasil.
          </p>

          <ul className="space-y-4 mb-8">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Check size={14} className="text-primary" />
                </div>
                <span className="text-gray-700 dark:text-gray-300">{benefit}</span>
              </li>
            ))}
          </ul>

          <Button size="lg">Solicitar Atendimento</Button>
        </div>
      </div>
    </Section>
  );
}
