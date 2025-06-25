"use client";
import {
  FaAward,
  FaTools,
  FaHandshake,
  FaCar,
} from "react-icons/fa";
import { useEffect, useState } from "react";
import { ThemeProvider } from "flowbite-react";

const facts = [
  {
    icon: (
      <FaAward className="mb-4 text-4xl text-[#D4AF37] sm:text-5xl md:text-6xl" />
    ),
    value: 25,
    label: "Anos de Dedicação",
  },
  {
    icon: (
      <FaTools className="mb-4 text-4xl text-[#D4AF37] sm:text-5xl md:text-6xl" />
    ),
    value: 10.000,
    label: "Doces Criados",
  },
  {
    icon: (
      <FaHandshake className="mb-4 text-4xl text-[#D4AF37] sm:text-5xl md:text-6xl" />
    ),
    value: 1550,
    label: "Clientes Encantados",
  },
  {
    icon: (
      <FaCar className="mb-4 text-4xl text-[#D4AF37] sm:text-5xl md:text-6xl" />
    ),
    value: 20,
    label: "Eventos por Mês",
  },
];

export default function FactsSection() {
  const [counters, setCounters] = useState(facts.map(() => 0));
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    const element = document.querySelector("#facts-section");
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    let currentStep = 0;
    const interval = setInterval(() => {
      setCounters((prev) =>
        prev.map((_, idx) => {
          const target = facts[idx].value;
          const progress = currentStep / steps;
          const newValue = Math.round(target * progress);
          return Math.min(newValue, target);
        })
      );

      currentStep++;
      if (currentStep >= steps) clearInterval(interval);
    }, stepDuration);

    return () => clearInterval(interval);
  }, [isVisible]);

  return (
    <ThemeProvider>
      <div
        id="facts-section"
        className="flex min-h-[400px] w-full items-center justify-center bg-pink-100 px-4 sm:h-96 sm:px-2 dark:bg-gradient-to-b dark:from-[#4b1d3f] dark:to-[#2b1a28]"
      >
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-4 sm:gap-8">
          {facts.map((fact, idx) => (
            <div
              key={fact.label}
              className="animate-on-scroll fade-in-up hover:scale-105 flex w-full max-w-xs min-w-[200px] flex-1 items-center justify-center border-2 border-[#D4AF37] bg-[#FFF8F0] p-4 text-center shadow-md transition-all sm:w-[calc(50%-1rem)] sm:min-w-[250px] sm:p-8 lg:w-[calc(25%-1.5rem)] dark:border-[#D4AF37] dark:bg-[#3b1f2b]"
            >
              <div className="flex flex-col items-center justify-center">
                {fact.icon}
                <h1 className="mb-2 text-4xl font-bold text-rose-700 sm:text-5xl md:text-6xl dark:text-[#FFD700]">
                  {counters[idx]}
                </h1>
                <span className="text-base font-semibold text-rose-800 sm:text-lg dark:text-[#FFF8F0]">
                  {fact.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </ThemeProvider>
  );
}
