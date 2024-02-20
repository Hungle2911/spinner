const printWithDelay = (text, delay) => {
  setTimeout(() => {
    process.stdout.write(`\r${text}`);
  }, delay);
};

printWithDelay('|   ', 100);
printWithDelay('/   ', 300);
printWithDelay('-   ', 600);
printWithDelay('\\   ', 900);
printWithDelay('|   ', 1200);
printWithDelay('/   ', 1500);
printWithDelay('-   ', 1800);
printWithDelay('\\   ', 2100);
printWithDelay('|   ', 2400);