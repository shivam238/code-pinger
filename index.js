const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;

// Jisko ping karna hai
const TARGET_URL =
  "https://df9b3cfc-63c7-44e9-9d01-d578b3edf36b-00-3povtv8b6u5ki.sisko.replit.dev/ping";


// Apna health endpoint
app.get("/", (req, res) => {
  res.send("Pinger is running 🚀");
});


// Ping function
async function pingServer() {
  try {
    const response = await fetch(TARGET_URL);

    console.log(
      "Ping success:",
      response.status,
      new Date().toLocaleString()
    );

  } catch (error) {
    console.log(
      "Ping failed:",
      error.message,
      new Date().toLocaleString()
    );
  }
}


// Har 5 minute me ping
setInterval(() => {
  pingServer();
}, 5 * 60 * 1000);


// Start hote hi ping
pingServer();


// Server start
app.listen(PORT, () => {
  console.log(`Pinger running on port ${PORT}`);
});