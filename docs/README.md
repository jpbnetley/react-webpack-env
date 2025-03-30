# Webpack env
The goal of this demonstration is to add env support for webpack.  
This means, when the project is running a dev build, or a production build, the values
that is in an .env file should be accessible by code.

## Demonstration
An `.env` file is added to the root directory of the project.

The values that are added is `name=test`.

When the project starts up, the env name will be displayed on the main page.

### With env file
<image src="./assets/with-env.png">

### With out env file
<image src="./assets/with-out-env.png">

## Caveats
- Webpack config: [path](webpack.config.ts)
```ts
new Dotenv({
      /** 
       * prefix: 'import.meta.env.' 
       * import.meta.env does not get stubbed if the .env file is not present.
       * Throws cannot read undefined of meta (import.meta.env.name) [env is undefined in production build]
       * Looks like it was decided not to stub prefix
       * https://github.com/mrsteele/dotenv-webpack/pull/482#discussion_r775382798
       * 
       * also, process.env cannot be optional chained 'process.env?.name' 
       * if optional chain is used, the name is always undefined
      */
    })
```