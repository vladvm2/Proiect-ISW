const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const dotenv = require("dotenv").config();

const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());
app.use("/api/destinations", require("./routes/destinationRoutes"));
app.use(errorHandler);

app.listen(port, () => {
    console.log('Server running on port ${port}');
});