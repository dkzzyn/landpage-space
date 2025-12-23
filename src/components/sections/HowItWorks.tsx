import { Section } from '../ui/Section';
import { ClipboardList, UserCheck, MapPin, FileCheck } from 'lucide-react';

const steps = [
  {
    icon: ClipboardList,
    title: 'Solicitação do Serviço',
    description: 'Abra um chamado detalhando sua necessidade e localização.',
  },
  {
    icon: UserCheck,
    title: 'Alocação Inteligente',
    description: 'Nossa IA encontra o técnico qualificado mais próximo.',
  },
  {
    icon: MapPin,
    title: 'Atendimento em Campo',
    description: 'O técnico vai até o local e resolve o problema com agilidade.',
  },
  {
    icon: FileCheck,
    title: 'Relatório e Finalização',
    description: 'Receba um relatório técnico detalhado e avalie o serviço.',
  },
];

export function HowItWorks() {
  return (
    <Section id="como-funciona" className="bg-white dark:bg-dark-bg transition-colors duration-300">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Como Funciona
        </h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Processo simplificado para garantir a melhor experiência em suporte técnico.
        </p>
      </div>

      <div className="grid md:grid-cols-4 gap-8 relative">
        {/* Connector Line (Desktop) */}
        <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-primary/0 via-primary/50 to-primary/0" />

        {steps.map((step, index) => (
          <div key={index} className="relative flex flex-col items-center text-center group">
            <div className="relative mb-6 z-10">
              <div className="w-24 h-24 rounded-2xl bg-white dark:bg-dark-card border border-gray-200 dark:border-white/10 shadow-lg flex items-center justify-center transition-transform duration-300 group-hover:-translate-y-2">
                <step.icon size={32} className="text-primary" />
              </div>
              
              {/* Step Number Badge */}
              <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm shadow-lg z-20 border-2 border-white dark:border-dark-bg">
                {index + 1}
              </div>
            </div>

            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              {step.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
