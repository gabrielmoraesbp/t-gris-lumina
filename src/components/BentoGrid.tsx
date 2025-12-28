import { motion } from 'framer-motion';
import { 
  Globe, 
  Cog, 
  Database, 
  Cloud, 
  BarChart3,
  Zap,
  Timer,
  HardDrive,
  Shield,
  Brain
} from 'lucide-react';
import { SpotlightCard } from './SpotlightCard';

/**
 * BentoGrid Component - Service showcase in Bento-style grid
 * Features:
 * - Asymmetric grid layout
 * - Each card has spotlight effect
 * - Icon with cyan glow
 * - Emphasis tags for key metrics
 */

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  emphasis: string;
  emphasisIcon: React.ReactNode;
  className?: string;
}

const ServiceCard = ({ 
  icon, 
  title, 
  description, 
  emphasis, 
  emphasisIcon,
  className = '' 
}: ServiceCardProps) => (
  <SpotlightCard className={`p-6 md:p-8 h-full ${className}`}>
    <div className="flex flex-col h-full">
      {/* Icon */}
      <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-5 shadow-glow">
        <div className="text-primary">{icon}</div>
      </div>

      {/* Title */}
      <h3 className="text-xl font-semibold mb-3">{title}</h3>

      {/* Description */}
      <p className="text-muted-foreground text-sm leading-relaxed mb-5 flex-grow">
        {description}
      </p>

      {/* Emphasis Badge */}
      <div className="flex items-center gap-2 pt-4 border-t border-border/50">
        <div className="text-primary">{emphasisIcon}</div>
        <span className="text-sm font-medium gradient-text-cyan">{emphasis}</span>
      </div>
    </div>
  </SpotlightCard>
);

const services = [
  {
    icon: <Globe className="w-6 h-6" />,
    title: 'Sistemas Web',
    description: 'Aplicações web de alta performance com arquiteturas modernas. SPAs, PWAs e sistemas distribuídos otimizados para máxima velocidade.',
    emphasis: 'Latência Zero',
    emphasisIcon: <Zap className="w-4 h-4" />,
  },
  {
    icon: <Cog className="w-6 h-6" />,
    title: 'Automação',
    description: 'Pipelines de CI/CD, infraestrutura como código e automação de processos. Eliminamos tarefas repetitivas para você focar no que importa.',
    emphasis: 'Task-Zero',
    emphasisIcon: <Timer className="w-4 h-4" />,
  },
  {
    icon: <Database className="w-6 h-6" />,
    title: 'Big Data',
    description: 'Pipelines de dados em escala, processamento em tempo real e data lakes. Transformamos dados brutos em insights acionáveis.',
    emphasis: 'Escala de Terabytes',
    emphasisIcon: <HardDrive className="w-4 h-4" />,
  },
  {
    icon: <Cloud className="w-6 h-6" />,
    title: 'Cloud AWS',
    description: 'Arquiteturas cloud-native, serverless e containers. Design para alta disponibilidade, segurança e otimização de custos.',
    emphasis: 'Resiliência Nativa',
    emphasisIcon: <Shield className="w-4 h-4" />,
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: 'DataViz',
    description: 'Dashboards interativos e visualizações de dados complexos. Business Intelligence que transforma métricas em decisões estratégicas.',
    emphasis: 'Inteligência Estratégica',
    emphasisIcon: <Brain className="w-4 h-4" />,
  },
];

export const BentoGrid = () => {
  return (
    <section id="services" className="py-24 md:py-32 relative">
      {/* Background pattern */}
      <div className="absolute inset-0 dotted-grid opacity-50" />
      
      <div className="container relative z-10 px-4 md:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Nossos <span className="gradient-text-cyan">Serviços</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Soluções de engenharia de software projetadas para escala,
            performance e resiliência desde o primeiro dia.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {/* Large card - spans 2 columns on lg */}
          <div className="lg:col-span-2">
            <ServiceCard {...services[0]} />
          </div>
          
          {/* Regular card */}
          <div>
            <ServiceCard {...services[1]} />
          </div>

          {/* Regular card */}
          <div>
            <ServiceCard {...services[2]} />
          </div>

          {/* Large card - spans 2 columns on lg */}
          <div className="lg:col-span-2">
            <ServiceCard {...services[3]} />
          </div>

          {/* Full width card on mobile, centered on larger screens */}
          <div className="md:col-span-2 lg:col-span-3 lg:max-w-xl lg:mx-auto">
            <ServiceCard {...services[4]} />
          </div>
        </div>
      </div>
    </section>
  );
};
