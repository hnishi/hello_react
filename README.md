# hello_react

hnishi's playground of react

```
npx create-react-app my-app

cd my-app
docker build -f Dockerfile.dev -t hnishi/hello_react:dev .
docker run -v ${PWD}:/app -v /app/node_modules -p 3001:3000 --rm hnishi/hello_react:dev
```

> If you run into an "ENOENT: no such file or directory, open '/app/package.json". error, you may need to add an additional volume: -v /app/package.json.

see http://localhost:3001/

## with --it option

```
$ docker run -it -v ${PWD}:/app -v /app/node_modules -p 3001:3000 --rm hnishi/hello_react:dev
Compiled successfully!

You can now view app in the browser.

  Local:            http://localhost:3000
  On Your Network:  http://172.17.0.2:3000

Note that the development build is not optimized.
To create a production build, use npm run build.
```

## meaning of `-v /app/node_modules`

> Take note of the volumes. Without the anonymous volume ('/app/node_modules'), the node_modules directory would be overwritten by the mounting of the host directory at runtime. In other words, this would happen:
>
> Build - The node_modules directory is created in the image.
> Run - The current directory is mounted into the container, overwriting the node_modules that were installed during the build.

## use Docker Compose

```
# Build the image and fire up the container:
docker-compose up -d --build
# Bring down the container before moving on:
docker-compose stop
```

## Windows issue

> Windows Users: Having problems getting the volumes to work properly? Review the following resources:
>
> Docker on Windows–Mounting Host Directories
> Configuring Docker for Windows Shared Drives
> You also may need to add COMPOSE_CONVERT_WINDOWS_PATHS=1 to the environment portion of your Docker Compose file. Review the Declare default environment variables in file guide for more info.

## Production server with nginx

```
docker build -f Dockerfile.prod.nginx -t hnishi/hello_react:prod .
docker run -it -p 80:80 --rm hnishi/hello_react:prod
```

### with docker-compose

Fire up the container:

```
$ docker-compose -f docker-compose-prod.yml up -d --build
```

## References

- [Dockerizing a React App](https://mherman.org/blog/dockerizing-a-react-app/)
- [facebook/create-react-app](https://github.com/facebook/create-react-app)

