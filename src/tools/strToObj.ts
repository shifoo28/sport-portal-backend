export const strToObj = (obj: any): object => {
  return obj ? JSON.parse(obj) : {};
};
