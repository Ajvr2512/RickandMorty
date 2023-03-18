export const Random = (min, max) => {
  const amplitud = max - min;
  const ampRamdon = Math.random() * amplitud;
  return min + Math.round(ampRamdon);
};
