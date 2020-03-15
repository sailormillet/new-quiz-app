export const isPc = () => {
  const userAgent = navigator.userAgent;
  return !/Android|webOS|iPhone|iPod|BlackBerry/i.test(userAgent);
};

export const arrayShuffle = arr => {
  let len = arr.length - 1;
  for (let i = len; i >= 0; i--) {
    var randomIdx = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[randomIdx]] = [arr[randomIdx], arr[i]];
  }
  return arr;
};

export const timeFormat = o => {
  let minute = Math.floor(o / 60);
  let second = o % 60;
  return `${minute < 10 ? '0' + minute : minute}:${
    second < 10 ? '0' + second : second
  }`;
};
