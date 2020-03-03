
# Hypermodel

Hypermodel is a productivity REPL for your Hyperpack app. It finds, loads, and sets up a database connection so that you're up and ready to work interactively.

You can work locally or use Hypermodel as an administration tool for your app. It's similar in spirit to the Rails console.




## Builtins

The Hyperportal is enriched with productivity builtins, such as:

* `await o(User.findOne())` -- print as a colorful object
* `await t(User.findOne())` -- print as an ANSI table
* `await t1(User.findOne())` -- print as an ASCII table
* `await js(User.findOne())` -- print as JSON

Here's one example:


    > await t(maiden)
    ╔══════════╗
    ║ frontman  ║
    ╟──────────╢
    ║ bruce     ║
    ╚══════════╝


## Technicalities

Hyperportal mounts on top of a Hyperpack app structure:

      ,-------- your app root
    src/
      config/
        database.js   <--- this is a TypeORM configuration file
                           in disguise. it points to our models
                           folder.
      app/
        models/
            user.ts   <--- this is a TypeORM "entity".


It will accept an app root and look for these various bits and pieces to initialize a REPL console.

So, this will initialize and run your portal:

```js
const root = '/path/to/abs/root'
await portal({appdir: path.join(root, 'src')})
```

If you want to use TypeORM in a non-hyperpack project, you only need to adhere to the following structure:

      ,-------- your app root
    src/
      config/
        database.js

And you can have your `database.js` file point to anywhere you like to find your TypeORM entities.