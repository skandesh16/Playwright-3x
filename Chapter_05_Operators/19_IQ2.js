let enironment = "Backup";
let baseURL = enironment === "PROD" ? "https://prod.com" : "https://backup.com";
console.log(baseURL);