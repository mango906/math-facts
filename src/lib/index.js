const randomColor = () => {
   const randomColor = [
      '#D291BC',
      '#C1BBDD',
      '#FF999A',
      '#ADD9FE',
      '#FF6961',
      '#EfC45B'
   ];
   return randomColor[Math.floor(Math.random() * randomColor.length)];
};

const randomNum = () => {
   const num1 = Math.floor(Math.random() * 8) + 2;
   const num2 = Math.floor(Math.random() * 8) + 2;
   return { num1, num2 };
};

export default { randomColor, randomNum };
