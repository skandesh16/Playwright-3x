// In Playwright, you can measure how long each test takes. Write a nested ternary that classifies test performance based on execution time in milliseconds:
// duration < 500          → 'Excellent - Fast Test'
// duration >= 500 && < 1000  → 'Good - Acceptable Speed'
// duration >= 1000 && < 3000 → 'Slow - Needs Optimization'
// duration >= 3000 && < 5000 → 'Very Slow - Refactor Required'
// duration >= 5000        → 'Timeout Risk - Critical Issue'

let duration = 2500;
let perstatus = duration < 500 ? 'Excellent - Fast Test'
              : duration < 1000 ? 'Good - Acceptable Speed'
              : duration < 3000 ? 'Slow - Needs Optimization'
              : duration < 5000 ? 'Very Slow - Refactor Required'
              : 'Timeout Risk - Critical Issue';
console.log(`Test Perfomance : ${perstatus} - Duration: ${duration}ms`);
