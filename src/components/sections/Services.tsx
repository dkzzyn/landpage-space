import { Section } from '../ui/Section';
import { 
  Monitor, 
  Wifi, 
  Server, 
  Shield, 
  Cpu, 
  Settings 
} from 'lucide-react';

const services = [
  {
    icon: Monitor,
    title: 'Suporte Presencial',
    description: 'Resolução de problemas em desktops, notebooks e periféricos diretamente no local.',
  },
  {
    icon: Wifi,
    title: 'Redes e Infraestrutura',
    description: 'Instalação e manutenção de cabeamento estruturado, wi-fi e equipamentos de rede.',
  },
  {
    icon: Settings,
    title: 'Manutenção Preventiva',
    description: 'Limpeza física e lógica de equipamentos para aumentar a vida útil e performance.',
  },
  {
    icon: Shield,
    title: 'Segurança da Informação',
    description: 'Implementação de firewall, antivírus e políticas de segurança local.',
  },
  {
    icon: Server,
    title: 'Servidores e Cloud',
    description: 'Suporte básico a servidores físicos e apoio em migrações para nuvem.',
  },
  {
    icon: Cpu,
    title: 'Implantação de Sistemas',
    description: 'Apoio no rollout de novos softwares e sistemas operacionais em massa.',
  },
];

export function Services() {
  return (
    <Section id="servicos" className="bg-gray-50 dark:bg-dark-surface transition-colors duration-300">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Serviços Especializados
        </h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Cobrimos todas as necessidades de TI da sua empresa com profissionais capacitados.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div 
            key={index} 
            className="group bg-white dark:bg-dark-card p-8 rounded-2xl shadow-sm hover:shadow-xl border border-gray-100 dark:border-white/5 transition-all duration-300 hover:-translate-y-1"
          >
            <div className="w-14 h-14 rounded-xl bg-primary/10 group-hover:bg-primary text-primary group-hover:text-white flex items-center justify-center mb-6 transition-colors duration-300">
              <service.icon size={28} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
              {service.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
