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

## References

- [facebook/create-react-app](https://github.com/facebook/create-react-app)
- [Dockerizing a React App](https://mherman.org/blog/dockerizing-a-react-app/)

