
export const dragElement = (
    target: HTMLDivElement,
    btn: any,
    color: HTMLSpanElement,
    tooltip: HTMLSpanElement) => {


  target.addEventListener('mousedown', (e: any) => {
      onMouseMove(e);
      window.addEventListener('mousemove', onMouseMove);
      window.addEventListener('mouseup', onMouseUp);
  });

  const onMouseMove = (e: any) => {
      e.preventDefault();
      const targetRect = target.getBoundingClientRect();
      let x = e.pageX - targetRect.left + 10;
      if (x > targetRect.width) { x = targetRect.width; }
      if (x < 0) { x = 0; }

      btn.x = x - 10;
      btn.style.left = btn.x + 'px';

      // get the position of the button inside the container (%)
      const percentPosition = (btn.x + 10) / targetRect.width * 100;
      // color width = position of button (%)
      color.style.width = percentPosition + '%';

      // move the tooltip when button moves, and show the tooltip
      tooltip.style.left = btn.x - 5 + 'px';
      tooltip.style.opacity = '1';

      // show the percentage in the tooltip
      tooltip.textContent = Math.round(percentPosition) + '%';
  };

  const onMouseUp  = () => {
    window.removeEventListener('mousemove', onMouseMove);
    tooltip.style.opacity = '0';

    btn.addEventListener('mouseover', () => {
      tooltip.style.opacity = '1';
    });
    btn.addEventListener('mouseout', () => {
      tooltip.style.opacity = '0';
    });
  };
};
