import axios from "axios";

//create = axios객체 생성
export default axios.create({
  baseURL: "http://localhost:5000/api/",
});
