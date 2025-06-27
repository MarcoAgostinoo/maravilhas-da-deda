// pages/contact.tsx ou app/contact/page.tsx (para Next.js App Router)
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import BannerPages from "@/app/components/bannerPages/BannerPages";
import { useInView } from "react-intersection-observer";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaClock,
  // FaLinkedin,
  // FaTwitter,
  FaInstagram,
  FaFacebookF,
  FaCheckCircle,
  FaPaperPlane,
  FaTimes,
} from "react-icons/fa";

const ContactPage = () => {
  const [sectionRef, sectionInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState<boolean | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing again
    setFormErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validateForm = () => {
    const errors = { name: "", email: "", subject: "", message: "" };
    let isValid = true;

    if (!formData.name.trim()) {
      errors.name = "O nome é obrigatório.";
      isValid = false;
    }
    if (!formData.email.trim()) {
      errors.email = "O email é obrigatório.";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email inválido.";
      isValid = false;
    }
    if (!formData.subject.trim()) {
      errors.subject = "O assunto é obrigatório.";
      isValid = false;
    }
    if (!formData.message.trim()) {
      errors.message = "A mensagem é obrigatória.";
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitSuccess(null); // Resetar o status de sucesso/falha

    if (!validateForm()) {
      return; // Se a validação falhar, não prossegue
    }

    setIsSubmitting(true);

    // Simulação de envio de formulário (substitua por sua lógica de backend)
    try {
      console.log("Dados do formulário:", formData);
      // Aqui você faria uma requisição POST para sua API, por exemplo:
      // await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData),
      // });
      await new Promise((resolve) => setTimeout(resolve, 2000)); // Simula delay de rede

      setSubmitSuccess(true);
      setFormData({ name: "", email: "", subject: "", message: "" }); // Limpa o formulário
    } catch (error) {
      console.error("Erro ao enviar formulário:", error);
      setSubmitSuccess(false);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Framer Motion Variants
  const itemVariants = {
    hidden: { y: 20, opacity: 0, scale: 0.95 },
    visible: { y: 0, opacity: 1, scale: 1 },
  };

  return (
    <section
      className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-200 dark:from-gray-900 dark:to-gray-800"
      aria-label="Página de Contato"
    >
      <BannerPages
        title="Contato"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Contato", active: true },
        ]}
      />
      {/* Background animado (reutilizado) */}
      <div className="absolute inset-0 z-0">
        <svg
          className="h-full w-full opacity-10 dark:opacity-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1000 1000"
        >
          <defs>
            <radialGradient
              id="grad1"
              cx="50%"
              cy="50%"
              r="50%"
              fx="50%"
              fy="50%"
            >
              <stop offset="0%" stopColor="#81E6D9" />
              <stop offset="100%" stopColor="transparent" />
            </radialGradient>
            <radialGradient
              id="grad2"
              cx="50%"
              cy="50%"
              r="50%"
              fx="50%"
              fy="50%"
            >
              <stop offset="0%" stopColor="#667EEA" />
              <stop offset="100%" stopColor="transparent" />
            </radialGradient>
          </defs>
          <motion.circle
            cx="200"
            cy="200"
            r="150"
            fill="url(#grad1)"
            animate={{ x: [0, 50, 0], y: [0, -30, 0] }}
            transition={{
              duration: 10,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
          <motion.circle
            cx="800"
            cy="700"
            r="200"
            fill="url(#grad2)"
            animate={{ x: [0, -50, 0], y: [0, 40, 0] }}
            transition={{
              duration: 12,
              repeat: Infinity,
              repeatType: "reverse",
              delay: 2,
            }}
          />
        </svg>
      </div>

      <div className="relative z-10 container mx-auto px-4">
        {/* Seção Hero/Introdução */}
        <motion.div
          ref={sectionRef}
          initial="hidden"
          animate={sectionInView ? "visible" : "hidden"}
          variants={itemVariants}
          className="animate-on-scroll fade-in-up mb-12 text-center"
        >
          <h1 className="mt-7 mb-4 text-4xl font-extrabold text-blue-900 md:text-5xl dark:text-white">
            Entre em Contato Conosco
          </h1>
          <p className="animate-on-scroll fade-in-up mx-auto max-w-2xl text-lg text-gray-700 delay-200 dark:text-gray-300">
            Estamos prontos para ouvir suas ideias, responder suas perguntas e
            transformar seus desafios em soluções digitais incríveis.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
          {/* Informações de Contato */}
          <motion.div
            initial="hidden"
            animate={sectionInView ? "visible" : "hidden"}
            variants={itemVariants}
            className="animate-on-scroll fade-in-left bg-white p-8 shadow-xl lg:col-span-1 dark:bg-gray-800"
          >
            <h2 className="mb-6 text-2xl font-bold text-blue-900 dark:text-white">
              Informações de Contato
            </h2>
            <div className="space-y-6">
              <div className="flex items-center">
                <FaEnvelope className="mr-4 h-6 w-6 text-orange-500 dark:text-orange-400" />
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">
                    Email
                  </p>
                  <a
                    href="mailto:mario.fanucchi@hotmail.com"
                    className="text-gray-600 hover:underline dark:text-gray-400"
                  >
                    maravilhasdadeda@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-center">
                <FaPhoneAlt className="mr-4 h-6 w-6 text-orange-500 dark:text-orange-400" />
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">
                    Telefone
                  </p>
                  <a
                    href="tel:+5511992948196"
                    className="text-gray-600 hover:underline dark:text-gray-400"
                  >
                    +55 (11) 99294-8196
                  </a>
                </div>
              </div>
              <div className="flex items-start">
                <FaMapMarkerAlt className="mt-1 mr-4 h-6 w-6 flex-shrink-0 text-orange-500 dark:text-orange-400" />
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">
                    Endereço
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">
                    Rua Dirce, nº 130 <br /> Estância Guatambu <br />
                    Itaquaquecetuba  - SP
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <FaClock className="mr-4 h-6 w-6 text-orange-500 dark:text-orange-400" />
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">
                    Horário de Funcionamento
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">
                    Seg - Sex: 8:00 - 17  :00
                  </p>
                </div>
              </div>
            </div>

            {/* Links Sociais */}
            <h3 className="mt-8 mb-4 text-xl font-bold text-blue-900 dark:text-white">
              Siga-nos
            </h3>
            <div className="flex space-x-4">
              <motion.a
                href="https://www.facebook.com/andreia.aparecida.371517"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, color: "#0A66C2" }}
                whileTap={{ scale: 0.9 }}
                className="text-gray-600 hover:text-orange-500 dark:text-gray-400 dark:hover:text-orange-400"
                aria-label="Facebook"
              >
                <FaFacebookF className="h-8 w-8" />
              </motion.a>
              {/* <motion.a
                href="https://twitter.com/suaempresa"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, color: "#1DA1F2" }}
                whileTap={{ scale: 0.9 }}
                className="text-gray-600 hover:text-orange-500 dark:text-gray-400 dark:hover:text-orange-400"
                aria-label="Twitter"
              >
                <FaTwitter className="h-8 w-8" />
              </motion.a> */}
              <motion.a
                href="https://instagram.com/suaempresa"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, color: "#E1306C" }}
                whileTap={{ scale: 0.9 }}
                className="text-gray-600 hover:text-orange-500 dark:text-gray-400 dark:hover:text-orange-400"
                aria-label="Instagram"
              >
                <FaInstagram className="h-8 w-8" />
              </motion.a>
            </div>
          </motion.div>

          {/* Formulário de Contato */}
          <motion.div
            initial="hidden"
            animate={sectionInView ? "visible" : "hidden"}
            variants={itemVariants}
            className="animate-on-scroll fade-in-right bg-white p-8 shadow-xl lg:col-span-2 dark:bg-gray-800"
          >
            <h2 className="mb-6 text-2xl font-bold text-blue-900 dark:text-white">
              Envie-nos uma Mensagem
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Nome Completo
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="block w-full border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                  placeholder="Seu nome"
                  required
                />
                {formErrors.name && (
                  <p className="mt-1 text-sm text-red-600">{formErrors.name}</p>
                )}
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="block w-full border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                  placeholder="seu@email.com"
                  required
                />
                {formErrors.email && (
                  <p className="mt-1 text-sm text-red-600">
                    {formErrors.email}
                  </p>
                )}
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Assunto
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="block w-full border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                  placeholder="Assunto da sua mensagem"
                  required
                />
                {formErrors.subject && (
                  <p className="mt-1 text-sm text-red-600">
                    {formErrors.subject}
                  </p>
                )}
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="block w-full border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                  placeholder="Sua mensagem..."
                  required
                ></textarea>
                {formErrors.message && (
                  <p className="mt-1 text-sm text-red-600">
                    {formErrors.message}
                  </p>
                )}
              </div>

              {submitSuccess === true && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center text-green-600 dark:text-green-400"
                >
                  <FaCheckCircle className="mr-2" /> Sua mensagem foi enviada
                  com sucesso!
                </motion.p>
              )}
              {submitSuccess === false && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center text-red-600 dark:text-red-400"
                >
                  <FaTimes className="mr-2" /> Houve um erro ao enviar sua
                  mensagem. Tente novamente.
                </motion.p>
              )}

              <motion.button
                type="submit"
                className={`inline-flex w-full items-center justify-center border border-transparent px-6 py-3 text-base font-medium text-white shadow-sm transition-all duration-300 sm:w-auto ${
                  isSubmitting
                    ? "cursor-not-allowed bg-orange-400 dark:bg-orange-600"
                    : "bg-blue-900 hover:bg-blue-800 focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:outline-none dark:bg-blue-800 dark:hover:bg-blue-900"
                }`}
                whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    Enviando...
                    <FaPaperPlane className="ml-2 animate-pulse" />
                  </>
                ) : (
                  <>
                    Enviar Mensagem <FaPaperPlane className="ml-2" />
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Seção do Mapa */}
        <motion.div
          initial="hidden"
          animate={sectionInView ? "visible" : "hidden"}
          variants={itemVariants}
          className="animate-on-scroll fade-in-up mt-16 bg-white p-8 shadow-xl delay-300 dark:bg-gray-800"
        >
          <h2 className="mb-6 text-2xl font-bold text-blue-900 dark:text-white">
            Onde Estamos Localizados
          </h2>
          <div className="relative h-96 overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3660.518652834921!2d-46.31457687397267!3d-23.441749057210103!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce7c4ebc17da15%3A0x4562eb5efa17519f!2sR.%20Dirce%20-%20Est%C3%A2ncia%20Guatambu%2C%20Itaquaquecetuba%20-%20SP%2C%2008588-720!5e0!3m2!1spt-BR!2sbr!4v1751011168070!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização da Empresa no Google Maps"
              className="absolute inset-0"
            ></iframe>
          </div>
        </motion.div>

        {/* Seção de FAQ (Opcional) */}
        <motion.div
          initial="hidden"
          animate={sectionInView ? "visible" : "hidden"}
          variants={itemVariants}
          className="animate-on-scroll fade-in-up mt-16 mb-8 bg-white p-8 shadow-xl delay-400 dark:bg-gray-800"
        >
          <h2 className="mb-6 text-2xl font-bold text-blue-900 dark:text-white">
            Perguntas Frequentes
          </h2>
          <div className="space-y-4">
            <details className="animate-on-scroll fade-in-up bg-gray-100 p-4 delay-100 dark:bg-gray-700">
              <summary className="cursor-pointer font-semibold text-gray-900 dark:text-white">
                Qual o tempo de resposta do contato?
              </summary>
              <p className="mt-2 text-gray-700 dark:text-gray-300">
                Aqui na Garagem Oficina, prezamos por um contato ágil e direto com o Mario. Nosso objetivo é responder sua mensagem em até 24 horas úteis. Para assuntos mais urgentes ou se preferir uma conversa rápida, sinta-se à vontade para ligar ou nos chamar no WhatsApp. Sua dúvida é importante para nós!
              </p>
            </details>
            <details className="animate-on-scroll fade-in-up bg-gray-100 p-4 delay-200 dark:bg-gray-700">
              <summary className="cursor-pointer font-semibold text-gray-900 dark:text-white">
                A Garagem Oficina oferece uma avaliação inicial gratuita?
              </summary>
              <p className="mt-2 text-gray-700 dark:text-gray-300">
                Com certeza! O Mario Fanucchi acredita que o primeiro passo é entender bem o que seu carro precisa. Por isso, oferecemos uma conversa inicial sem custo para avaliarmos suas necessidades e discutirmos as melhores e mais honestas soluções para o seu veículo, sempre com a transparência que é a marca da Garagem Oficina.
              </p>
            </details>
            <details className="animate-on-scroll fade-in-up bg-gray-100 p-4 delay-300 dark:bg-gray-700">
              <summary className="cursor-pointer font-semibold text-gray-900 dark:text-white">
                Posso agendar uma visita ou serviço presencial com o Mario?
              </summary>
              <p className="mt-2 text-gray-700 dark:text-gray-300">
                Claro! O Mario Fanucchi terá prazer em recebê-lo na Garagem Oficina. Para garantir que ele possa dedicar atenção total ao seu carro e às suas dúvidas, nosso atendimento presencial é feito com agendamento prévio. Entre em contato para verificarmos o melhor horário para você!
              </p>
            </details>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactPage;
