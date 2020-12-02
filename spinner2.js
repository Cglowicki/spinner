const symbols = "|/-\\|/-\\|/-\\|/-\\|";
let ms = 0;

for (const char in symbols) {
  setTimeout(() => {
    process.stdout.write('\r' + symbols[char]);
    char == symbols.length - 1 && process.stdout.write('\n');
  }, ms);
  ms += 200;
};
