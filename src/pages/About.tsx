import { motion } from 'framer-motion';
import { Code2, Database, Server, Terminal, Siren } from 'lucide-react';
import PageTransition from '../components/PageTransition';

const About = () => {
  const skills = [
    {
      category: "Back-end Development",
      icon: Server,
      items: [
        { name: "Node.js", level: 60 },
        { name: "Java", level: 60},
        { name: "Django", level: 45}
      ]
    },
    {
      category: "Banco de Dados",
      icon: Database,
      items: [
        { name: "PostgreSQL", level: 60 },
        { name: "MongoDB", level: 55 },
        { name: "SQL", level: 80 },
      ]
    },
    {
      category: "Ferramentas & Práticas",
      icon: Terminal,
      items: [
        { name: "Git", level: 70 },
        { name: "MVC (Model-View-Controller)", level: 80 },
        { name: "Estrutura De Dados", level: 60 },
        { name: "Paradigmas de Programação", level: 45}
      ]
    },
    {
      category: "APIs e Web Services",
      icon: Code2,
      items: [
        { name: "RESTful APIs ", level: 60 },
        { name: "Autenticação e Autorização – JWT,", level: 40 },
        { name: "Postman", level: 85 }
      ]
    },
    {
      category: "Controle de Versão e DevOps",
      icon: Code2,
      items: [
        { name: "Git e GitHub/GitLab", level: 50 },
        { name: "Docker", level: 1 },
        { name: "CI/CD", level: 30 },
        { name: "AWS (Básico)", level: 10 }
      ]
    },
    {
      category: "Soft Skills e Metodologias Ágeis",
      icon: Siren,
      items: [
        { name: "Trabalho em equipe", level: 90 },
        { name: "Comunicação", level: 70 },
        { name: "Adaptabilidade", level: 100 },
        { name: "Scrum", level: 80 },
        { name: "Kanban", level: 60 },
      ]
    }
  ];

  return (
    <PageTransition>
      <section className="min-h-screen pt-24 pb-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Habilidades Técnicas
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {skills.map((skillGroup, index) => (
                <motion.div
                  key={skillGroup.category}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gray-800/30 p-6 rounded-lg backdrop-blur-sm"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <skillGroup.icon className="w-6 h-6 text-blue-400" />
                    <h3 className="text-xl font-semibold text-gray-200">
                      {skillGroup.category}
                    </h3>
                  </div>
                  
                  <div className="space-y-4">
                    {skillGroup.items.map((skill, skillIndex) => (
                      <div key={skill.name}>
                        <div className="flex justify-between mb-1">
                          <span className="text-gray-300">{skill.name}</span>
                          <span className="text-gray-400">{skill.level}%</span>
                        </div>
                        <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                          <motion.div
                            className="h-full bg-gradient-to-r from-blue-400 to-purple-500"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ duration: 1, delay: skillIndex * 0.1 }}
                            viewport={{ once: true }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-12 p-6 bg-gray-800/30 rounded-lg backdrop-blur-sm"
            >
              <h3 className="text-xl font-semibold text-gray-200 mb-4">
                Objetivos de Desenvolvimento
              </h3>
              <p className="text-gray-300">
                Como desenvolvedor em início de carreira, estou focado em aprofundar meus conhecimentos
                em desenvolvimento back-end, especialmente em arquitetura de software, padrões de projeto
                e boas práticas de desenvolvimento. Busco uma oportunidade de estágio onde possa aplicar
                e expandir essas habilidades em projetos reais.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
};

export default About;