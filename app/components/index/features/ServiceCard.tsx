import { AnimatedElement } from "../../../styles/AnimatedElement";

interface ServiceCardProps {
  title: string;
  description: string;
  animation: string;
  delay: string;
}

const ServiceCard = ({
  title,
  description,
  animation,
  delay,
}: ServiceCardProps) => {
  return (
    <AnimatedElement
      animationClass={animation}
      delayClass={delay}
      durationClass="duration-500"
      className="transform-gpu rounded-lg bg-white p-6 shadow-lg"
    >
      <h3 className="mb-3 text-xl font-semibold">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </AnimatedElement>
  );
};

export default ServiceCard;
