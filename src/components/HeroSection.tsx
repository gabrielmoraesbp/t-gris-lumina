import { motion } from 'framer-motion';
import { ArrowRight, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ParticleField } from './ParticleField';

/**
 * HeroSection Component - Main landing section
 * Features:
 * - Animated particle network background
 * - Staggered text animations
 * - Gradient radial glow effect
 * - Responsive typography
 */

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden dotted-grid">
      {/* Background gradient glow */}
      <div className="absolute inset-0 bg-gradient-radial opacity-50" />
      
      {/* Particle animation layer */}
      <div className="absolute inset-0">
        <ParticleField />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 md:px-6 pt-20 pb-16">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card/50 backdrop-blur-sm mb-8"
          >
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">
              Engenharia de Software de Alta Performance
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl md:text-5xl lg:text-display font-bold leading-tight mb-6"
          >
            <span className="gradient-text">Tégris</span>
            <span className="block mt-2 text-3xl md:text-4xl lg:text-5xl text-foreground/90">
              Engenharia Sólida para a Era da{' '}
              <span className="gradient-text-cyan">Escalabilidade Infinita</span>
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
          >
            Arquiteturas resilientes para sistemas críticos, Cloud AWS e Big Data.
            Transformamos complexidade em vantagem competitiva.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button variant="hero" size="xl" asChild>
              <a href="#contact">
                Iniciar Projeto
                <ArrowRight className="w-5 h-5 ml-1" />
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="#services">Explorar Serviços</a>
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-border/50"
          >
            {[
              { value: '99.9%', label: 'Uptime SLA' },
              { value: '<50ms', label: 'Latência P99' },
              { value: 'PB+', label: 'Dados Processados' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl md:text-3xl font-bold gradient-text-cyan">
                  {stat.value}
                </div>
                <div className="text-xs md:text-sm text-muted-foreground mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};
