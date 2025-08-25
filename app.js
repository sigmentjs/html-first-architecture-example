import { execSync } from "child_process";

async function ensurePackageInstalled(pkg) {
  try {
    if (import.meta.resolve) {
      await import.meta.resolve(pkg); // Node 20+
    } else {
      await import(pkg); // Fallback for Node 16/18
    }
    console.log(`${pkg} is already installed.`);
  } catch {
    console.log(`${pkg} not found, installing...`);
    execSync(`npm install ${pkg}`, { stdio: "inherit" });
    console.log(`${pkg} installed.`);
  }
}

await ensurePackageInstalled("dotenv");

import express from 'express';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;
const isDev = process.env.NODE_ENV !== 'production';
console.log('NODE_ENV:', JSON.stringify(process.env.NODE_ENV));
console.log(isDev);

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT_DIR = isDev ? 'distdev' : 'dist';
const DIST_DIR = path.join(__dirname, ROOT_DIR);

// Serve static files from the correct directory
app.use(express.static(DIST_DIR));

// Recursive fallback route
app.get('*', (req, res) => {
  const parts = req.path.split('/').filter(Boolean); // e.g. ['about', '1', '2']

  for (let i = parts.length; i >= 0; i--) {
    const subParts = parts.slice(0, i);
    const dirPath = path.join(DIST_DIR, ...subParts);
    const indexFile = path.join(dirPath, 'index.html');

    if (fs.existsSync(indexFile)) {
      return res.sendFile(indexFile);
    }
  }

  // Fallback to root index.html if nothing else matched
  const fallbackIndex = path.join(DIST_DIR, 'index.html');
  if (fs.existsSync(fallbackIndex)) {
    return res.sendFile(fallbackIndex);
  }

  res.status(404).send('Not Found');
});

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT} (${isDev ? 'development' : 'production'})`);
});
