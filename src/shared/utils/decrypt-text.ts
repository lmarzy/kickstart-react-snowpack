export const decryptText = (cipherText, shift) => {
  const plainArr = [];
  let plainLetter;

  cipherText.split('').map((cipher) => {
    const code = cipher.charCodeAt(cipher);
    if (cipher === ' ') {
      return plainArr.push(cipher);
    }
    // Uppercase letters
    if (code >= 65 && code <= 90) {
      const diff = code - 65 - shift;
      if (diff >= 0) {
        plainLetter = String.fromCharCode((diff % 26) + 65);
      } else {
        plainLetter = String.fromCharCode(((26 + diff) % 26) + 65);
      }
    }
    // Lowercase letters
    else if (code >= 97 && code <= 122) {
      const diff = code - 97 - shift;
      if (diff >= 0) {
        plainLetter = String.fromCharCode((diff % 26) + 97);
      } else {
        plainLetter = String.fromCharCode(((26 + diff) % 26) + 97);
      }
    }
    return plainArr.push(plainLetter);
  });
  return plainArr.join('');
};
