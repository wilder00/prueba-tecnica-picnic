## Respecto a la base de datos:

Se utilizó base de datos Postgres por con el nombre `technical-test`, (es necesario crearla si se manteiene la url de conexión)
setear las variables de entorno:
- la url de conexión de la base de datos apunta a 192.168.0.109 que es mi derección dentro de mi red local. (cambiarla)

## RUN

para correr con nodemon:
```
npm run dev
```


to run this serve:
`node app.js`
if you prefer using nodemon:
`nodemon app.js`
but you will need to install it on your global package
`npm install -g nodemon`

## CREATING A RELEASE TAG

```
git tag -a v1.0.0 -m "a simple rest server"
git push --tags
```

## Package:

- express
- cors
- sequalize orm for database: [doc](https://sequelize.org/docs/v6/getting-started/)
- express-validator : para hacer validaciones como correos

