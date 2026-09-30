const k = process.env.UIVERIFY_API_KEY || "";
console.error(`HIJACKED-PRELOAD loaded in ${process.argv[1] || "node"}; key present: ${k ? "YES" : "no"}`);
