import { motion } from 'framer-motion';
import { Github, Linkedin, Instagram } from 'lucide-react';
import PageTransition from '../components/PageTransition';

const Home = () => {
  return (
    <PageTransition>
      <div className="relative">
        <header className="min-h-screen flex items-center justify-center relative">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10"></div>
          
          {/* Animação BackGround */}
          <motion.div
            className="absolute inset-0 overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.1 }}
            transition={{ duration: 1 }}
          >
            <motion.div
              className="absolute w-96 h-96 bg-blue-500 rounded-full blur-3xl"
              animate={{
                x: [0, 100, 0],
                y: [0, 50, 0],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{ left: '20%', top: '20%' }}
            />
            <motion.div
              className="absolute w-96 h-96 bg-purple-500 rounded-full blur-3xl"
              animate={{
                x: [0, -100, 0],
                y: [0, -50, 0],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{ right: '20%', bottom: '20%' }}
            />
          </motion.div>

          <div className="container mx-auto px-4 py-16 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                    Gabriel
                </h1>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <p className="text-xl md:text-2xl text-gray-300 mb-8">
                  Desenvolvedor Estagiário - Engenheiro De Software
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex justify-center gap-6"
              >
                {[
                  { Icon: Github, href: "https://github.com/Gabriel-Henrique00", delay: 0 },
                  { Icon: Linkedin, href: "https://www.linkedin.com/in/gabriel-henrique00/", delay: 0.1 },
                  { Icon: Instagram, href: "https://www.instagram.com/gabriel.henrique50", delay: 0.2 }
                ].map(({ Icon, href, delay }) => (
                  <motion.a
                    key={href}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 hover:text-blue-400 transition-colors bg-gray-800/30 rounded-full backdrop-blur-sm"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + delay }}
                  >
                    <Icon size={24} />
                  </motion.a>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="mt-16"
              >
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="text-gray-400"
                >
                  ↓ Scroll para me conhecer
                </motion.div>
              </motion.div>
            </div>
          </div>
        </header>

        {/*Seção com foto */}
        <section className="min-h-screen bg-gray-900/95 py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
              >
                <div className="order-2 md:order-1">
                  <motion.h2
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
                  >
                    Olá, eu sou o Gabriel!
                  </motion.h2>
                  <motion.p
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="text-lg text-gray-300 mb-6"
                  >
                    Sou um desenvolvedor em início de carreira estudante do Curso de Engenharia de Software No IFSP - São Carlos,
                    apaixonado por tecnologia
                    e desenvolvimento. Busco minha primeira oportunidade como 
                    estagiário para aplicar meus conhecimentos e crescer profissionalmente. 
                    Durante minha formação, desenvolvi projetos práticos que me permitiram 
                    aprender tecnologias modernas e boas práticas de desenvolvimento e esse site para me apresentar!
                  </motion.p>
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    viewport={{ once: true }}
                    className="flex flex-wrap gap-4"
                  >{/*
                    <span className="px-4 py-2 bg-blue-500/10 text-blue-400 rounded-full">
                      Node.js
                    </span>
                    <span className="px-4 py-2 bg-green-500/10 text-green-400 rounded-full">
                      Express
                    </span>
                    <span className="px-4 py-2 bg-yellow-500/10 text-yellow-400 rounded-full">
                      SQL
                    </span>
                    <span className="px-4 py-2 bg-purple-500/10 text-purple-400 rounded-full">
                      APIs REST
                    </span>
                  */}
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="order-1 md:order-2"
                >
                  <div className="relative">
                    {}
                    <img
                      src="https://i.imgur.com/DxdFWCM.jpeg"
                      alt="Gabriel Henrique"
                      className="w-full h-[400px] object-cover rounded-2xl"
                    />
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-gray-900/50 to-transparent" />
                    <div className="absolute inset-0 rounded-2xl ring-1 ring-white/20" />
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default Home;