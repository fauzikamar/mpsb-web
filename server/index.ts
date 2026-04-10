import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Determine static files path
const staticPath = path.resolve(__dirname, "public");

// Serve static files
app.use(express.static(staticPath, { maxAge: "1d" }));

// Handle client-side routing - serve index.html for all non-API routes
app.get("*", (_req, res) => {
  const indexPath = path.join(staticPath, "index.html");
  
  if (fs.existsSync(indexPath)) {
    res.sendFile(indexPath);
  } else {
    res.status(404).send("index.html not found");
  }
});

const port = process.env.PORT || 3000;

app.listen(port, "0.0.0.0", () => {
  console.log(`Server running on port ${port}`);
});
