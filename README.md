
# Node package manager benchmark

This benchmark compares the performance of [npm](https://github.com/npm/npm), [pnpm](https://github.com/rstacruz/pnpm) and [yarn](https://github.com/yarnpkg/yarn).

| command | time in ms | size in bytes |
| --- | --- | --- |
| npm install babel-cli | 34055 | 13722902 |
| yarn add babel-cli | 6986 | 17895510 |
| pnpm install babel-cli | 5590 | 8690808 |
