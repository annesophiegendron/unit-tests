export const hackerSpeak = (words) => {

  const string = words.replace(/a/gi, "4").replace(/e/gi, '3').replace(/i/gi, '1').replace(/o/gi, '0').replace(/s/gi,
    '5').replace(/A/g, "4").replace(/E/g, '3').replace(/I/g, '1').replace(/O/g, '0').replace(/S/g,
      '5')
  return string
}