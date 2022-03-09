const express = require('express');

const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('./swagger/swagger_output.json');

const mainRoutes = require('./routes/main');

const app = express();

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));
app.use(express.json());

app.use('/', mainRoutes);

app.listen(3000, () => {
  console.log('Server is listening on PORT 3000...');
});