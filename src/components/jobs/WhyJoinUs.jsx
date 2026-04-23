import React from 'react';
import { motion } from 'framer-motion';
import { Users, Star, TrendingUp } from 'lucide-react';

const WhyJoinUs = () => {
  const reasons = [
    {
      id: 1,
      icon: Users,
      title: "Équipe Diverse",
      description: "Rejoignez une équipe inclusive et multidisciplinaire où les idées de chacun trouvent leur place et contribuent à l'innovation globale."
    },
    {
      id: 2,
      icon: Star,
      title: "Culture de l'Excellence",
      description: "Nous visons toujours plus haut. Travailler chez nous, c'est l'assurance d'être impliqué sur des projets de grande envergure et exigeants."
    },
    {
      id: 3,
      icon: TrendingUp,
      title: "Évolution Continue",
      description: "Votre carrière ne stagne jamais. Profitez de formations internes, d'opportunités de mobilité et d'un environnement ultra-stimulant."
    }
  ];

  return (
    <section className="py-20 bg-midnight-slate relative overflow-hidden">
      {/* Decorative background blurs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-signal-blue/20 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] translate-x-1/3 translate-y-1/3" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Pourquoi nous rejoindre ?
          </h2>
          <p className="text-gray-400 text-lg">
            Bien plus qu'un emploi, c'rejoindre une vision. Nous offrons le cadre idéal pour que votre talent s'exprime pleinement.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div 
                key={reason.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/5 border border-white/10 backdrop-blur-md p-8 rounded-2xl hover:bg-white/10 transition-colors"
              >
                <div className="w-14 h-14 rounded-xl bg-signal-blue flex items-center justify-center text-white mb-6">
                  <Icon size={24} />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">
                  {reason.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {reason.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyJoinUs;
