export const hashtags = (text) => {
  return text.match(/#\S+/gi)
}

// https://www.ntu.edu.sg/home/ehchua/programming/howto/Regexe.html