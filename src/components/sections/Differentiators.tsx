import { Section } from '../ui/Section';
import { Zap, ShieldCheck, Globe, Headphones } from 'lucide-react';

const differentials = [
  {
    icon: Zap,
    title: 'Plataforma Inteligente',
    description: 'Nossa tecnologia cruza dados para encontrar o técnico ideal em segundos.',
  },
  {
    icon: ShieldCheck,
    title: 'Segurança Total',
    description: 'Todos os técnicos passam por rigoroso processo de verificação de antecedentes.',
  },
  {
    icon: Globe,
    title: 'Cobertura Nacional',
    description: 'Atendemos em todas as capitais e principais cidades do interior do Brasil.',
  },
  {
    icon: Headphones,
    title: 'Suporte Humanizado',
    description: 'Time de operações disponível para acompanhar cada chamado do início ao fim.',
  },
];

export function Differentiators() {
  return (
    <Section className="bg-white dark:bg-dark-bg relative overflow-hidden transition-colors duration-300">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-64 w-96 h-96 bg-primary/5 dark:bg-primary/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 -right-64 w-96 h-96 bg-secondary/5 dark:bg-secondary/10 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Por que escolher a <span className="text-gradient">Space Tecnology</span>?
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg">
            Unimos o melhor da tecnologia com a expertise humana para entregar resultados excepcionais.
          </p>

          <div className="grid sm:grid-cols-2 gap-8">
            {differentials.map((item, index) => (
              <div key={index} className="space-y-3">
                <div className="w-12 h-12 rounded-lg bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 flex items-center justify-center">
                  <item.icon className="text-secondary" size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">{item.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary rounded-2xl opacity-10 dark:opacity-20 blur-lg transform rotate-3" />
          <div className="relative bg-white dark:bg-dark-card border border-gray-200 dark:border-white/10 rounded-2xl p-8 shadow-2xl">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-gray-900 dark:text-white font-bold">Performance em Tempo Real</h3>
              <div className="flex gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500" />
                <span className="w-3 h-3 rounded-full bg-yellow-500" />
                <span className="w-3 h-3 rounded-full bg-green-500" />
              </div>
            </div>
            
            {/* Fake Dashboard UI */}
            <div className="space-y-6">
              <div className="flex justify-between items-end">
                <div className="space-y-1">
                  <p className="text-sm text-gray-500 dark:text-gray-400">Chamados Resolvidos</p>
                  <p className="text-3xl font-bold text-gray-900 dark:text-white">12,450</p>
                </div>
                <div className="text-green-500 dark:text-green-400 text-sm font-bold">+15% este mês</div>
              </div>
              
              <div className="h-32 flex items-end gap-2">
                {[40, 65, 45, 80, 55, 90, 75].map((h, i) => (
                  <div 
                    key={i} 
                    className="flex-1 bg-primary/10 dark:bg-primary/20 hover:bg-primary/30 dark:hover:bg-primary/40 transition-colors rounded-t-sm relative group"
                    style={{ height: `${h}%` }}
                  >
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-900 dark:bg-white text-white dark:text-black text-xs font-bold py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                      {h}
                    </div>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-200 dark:border-white/10">
                <div>
                  <p className="text-xs text-gray-500 dark:text-gray-400">SLA Médio</p>
                  <p className="text-gray-900 dark:text-white font-bold">3.5 horas</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Satisfação</p>
                  <p className="text-gray-900 dark:text-white font-bold">4.9/5.0</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
