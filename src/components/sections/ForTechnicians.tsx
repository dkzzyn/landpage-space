import { Button } from '../ui/Button';
import { Section } from '../ui/Section';
import { Check, Briefcase } from 'lucide-react';

const benefits = [
  'Receba chamados próximos à sua localização',
  'Pagamentos garantidos e transparentes',
  'Flexibilidade total de agenda',
  'Oportunidade de crescimento profissional',
  'Suporte da plataforma em todo atendimento',
];

export function ForTechnicians() {
  return (
    <Section id="para-tecnicos" className="bg-white dark:bg-dark-bg transition-colors duration-300">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Para Técnicos de Campo
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg">
            Faça parte da maior rede de técnicos de TI do Brasil. Aumente sua renda trabalhando com grandes empresas.
          </p>

          <ul className="space-y-4 mb-8">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                  <Check size={14} className="text-secondary" />
                </div>
                <span className="text-gray-700 dark:text-gray-300">{benefit}</span>
              </li>
            ))}
          </ul>

          <Button variant="secondary" size="lg">Cadastrar-se como Técnico</Button>
        </div>

        <div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1581092921461-eab62e97a782?q=80&w=2070&auto=format&fit=crop"
              alt="Técnico de TI trabalhando"
              className="relative rounded-2xl shadow-2xl border border-white/10"
            />
            
            {/* Float Card */}
            <div className="absolute -bottom-6 -left-6 bg-white dark:bg-dark-card p-4 rounded-xl shadow-xl border border-gray-100 dark:border-white/10 flex items-center gap-4">
              <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-lg">
                <Briefcase className="text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <p className="text-xs text-gray-500 dark:text-gray-400">Vagas abertas hoje</p>
                <p className="font-bold text-gray-900 dark:text-white text-lg">+300</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
