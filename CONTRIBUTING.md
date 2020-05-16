# Contributing to Hocus Pocus

First of all, we'd like to thank you for taking some of your time to contribute to the project. You're awesome 🤠👍

Architecture decisions for this project [are documented here][adrs], using the [Architecture Decision Records (ADR)][adrs-pattern] pattern.

## Table of Contents

- [Getting started](#getting-started)
- [Run the tests](#run-the-tests)
  - [About tests](#about-tests)
- [Useful resources to start changing the code](#useful-resources-to-start-changing-the-code)
- [Code Style](#code-style)
  - [Structure of TS files](#structure-of-ts-files)
- [Debug locally](#debug-locally)
- [Create a package and use it](#create-a-package-and-use-it)
- [Open a PR and add acknowledge your contribution](#open-a-pr-and-add-acknowledge-your-contribution)

## Getting started

> Pre-requisite: you have installed [git][install-git], [node][install-node] and [yarn][install-yarn].

1. Clone the repo: `git clone git@github.com:nicoespeon/hocus-pocus.git`
1. Go into the cloned repository: `cd hocus-pocus`
1. Install dependencies: `yarn install`

The project uses [TypeScript][typescript], [Jest][jest] for the tests and [Prettier][prettier] for the formatting.

## Run the tests

You can run tests with `yarn test`.

To run tests in watch mode, use `yarn test --watch`.

We use [Jest][jest] under the hood, so you can pass any valid Jest command to `yarn test`.

### About tests

In short, most of our tests are unit tests. We test business logic in isolation from VS Code API.

We don't have VS Code integration tests. [We've documented why in this ADR][adr-no-integration-tests].

## Useful resources to start changing the code

- [VS Code Extension API documentation][vscode-extension-docs] is a good start
- [AST Explorer][ast-explorer] is a very handy tool to explore the AST. Use `babylon-7` parser.

## Code Style

Style formatting is managed by [Prettier][prettier]. It runs as a pre-commit hook, so you shouldn't have to worry about it 👐

There are a few conventions that we'd like to keep consistent and are not automatically enforced yet.

### Structure of TS files

We structure TS files like this:

```ts
// 1. Imports from external libs
import { parse } from "@babel/parser";

// 2. Imports from local files
import { Selection } from "./selection";
import { Position } from "./position";

// 3. Exports
export { isStringLiteral, isClassDeclaration };
export { StringLiteral };

// 4. Rest of the code
function isStringLiteral() {
  // …
}
```

As a general rule, we prefer to have **what is exposed appear before what is private**. That's why we list the exports at the top of the file. We find it simpler to see what is exposed from a file, so it's easier to decide if that's too much and we should split.

## Debug locally

You can use [VS Code's built-in debugger][vscode-debug-extension] on the project to test the extension.

It will open an "Extension Development Host" window, overriding your "Hocus Pocus" extension with your local code. This is helpful to test your changes in integration with VS Code API.

## Create a package and use it

To create a package from your local code, run `yarn package`.

When it's done, run `yarn package:install` to install this new version instead of the one you had.

This allows you to use the package before it's published to the MarketPlace.

## Open a PR and add acknowledge your contribution

You can open a Pull-Request at any time. It can even be a draft if you need to ask for guidance and help. Actually, we'd be pretty happy to assist you going in the best direction!

Once everything is ready, open a Pull-Request (if it's not already done) and ask for a review. We'll do our best to review it asap.

Finally, [use all-contributors bot command][all-contributors-bot-command] to add yourself to the list of contributors. It's very easy to do, you basically need to mention the bot in a comment of your PR.

Whether it's code, design, typo or documentation, every contribution is welcomed! So again, thank you very, very much 🧙‍

<!-- Links -->

[jest]: https://jestjs.io/
[typescript]: https://www.typescriptlang.org/
[prettier]: https://prettier.io
[ast-explorer]: https://astexplorer.net/
[adrs-pattern]: http://thinkrelevance.com/blog/2011/11/15/documenting-architecture-decisions
[install-git]: https://git-scm.com/book/en/v2/Getting-Started-Installing-Git
[install-node]: https://nodejs.org/en/download/
[install-yarn]: https://yarnpkg.com/lang/en/docs/install/
[vscode-extension-docs]: https://code.visualstudio.com/api
[vscode-debug-extension]: https://code.visualstudio.com/api/get-started/your-first-extension#debugging-the-extension
[all-contributors-bot-command]: https://allcontributors.org/docs/en/bot/usage#all-contributors-add

<!-- Repo links -->

[adrs]: https://github.com/nicoespeon/hocus-pocus/blob/master/adrs
[adr-no-integration-tests]: https://github.com/nicoespeon/hocus-pocus/blob/master/adrs/0002-no-integration-test.md
