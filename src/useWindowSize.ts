type WindowSize = {
  width: number;
  height: number;
};

export const useWindowSize = (): WindowSize => {
  return { width: 0, height: 0 };
};
