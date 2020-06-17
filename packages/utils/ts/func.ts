const generateElement = (element: string, className?: string): HTMLElement => {
  const ele =  document.createElement(element);
  // tslint:disable-next-line:no-unused-expression
  className && (
    ele.className = className
  );
  return ele;
};

export {
  generateElement,
};
