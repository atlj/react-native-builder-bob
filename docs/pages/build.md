# Build a React Native library

When code is in non-standard syntaxes such as JSX, TypeScript etc, it needs to be compiled before it can run. Configuring this manually can be error-prone and annoying. `react-native-builder-bob` aims to simplify this process by wrapping `babel` and `tsc` and taking care of the configuration. See [this section](./faq.md#why-should-i-compile-my-project-with-react-native-builder-bob) for a longer explanation.

Supported targets are:

- Generic CommonJS build
- ES modules build for bundlers such as [webpack](https://webpack.js.org)
- [TypeScript](https://www.typescriptlang.org/) definitions
- Flow definitions (copies .js files to .flow files)

If you created a project with [`create-react-native-library`](./create.md), `react-native-builder-bob` is **already pre-configured to build your project**. You don't need to configure it again.

The following configuration steps are for projects not created with `create-react-native-library`.

## Automatic configuration

To automatically configure your project to use `react-native-builder-bob`, open a Terminal and run:

```js
npx react-native-builder-bob@latest init
```

This will ask you a few questions and add the required configuration and scripts for building the code. The code will be compiled automatically when the package is published.

You can find details on what exactly it adds in the [Manual configuration](#manual-configuration) section.

## Manual configuration

To configure your project manually, follow these steps:

1. First, install `react-native-builder-bob` in your project. Open a Terminal in your project, and run:

```sh
yarn add --dev react-native-builder-bob
```

1. In your `package.json`, specify the targets to build for:

   ```json
   "react-native-builder-bob": {
     "source": "src",
     "output": "lib",
     "targets": [
       "commonjs",
       "module",
       "typescript",
     ]
   }
   ```

   See the [Options](#options) section for more details.

1. Add `bob` to your `prepare` or `prepack` step:

   ```js
   "scripts": {
     "prepare": "bob build"
   }
   ```

   Note that there is a difference between `prepare` and `prepack` scripts:

   - `prepare` is run when the package is published, as well as when its is installed from a git URL. It may also run when dependencies are installed based on the package manager.
   - `prepack` only runs when the package is packed for publishing.

   If you are not sure which one to use, we recommend going with `prepare`.

1. Configure the appropriate entry points:

   ```json
   "main": "lib/commonjs/index.js",
   "module": "lib/module/index.js",
   "react-native": "src/index.ts",
   "types": "lib/typescript/src/index.d.ts",
   "source": "src/index.ts",
   "files": [
     "lib",
     "src"
   ]
   ```

   Here is what each of these fields mean:

   - `main`: The entry point for the commonjs build. This is used by Node - such as tests, SSR etc.
   - `module`: The entry point for the ES module build. This is used by bundlers such as webpack.
   - `react-native`: The entry point for the React Native apps. This is used by Metro. It's common to point to the source code here as it can make debugging easier.
   - `types`: The entry point for the TypeScript definitions. This is used by TypeScript to type check the code using your library.
   - `source`: The path to the source code. It is used by `react-native-builder-bob` to detect the correct output files and provide better error messages.
   - `files`: The files to include in the package when publishing with `npm`.

   Make sure to change specify correct files according to the targets you have enabled.

   **NOTE**: If you're building TypeScript definition files, also make sure that the `types` field points to a correct path. Depending on the project configuration, the path can be different for you than the example snippet (e.g. `lib/typescript/index.d.ts` if you have only the `src` directory and `rootDir` is not set).

1. Add the output directory to `.gitignore` and `.eslintignore`

   ```gitignore
   # generated files by bob
   lib/
   ```

   This makes sure that you don't accidentally commit the generated files to git or get lint errors for them.

1. Add the output directory to `jest.modulePathIgnorePatterns` if you use [Jest](https://jestjs.io)

   ```json
   "modulePathIgnorePatterns": ["<rootDir>/lib/"]
   ```

   This makes sure that Jest doesn't try to run the tests in the generated files.

And we're done 🎉

## Options

The options can be specified in the `package.json` file under the `react-native-builder-bob` property, or in a `bob.config.js` file in your project directory.

### `source`

The name of the folder with the source code which should be compiled. The folder should include an `index` file.

### `output`

The name of the folder where the compiled files should be output to. It will contain separate folder for each target.

### `exclude`

Glob pattern to be used while filtering the unnecessary files. Defaults to `'**/{__tests__,__fixtures__,__mocks__}/**'` if not specified.

Example:

```json
{
  "exclude": "ignore_me/**"
}
```

> This option only works with `commonjs` and `module` targets. To exclude files while building `typescript`, please see [the tsconfig exclude field](https://www.typescriptlang.org/tsconfig#exclude).

### `targets`

Various targets to build for. The available targets are:

#### `commonjs`

Enable compiling source files with Babel and use commonjs module system.

This is useful for running the code in Node (SSR, tests etc.). The output file should be referenced in the `main` field of `package.json`.

By default, the code is compiled to support last 2 versions of modern browsers. It also strips TypeScript and Flow annotations, and compiles JSX. You can customize the environments to compile for by using a [browserslist config](https://github.com/browserslist/browserslist#config-file).

In addition, the following options are supported:

- `configFile` & `babelrc` (`boolean`): To customize the babel config used, you can pass the [`configFile`](https://babeljs.io/docs/en/options#configfile) option as `true` if you have a `babel.config.js` or [`babelrc`](https://babeljs.io/docs/en/options#babelrc) option if you have a `.babelrc`. This may break the default configuration, so use these options only if you know what you're doing.

- `copyFlow` (`boolean`): If your source code is written in [Flow](http://www.typescriptlang.org/), You can specify the `copyFlow` option to copy the source files as `.js.flow` to the output folder. If the `main` entry in `package.json` points to the `index` file in the output folder, the flow type checker will pick these files up to use for type definitions.

- `sourceMaps` (`boolean`): Sourcemaps are generated by default alongside the compiled files. You can disable them by setting the `sourceMaps` option to `false`.

Example:

```json
["commonjs", { "configFile": true, "copyFlow": true }]
```

#### `module`

Enable compiling source files with Babel and use ES module system. This is essentially same as the `commonjs` target and accepts the same options, but leaves the `import`/`export` statements in your code.

This is useful for bundlers which understand ES modules and can tree-shake. The output file should be referenced in the `module` field of `package.json`.

Example:

```json
["module", { "configFile": true }]
```

#### `typescript`

Enable generating type definitions with `tsc` if your source code is written in [TypeScript](http://www.typescriptlang.org/).

The following options are supported:

- `project` (`string`): By default, the `tsconfig.json` file in the root of your project is used to generate the type definitions. You can specify a path to a different config by using the `project` option. This can be useful if you need to use different configs for development and production.

- `tsc` (`string`): The path to the `tsc` binary is automatically detected and defaults to the one installed in your project. You can use the `tsc` option to specify a different path.

Example:

```json
["typescript", { "project": "tsconfig.build.json" }]
```

## Commands

The `bob` CLI exposes the following commands:

### `init`

This configures an existing project to use `bob` by adding the required configuration and dependencies. This is usually run with `npx`:

```sh
npx react-native-builder-bob@latest init
```

### `build`

This builds the project according to the configuration. This is usually run as part of the package's publishing flow, i.e. in the `prepare` or `prepack` scripts.

```json
"scripts": {
  "prepare": "bob build"
}
```

![Demo](../assets/react-native-builder-bob.svg)
