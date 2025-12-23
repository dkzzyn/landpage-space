import { Button } from '../ui/Button';
import { Section } from '../ui/Section';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

export function Hero() {
  const { scrollY } = useScroll();
  const rotate = useTransform(scrollY, [0, 1000], [0, 180]);
  const y = useTransform(scrollY, [0, 1000], [0, 300]);

  return (
    <div className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-white dark:bg-dark-bg transition-colors duration-300">
      {/* Animated Planet */}
      <motion.div 
        style={{ rotate, y }}
        className="absolute -right-20 md:-right-40 top-20 w-64 h-64 md:w-[800px] md:h-[800px] rounded-full z-0 pointer-events-none select-none flex items-center justify-center"
      >
        {/* Ring */}
        <div className="absolute w-[160%] h-[160%] rounded-full border border-blue-500/20 bg-gradient-to-tr from-blue-600/10 via-transparent to-transparent z-0 transform rotate-[60deg] scale-y-[0.3] shadow-[0_0_50px_rgba(59,130,246,0.2)]">
           <div className="absolute inset-[10%] rounded-full border border-blue-400/10" />
           <div className="absolute inset-[20%] rounded-full border border-blue-300/5" />
        </div>
      </motion.div>

      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 dark:bg-primary/20 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 dark:bg-secondary/20 rounded-full blur-[100px] animate-pulse delay-1000" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')] bg-cover bg-center opacity-5 dark:opacity-10 mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 dark:via-dark-bg/50 to-white dark:to-dark-bg" />
      </div>

      <Section className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 animate-slide-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Disponível em todo o Brasil</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold leading-tight text-gray-900 dark:text-white">
            Conectamos empresas aos melhores <span className="text-gradient">técnicos de TI</span>
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-xl">
            A Space Tecnology simplifica o suporte técnico presencial com agilidade, segurança e tecnologia de ponta.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="w-full sm:w-auto justify-center">
              Solicitar Técnico <ArrowRight size={20} />
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto justify-center">
              Quero ser Técnico
            </Button>
          </div>

          <div className="pt-8 border-t border-gray-200 dark:border-white/10 flex flex-wrap gap-6">
            {['Atendimento Rápido', 'Profissionais Verificados', 'Pagamento Seguro'].map((item) => (
              <div key={item} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                <CheckCircle size={16} className="text-primary" />
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="hidden md:block relative animate-fade-in">
          <div className="relative z-10 bg-white/50 dark:bg-dark-card/50 backdrop-blur-xl border border-gray-200 dark:border-white/10 rounded-2xl p-8 shadow-2xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center">
                <CheckCircle className="text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">Chamado Confirmado</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Técnico a caminho</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="h-2 bg-gray-200 dark:bg-white/5 rounded-full w-full" />
              <div className="h-2 bg-gray-200 dark:bg-white/5 rounded-full w-3/4" />
              <div className="h-2 bg-gray-200 dark:bg-white/5 rounded-full w-1/2" />
            </div>
            <div className="mt-6 flex items-center justify-between">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 border-2 border-white dark:border-dark-card" />
                ))}
              </div>
              <span className="text-sm text-primary font-medium">+500 técnicos online</span>
            </div>
          </div>
          
          {/* Floating Elements */}
          <div className="absolute -top-10 -right-10 w-20 h-20 bg-secondary/20 rounded-2xl rotate-12 backdrop-blur-md border border-white/5 animate-pulse" />
          <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-primary/20 rounded-full blur-xl" />
        </div>
      </Section>
    </div>
  );
}
