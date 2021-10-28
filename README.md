This project is to replicate the issue with `xo@0.46.3`. This is prominently a
bug of `typescript-eslint`. It seems that it requires that the project is built
before any linting is done.

There are four directories for the two versions of `typescript-eslint` and
either `eslint` or `xo`. `src` and `test` are the same in all the directories.

To run the tests, first install all the dependencies. I will use `pnpm` here,
but the package manager should not matter. Running `pnpm recursive install` will
install all the directories.

Next, to lint `src`, run the `lint:src` script in all the directories.
`pnpm recursive run lint:src`. All the directories should lint with no failures.

Finally, to lint `test`, run the `lint:test` script in all the directories.
`pnpm recursive run lint:test --no-bail`. Only
`xo-0.45-with-typescript-eslint-4` should pass. Others are affected by the bug.
