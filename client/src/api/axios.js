import axios from "axios";

const BASE_URL = "http://localhost:5000/api";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4MmM4MGIxM2U0ZTU5Y2E4OTVlM2MwMSIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE3NDgyNzMwMTcsImV4cCI6MTc0ODUzMjIxN30.c2r1Zg_cvRZP1XICVS25Wy9VubtV_-rETENEjDOptR8";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const privateRequest = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${TOKEN}`,
  },
});
