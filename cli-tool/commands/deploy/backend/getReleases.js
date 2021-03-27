const axios = require('axios');
const backendRegex = /^(backend).+/;

module.exports = () => {
  return axios.get('https://api.github.com/repos/rajaganapathy2000/gindex-v4/releases').then(resp => {
    const result = resp.data.filter(releases =>{
      return backendRegex.test(releases.tag_name);
    })[0]
    return result
  })
}
