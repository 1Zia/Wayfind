import http from "http";

http.get("http://localhost:3000/videos/hero-bg.mp4", (res) => {
  console.log("Status Code:", res.statusCode);
  console.log("Headers:", res.headers);
  process.exit(0);
}).on("error", (err) => {
  console.error("Error:", err.message);
  process.exit(1);
});
