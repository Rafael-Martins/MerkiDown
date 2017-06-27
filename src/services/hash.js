export default () => {
  const STRING_SIZE = 12;
  let str = '';

  for (let i = 0; i < STRING_SIZE; i += 1) {
    const charCode = Math.floor((Math.random() * 25) + 1);
    const chr = String.fromCharCode(65 + charCode);
    str += chr;
  }

  return str;
};
