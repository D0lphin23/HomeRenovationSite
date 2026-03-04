const slider = ({
  container,
  viewport,
  wrapper,
  items,
  visibleCount = 1,
  timeInterval = 3000,
  nextBtn = null,
  prevBtn = null,
}) => {
  // Если viewport не передан — берём родителя wrapper как fallback
  const vp = viewport || wrapper.parentElement;

  // Настраиваем базовые стили
  vp.style.overflow = "hidden";
  wrapper.style.display = "flex";
  let isAnimating = false;
  let interval;

  // Вычисляем ширину одного слайда в пикселях по размеру viewport
  const getItemWidth = () => vp.offsetWidth / visibleCount;

  // Устанавливаем фиксированную ширину каждому слайду и враперу
  const setItemWidths = () => {
    const itemWidth = getItemWidth();
    items.forEach((item) => {
      item.style.flex = `0 0 ${itemWidth}px`;
      item.style.maxWidth = `${itemWidth}px`;
    });
    wrapper.style.width = `${items.length * itemWidth}px`;
    wrapper.style.transform = "translateX(0)";
  };

  setItemWidths();

  // Мгновенно (без анимации) устанавливает transform, затем восстанавливает transition
  const snapTo = (px) => {
    wrapper.style.transition = "none";
    wrapper.style.transform = `translateX(${px}px)`;
    void wrapper.offsetWidth; // принудительный reflow
    wrapper.style.transition = "transform 0.5s ease";
  };

  // Прокрутка вперёд: анимируем сдвиг, затем DOM-ротация без анимации
  const moveNext = () => {
    if (isAnimating) return;
    isAnimating = true;

    const itemWidth = getItemWidth();
    wrapper.style.transition = "transform 0.5s ease";
    wrapper.style.transform = `translateX(-${itemWidth}px)`;

    wrapper.addEventListener("transitionend", function handler() {
      wrapper.removeEventListener("transitionend", handler);
      wrapper.appendChild(wrapper.firstElementChild); // ротация DOM
      snapTo(0);
      isAnimating = false;
    });
  };

  // Прокрутка назад: DOM-ротация без анимации, затем анимированный возврат к 0
  const movePrev = () => {
    if (isAnimating) return;
    isAnimating = true;

    const itemWidth = getItemWidth();
    wrapper.insertBefore(wrapper.lastElementChild, wrapper.firstElementChild); // ротация DOM
    snapTo(-itemWidth); // мгновенно ставим за левый край
    wrapper.style.transform = "translateX(0)"; // анимируем появление справа налево

    wrapper.addEventListener("transitionend", function handler() {
      wrapper.removeEventListener("transitionend", handler);
      isAnimating = false;
    });
  };

  if (nextBtn) nextBtn.addEventListener("click", moveNext);
  if (prevBtn) prevBtn.addEventListener("click", movePrev);

  const startAutoSlide = () => {
    interval = setInterval(moveNext, timeInterval);
  };

  const stopAutoSlide = () => {
    clearInterval(interval);
  };

  if (container) {
    container.addEventListener("mouseenter", stopAutoSlide);
    container.addEventListener("mouseleave", startAutoSlide);
  }

  startAutoSlide();

  window.addEventListener("resize", setItemWidths);
};

export default slider;
