require("dotenv").config({ path: ".env" });
const app = require("./app");

const { db, connectDB } = require("./db");
const { NODE_ENV, PORT } = process.env;

// Imidiately  invoked function expression (IIFE)
(async () => {
  try {
    await connectDB();
    console.log("DB Connection success");
    // await db.sync({ force: NODE_ENV === "development" });
    await db.sync();
    app.listen(PORT, () => {
      console.log("Server is running");
    });
  } catch (error) {
    console.error(error?.message || JSON.stringify(error, null, 2));

    process.exit(1);
  }
})();
