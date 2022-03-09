# swagger
Example of REST API Documentation using swagger

## Requirements

```
npm install express swagger-autogen swagger-ui-express
```

## How to run
First of all add the following scripts on your package.json:

```javascript
  "scripts": {
    "swagger-autogen": "node swagger.js"
  },
```

Then you can run the following command to invoke the swagger and generate the json output file:

```node
npm run swagger-autogen
```


## Author
Eduardo Diogo Garcia / eduardo.diogo@gmail.com

## License
MIT License
