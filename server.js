const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const cors = require("cors");
const app = express();
const port=3000;

// app.use(bodyParser.json());

app.use(cors()); // Enable CORS for all origins (or configure as needed)
app.use(bodyParser.json());
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'uiux'
});

db.connect((err) => {
    if (err) throw err;
    console.log('Connected to database');
});
app.listen(port, () => {
    console.log('Server started on http://localhost:3000');
});

app.post('/customer', async (req, res)=>{
    const { customerName, customerEmail,customerContact, customerAddress, customerGarden, customerArea ,customerSpecification, lightDuration}= req.body;
    if(!customerName || !customerEmail || !customerContact || !customerAddress || !customerGarden || !customerArea|| !customerSpecification|| !lightDuration){
        return res.status(400).json({success:false, message: 'All fields are required'});
    }
    try {
        db.query('INSERT INTO customer (customerName, customerEmail, customerContact, customerAddress, customerGarden, customerArea, customerSpecification, lightDuration) VALUES (?, ?, ?, ?, ?,?, ?,?)', [customerName, customerEmail, customerContact, customerAddress, customerGarden ,customerArea, customerSpecification, lightDuration], (err, results) => {
            if (err){
                res.status(400).json({success: false, message:'Database error '})
            }
            db.query('SELECT * FROM customer ORDER BY customerid DESC LIMIT 1', (err, results) => {
                if (err) {  
                    res.status(400).json({success: false, message:'Database error '})   
                    }
                    res.status(200).json({success: true, message: 'customer added successfully', data: results[0]});
            })
        });
    } catch (error) {
        console.error(error);
        res.status(500).json('Server Error');
    }
});
app.get('/customer', async (req, res)=>{
    db.query('SELECT * FROM customer ', async (err, results) => {
        if (err) throw err;
        const len=0;
        if (len === results.length) {
            return res.status(400).json('No customer in database');
        }
        res.status(201).json(results);
    });
});
app.get('/customer/:id', async (req, res)=>{
    const id = req.params.id;

    db.query('SELECT * FROM customer where customerid=? ',[id], async (err, results) => {
        if (err) throw err;
        const len=0;
        if (len === results.length) {
            return res.status(400).json('No customer in database');
        }
         
        res.status(201).json(results);
    });
});

app.put('/customer/:id', async (req, res)=>{
    const id=  req.params.id;
    const { customerName, customerEmail, customerContact, customerAddress, customerGarden, customerArea, customerSpecification, lightDuration} = req.body;
    
    if (!customerName ||! customerEmail || !customerContact || !customerAddress || !customerGarden ||!customerArea || !customerSpecification|| !lightDuration) {
        return res.status(400).json({ success: false, message: 'All fields are required' });
    }
   
    // Prepare the SQL update query
    const query = 'UPDATE customer SET customerName = ?, customerEmail = ?, customerContact=?, customerAddress=?, customerGarden=?, customerArea=?, customerSpecification=?, lightDuration=? WHERE customerid = ?';
    const values = [customerName, customerEmail, customerContact, customerAddress, customerGarden, customerArea ,customerSpecification, lightDuration, id];

    try {
        db.query(query, values, (err, results) => {
            if (err) {
                console.error('Error updating customer:', err);
                return res.status(500).json({ success: false, message: 'Database error' });
            }

            // Check if any rows were affected
            if (results.affectedRows === 0) {
                return res.status(404).json({ success: false, message: 'customer not found' });
            }

            res.status(200).json({ success: true, message: 'customer updated successfully', data: { customerid ,customerName, customerEmail, customerContact , customerAddress,customerGarden, customerArea, customerSpecification, lightDuration} });
        });
    } catch (error) {
        console.error('Error updating customer:', error);
        res.status(500).json({ success: false, message: 'Server error' });
    }

});
app.delete('/customer/:id', async (req, res)=>{
    const id= req.params.id;
    db.query('Delete  FROM customer where customerid=? ', [id], async (err, results) => {
        if (err) throw err;
        const len=results.length;
        if (len === 0) {
            return res.status(400).json('No customer in database');
        }
       
        res.status(201).json(`customer Deleted`);
    });

});
