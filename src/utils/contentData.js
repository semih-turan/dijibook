export default function (data) {
  return Object.keys(data).map(key => {
    return {
      keys: key,
      ...data[key],
    };
  });
}
