const deps = ["cors", "express"];

const missing = deps.filter((dep) => {
  try {
    require.resolve(dep);
    console.log(`✓ ${dep} terpasang`);
    return false;
  } catch {
    console.error(`✗ ${dep} belum terpasang`);
    return true;
  }
});

if (missing.length) {
  console.error(
    "\nJalankan `npm install` untuk memasang modul yang hilang, lalu ulangi `npm run check-deps`."
  );
  process.exitCode = 1;
} else {
  console.log("\nSemua dependency yang penting sudah terpasang.");
}
