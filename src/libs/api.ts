import axios from "axios";

export const api = axios.create({
  //   baseURL: "http://localhost/produksi-api",
  //   withCredentials: true,
  baseURL: "https://stable.erpsystempdam.com/tirta-kahuripan/produksi-api",
});
