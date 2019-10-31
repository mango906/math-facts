const randomColor = () => {
   const randomColor = ['#173F5F', '#20639B', '#3CAEA3', '#F6D55C', '#ED553B'];
   return randomColor[Math.floor(Math.random() * randomColor.length)];
};

export default { randomColor };
