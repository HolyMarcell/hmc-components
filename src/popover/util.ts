export const placementMapper = (position) => {
  return position
    .replace('-left', '-start')
    .replace('-right', '-end');
};