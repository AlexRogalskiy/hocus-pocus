# Changelog

All notable changes to the **Hocus Pocus** extension will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [1.7.0] - 2020-11-05

### Added

- Create Switch Cases now handles inferred union types. So now it can infer things like:

```ts
type Actions =
  | { type: "listTokens"; payload: { page: number } }
  | { type: "renameToken"; payload: {} & { id: string } }
  | { type: "removeToken"; payload: {} }
  | { type: "createToken" };

function doSomething(action: Actions) {
  // It will autocomplete with all types!
  switch (action.type) {
  }
}
```

## [1.6.0] - 2020-10-08

### Added

- **(New Feature)** Create Switch Cases

### Changed

- We moved the 🔮 emoji at the end of the Quick Fix title for accessibility. Now you can type the first character of the title to select it with your keyboard!

## [1.5.0] - 2020-05-29

### Changed

- "Create Function" will use the generic type instead of the type literal. The generic is more useful and probably what you'd expect.

```ts
doSomething("hello");

// Used to create 😐
function doSomething(param1: "hello") {}

// Now creates 😃
function doSomething(param1: string) {}
```

### Fixed

- "Create Variable" created a mess when used in some patterns (if, while, for statements). It now works as expected.
- "Create Function" now infers enum types correctly in TS.

## [1.4.0] - 2020-05-21

### Added

- "Create Function" now adds the inferred types when used from TypeScript files

## [1.3.0] - 2020-05-16

### Added

- **(New Feature)** Create Class

## [1.2.1] - 2020-04-04

### Fixed

- "Create Variable" now works well from variable declarations & JSX syntax

## [1.2.0] - 2020-04-04 - I handle async functions 🔮

### Added

- "Create Function" now adds `async` keyword if used with `await`, thanks to @automatensalat

So this code:

```js
const result = await doSomething();
```

Will generate:

```js
async function doSomething() {}
```

## [1.1.0] - 2019-12-22 - I can create variables 🔮

### Added

- **(New Feature)** Create Variable

## [1.0.0] - 2019-12-16 - I can create functions 🔮

### Added

- **(New Feature)** Create Function

<!-- Links -->

[unreleased]: https://github.com/nicoespeon/hocus-pocus/compare/1.7.0...HEAD
[1.7.0]: https://github.com/nicoespeon/hocus-pocus/compare/1.6.0...1.7.0
[1.6.0]: https://github.com/nicoespeon/hocus-pocus/compare/1.5.0...1.6.0
[1.5.0]: https://github.com/nicoespeon/hocus-pocus/compare/1.4.0...1.5.0
[1.4.0]: https://github.com/nicoespeon/hocus-pocus/compare/1.3.0...1.4.0
[1.3.0]: https://github.com/nicoespeon/hocus-pocus/compare/1.2.1...1.3.0
[1.2.1]: https://github.com/nicoespeon/hocus-pocus/compare/1.2.0...1.2.1
[1.2.0]: https://github.com/nicoespeon/hocus-pocus/compare/1.1.0...1.2.0
[1.1.0]: https://github.com/nicoespeon/hocus-pocus/compare/1.0.0...1.1.0
[1.0.0]: https://github.com/nicoespeon/hocus-pocus/compare/5b3d351042d09ea26486598158069bce37b474b7...1.0.0
