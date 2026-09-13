let responseTime = 200; //ms
let sla = 2000; // Service Level Agreement
let slaStatus = responseTime <= sla ? "within SLA" : "SLA Breached";
console.log(`Response : ${responseTime}ms - ${slaStatus}`);
// Tempate Litral
// ${var} syntax

console.log(`what is the sla time? - ${sla}ms`);
console.log(`What is the response time? ${responseTime} ms`);

