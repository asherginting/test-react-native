const imageLocalHosts = img => {
    const splitImg = img.split('5000');
    return `http://192.168.247.222:5000${splitImg[1]}`;
  };
  
  export default imageLocalHosts;
  