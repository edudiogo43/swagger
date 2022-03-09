const swaggerAutogen = require('swagger-autogen')();

const outputFile = './swagger/swagger_output.json';
const endpointsFiles = ['./index.js'];

const doc = {
    info: {
      version: '3.0.1',
      title: 'NodeJS using Rest API example',        
      description: 'This is an example of how to use Swagger on NodeJS project',  
    },
    host: '',      // by default: 'localhost:3000'
    basePath: '',  // by default: '/'
    schemes: [],   // by default: ['http']
    consumes: [],  // by default: ['application/json']
    produces: [],  // by default: ['application/json']
    tags: [        // by default: empty Array
      {
        name: 'API Default',         // Tag name
        description: 'Example of using Rest API',  // Tag description
      },
      // { ... }
    ],
    securityDefinitions: {},  // by default: empty object (Swagger 2.0)
    definitions: {},          // by default: empty object
    components: {}            // by default: empty object (OpenAPI 3.x)
  };

swaggerAutogen(outputFile, endpointsFiles, doc);