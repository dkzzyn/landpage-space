import { Section } from '../ui/Section';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Carlos Mendes',
    role: 'Gerente de TI',
    company: 'TechSolutions Ltda',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop',
    text: 'A Space Tecnology revolucionou nossa operação de campo. Reduzimos o tempo de atendimento em 50% e a qualidade dos técnicos é impressionante.',
  },
  {
    name: 'Fernanda Souza',
    role: 'Diretora de Operações',
    company: 'Varejo Nacional',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop',
    text: 'A facilidade de solicitar um técnico e acompanhar tudo pela plataforma é incrível. O suporte é rápido e eficiente. Recomendo fortemente.',
  },
  {
    name: 'Roberto Alves',
    role: 'Coordenador de Infraestrutura',
    company: 'Logística Express',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1887&auto=format&fit=crop',
    text: 'Precisávamos de capilaridade e encontramos na Space Tecnology. Hoje atendemos nossas 200 filiais com o mesmo padrão de qualidade.',
  },
];

export function Testimonials() {
  return (
    <Section className="bg-white dark:bg-dark-bg transition-colors duration-300">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          O que dizem nossos clientes
        </h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Histórias reais de empresas que transformaram seu suporte de TI.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div 
            key={index} 
            className="bg-gray-50 dark:bg-dark-card p-8 rounded-2xl relative"
          >
            <Quote className="absolute top-8 right-8 text-primary/10 w-12 h-12" />
            
            <div className="flex gap-1 mb-6">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} size={16} className="text-yellow-400 fill-yellow-400" />
              ))}
            </div>

            <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed italic">
              "{testimonial.text}"
            </p>

            <div className="flex items-center gap-4">
              <img 
                src={testimonial.image} 
                alt={testimonial.name} 
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <p className="font-bold text-gray-900 dark:text-white">{testimonial.name}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {testimonial.role}, {testimonial.company}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
