# simple-login

```
docker build -f Dockerfile.dev -t react-simple-login:dev .
docker run -v ${PWD}:/app -v /app/node_modules -p 3001:3000 --rm react-simple-login:dev
```

> If you run into an "ENOENT: no such file or directory, open '/app/package.json". error, you may need to add an additional volume: -v /app/package.json.

see http://localhost:3001/

