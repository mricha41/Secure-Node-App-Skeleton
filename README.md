# Secure-Node-App-Skeleton

A minimal, relatively secure node application skeleton. Security depends on use cases and the underlying certificates. Paths to certificates must be provided via an env.bat file by default if running Windows, otherwise use your library of choice to get those environment variables loaded. The app is served at https://localhost:443 by default. Here is what an env.bat might look like:

```
set NODE_ENV=development
set HOST=localhost
set PORT=443
set KEY=path\to\certs\key.pem
set CERT=path\to\certs\cert.pem
```

Set up also includes minimal Typescript and Vite config with sane defaults. Typescript config is split - meaning client and server code is configured separately. Front end JavaScript code need not be emitted when using Vite (Vite serves assets in the development environment via socket, production and test builds will use Vite-built code and assets from the /dist folder by default), so config reflects this. Back end code is compiled for production or optionally in development to test builds locally. See package.json for various npm scripts available.

# Main Dependencies

- Express
- Vite

Many of the other dependencies aren't necessary or can be swapped out with something else - however, you're probably going to need a front end build tool and some kind of server framework. Typescript, Express, and Vite work well together, especially with a bit of configuration and some elbow grease. Especially if you want to serve a multi-page Vite app and you are not trying to make your Vite app serverless. If you are going serverless and/or building out a single-page app with front end routing, integrating with Express probably will not help you much.