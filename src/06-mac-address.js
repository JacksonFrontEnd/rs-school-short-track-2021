function isMAC48Address(n) {
  const regular = /(?=.*[-])(?=.*[A-F])[A-F-]{17,}/g;
  const regular2 = /(?=.*[0-9])(?=.*[-])(?=.*[A-F])[0-9A-F-]{17,}/g;
  return (regular.test(n) || regular2.test(n));
}

module.exports = isMAC48Address;
