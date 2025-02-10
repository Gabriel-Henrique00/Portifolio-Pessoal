import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';

const Experience = () => {
  const experiences = [
    {
      title: "Assistente administrativo",
      company: "Sekita Agronegócios · Aprendiz",
      period: "2021 - 2023",
      responsibilities: [
        "Análise de documentos e relatórios administrativos.",
        "Apoio nas atividades diárias do setor administrativo e financeiro.",
        "Organização de arquivos e controle de agendas.",
        "Auxílio na elaboração de novas ideias para o setor"
      ]
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <PageTransition>
      <section className="min-h-screen pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Experiência Profissional
            </h2>

            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="space-y-8"
            >
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  variants={item}
                  className="bg-gray-800/30 p-6 rounded-lg backdrop-blur-sm hover:bg-gray-800/40 transition-colors"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <h3 className="text-xl font-bold text-blue-400">{exp.title}</h3>
                    <p className="text-gray-400">{exp.period}</p>
                  </div>
                  <p className="text-lg text-purple-400 mb-4">{exp.company}</p>
                  <ul className="space-y-2">
                    {exp.responsibilities.map((resp, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * idx }}
                        className="text-gray-300 flex items-center"
                      >
                        <span className="text-blue-400 mr-2">•</span>
                        {resp}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Experience;