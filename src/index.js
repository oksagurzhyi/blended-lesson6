require("dotenv").config({ path: ".env" });

const { db, connectDB } = require("./db");
const { NODE_ENV } = process.env;

// Imidiately  invoked function expression (IIFE)
(async () => {
  try {
    await connectDB();
    console.log("DB Connection success");
    await db.sync({ force: NODE_ENV === "development" });
  } catch (error) {
    console.error(error?.message || JSON.stringify(error, null, 2));

    process.exit(1);
  }
})();
