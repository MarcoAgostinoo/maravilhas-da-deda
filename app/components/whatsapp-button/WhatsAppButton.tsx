import { FaWhatsapp } from 'react-icons/fa';

export const WhatsAppButton = () => {
  const phoneNumber = "5511997032814"; // Substitua pelo número desejado
  const message = "Olá! Gostaria de mais informações.";

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-50"
      aria-label="Contato via WhatsApp"
    >
      <FaWhatsapp className="w-6 h-6" />
    </a>
  );
}; 