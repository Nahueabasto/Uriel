import app from "./src/app.js";
import { connectDB } from "./src/db.js";

const port = process.env.PORT || 3000;

connectDB();

app.listen(port, () => {
  console.log(`server on pory ${port}`);
});
