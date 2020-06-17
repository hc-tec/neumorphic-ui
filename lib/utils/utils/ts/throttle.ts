
const throttle = (
      fn: () => void,
      delay: number,
      atleast: number) => {
  // 函数绑定在 scroll 事件上，当页面滚动时，避免函数被高频触发，
  let timeout: any = null;
  let startTime: any = new Date();
  return () => {
    const curTime: any = new Date();
    clearTimeout(timeout);
    if ((curTime - startTime) >= atleast) {
      fn();
      startTime = curTime;
    } else {
      timeout = setTimeout(fn, delay);
    }
  };
};

export { throttle };

