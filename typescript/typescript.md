# 安装

```sh
npm i -D typescript ts-loader
// 第三方 loader
npm i -D typescript awesome-typescript-loader
```

# 配置

TypeScript 的配置一般写在项目根目录下的 tsconfig.json 文件中。

tsconfig.json:

```json
{
    "compilerOptions": {
        "module": "commonjs",
        "target": "es5",
        "allowJs": true
    },

    "include": [
        "./src/*"
    ],

    "exclude": [
        "./node_modules"
    ]
}
```

webpack 配置：

```js
module: {
    rules: [
        {
            test: /\.tsx?$/,
            use: {
                loader: 'ts-loader'
            }
        }
    ]
}
```

# TypeScript 中使用第三方库

直接安装的第三方库虽然可以直接引入 ts 文件中，但却没有类型声明，所以要想使用 ts 的静态检查作用于第三方库，就要安装相应的类型声明文件。

```sh
npm install -S @types/lodash
npm install -S @types/vue
```

## 使用 typings

每次手动安装库的声明文件太麻烦，可以使用 typings 这个工具。

```sh
npm i -g typings
```

使用 typings 安装库：

```sh
typings install lodash
typings install vue
```

这样安装文件后会在项目根目录下有一个 typings.json 文件和 typings 目录，其中记录着库的声明文件。

此时需要在 tsconfig.json 文件中添加一条 `typeRoots` 配置。

```json
{
    "compilerOptions": {
        "module": "commonjs",
        "target": "es5",
        "typeRoots": [
            "./node_modules/@type",
            "./typeings/modules"
        ]
    }
}
```
