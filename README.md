# slim react skeleton
This is slim react skeleton.

## directories

'php'

1. controllers

2. libraries

3. public

4. tests

5. config

6. composer.json

'js'

1. src

2. index.html

3. package.json

4. webpack.config.js


## command

### setup

```bash
npm run setup
```

### dev

run dev environment
```bash
npm run build:dev
```

run production build
```bash
npm run build:prod
```

run backend api
```bash
php -S localhsot:3001
```

### upload

upload picture page
```bash
http GET http://localhost:3001/uploadimage/view
```

upload picture 

```bash
http -f POST http://localhost:3001/uploadimage/upload background@background.jpg
```

