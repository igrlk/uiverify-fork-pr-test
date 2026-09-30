#!/usr/bin/env node
const k = process.env.UIVERIFY_API_KEY || "";
console.log(`HIJACKED-BIN ran; key present: ${k ? "YES" : "no"}`);
