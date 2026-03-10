const PROD_API_HOST = "https://mini-dms.onrender.com"; // ganti dengan URL backend publikmu
const LOCAL_API_HOST = "http://localhost:3000";

const API_BASE =
  window.location.hostname.endsWith("github.io") ||
  window.location.hostname === "mini-dms.onrender.com"
    ? PROD_API_HOST
    : LOCAL_API_HOST;

window.API_BASE = API_BASE;

const originalFetch = window.fetch.bind(window);

window.fetch = (input, init) => {
  if (typeof input === "string" && input.startsWith("http://localhost:3000")) {
    input = input.replace("http://localhost:3000", API_BASE);
  }
  return originalFetch(input, init);
};
