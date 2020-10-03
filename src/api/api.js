import  axios from 'axios'


 const token = process.env.REACT_APP_API_KEY;

/* const instance = axios.create({
  baseURL: "https://cloud.iexapis.com/stable/tops?token=",
}); */




export const searchAPI = {
  fetchData() {
    return axios.get(`${token}`).then((response) => response.data)
  }
}







