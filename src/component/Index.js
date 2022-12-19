import express from 'express';
import { createConnection } from 'mysql';
import cors from 'cors';

const app = express();
app.use(cors())
app.use(express.json());

const conn = createConnection({
    host: "localhost",
    user: "root",
    password: "sept22",
    database: "phonebox"
});
conn.connect((error) => {
    if (error) {
        console.log(error);
    }
    else {
        console.log("Database connected !");
    }
});

app.post('/Registration', (request, response) => {
    var insertQry = `INSERT INTO phonebox VALUES(
        '${request.body.name}','${request.body.email}',
        ${request.body.phone},'${request.body.password}')`
    conn.query(insertQry, (error, result) => {
        if (error) {
            response.status(500).send({ message: 'Error in inserting data' });
        }
        else {
            response.status(200).send({ message: 'User registered successfully' });
        }
    });
});

app.listen(3000, () => {
    console.log('listening on 3000');
});