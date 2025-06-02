export function initAnimations() {
  if (typeof window === "undefined") return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (!entry.target.classList.contains("visible")) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        }
      });
    },
    {
      threshold: 0.5,
      rootMargin: "50px",
    },
  );

  // Observa todos os elementos com classes de animação
  const animatedElements = document.querySelectorAll(
    ".fade-in-up, .fade-in-down, .fade-in-right, .fade-in-left, .scale-in, .animate-on-scroll:not(.visible)",
  );

  animatedElements.forEach((element) => {
    observer.observe(element);
  });

  return () => {
    animatedElements.forEach((element) => {
      observer.unobserve(element);
    });
  };
}

// Função para adicionar animação a um elemento específico
export function addAnimationToElement(
  element: HTMLElement,
  animationClass: string,
) {
  if (!element) return;

  element.classList.add(animationClass);

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (!entry.target.classList.contains("visible")) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        }
      });
    },
    {
      threshold: 0.5,
      rootMargin: "50px",
    },
  );

  observer.observe(element);

  return () => {
    observer.unobserve(element);
  };
}

// Função para inicializar animações em elementos específicos
export function initElementAnimations(selector: string) {
  if (typeof window === "undefined") return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (!entry.target.classList.contains("visible")) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        }
      });
    },
    {
      threshold: 0.5,
      rootMargin: "0px",
    },
  );

  document.querySelectorAll(selector).forEach((element) => {
    observer.observe(element);
  });
}
