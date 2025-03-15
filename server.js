import express from 'express';
import bodyParser from 'body-parser';
import mysql from 'mysql2';
import cors from 'cors';
import nodemailer from 'nodemailer';
import http from 'http'
const app = express();
const port=3000;

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

app.post('/customer', async (req, res) => {
    const {
        customerName, customerEmail, customerContact, customerAddress,
        customerGarden, customerArea, customerSpecification, gardenOrientaion,
        customerQuery, gardenPurpose
    } = req.body;

    if (!customerName || !customerEmail || !customerContact || !customerAddress || 
        !customerGarden || !customerArea || !customerQuery) {
        return res.status(400).json({ success: false, message: 'All fields are required' });
    }

    try {
        // Insert customer query
        const insertQuery = `
            INSERT INTO customer 
            (customerName, customerEmail, customerContact, customerAddress, 
            customerGarden, customerArea, customerSpecification, gardenOrientaion, 
            gardenPurpose, customerStatus, customerQuery) 
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `;

        const values = [customerName, customerEmail, customerContact, customerAddress, 
                        customerGarden, customerArea, customerSpecification, gardenOrientaion, 
                        gardenPurpose, "pending", customerQuery];

        db.query(insertQuery, values, (err, results) => {
            if (err) {
                console.error("Database Insert Error:", err);
                return res.status(500).json({ success: false, message: 'Database error', error: err });
            }

            // Fetch the last inserted customer
            db.query('SELECT * FROM customer ORDER BY customerid DESC LIMIT 1', (err, results) => {
                if (err) {
                    console.error("Database Fetch Error:", err);
                    return res.status(500).json({ success: false, message: 'Database fetch error', error: err });
                }

                // Send confirmation email
                email(customerName, customerEmail);

                return res.status(200).json({ 
                    success: true, 
                    message: 'Customer added successfully', 
                    data: results[0] 
                });
            });
        });
    } catch (error) {
        console.error("Server Error:", error);
        return res.status(500).json({ success: false, message: 'Server Error', error: error.message });
    }
});

// total quries 
app.get('/customer', async (req, res)=>{
    db.query('SELECT * FROM customer ', async (err, results) => {
        if (err) {
            console.error("Database query error:", err);
            return res.status(500).json({ error: "Internal Server Error" });
        };
        // const len=0;
        if ( results.length === 0) {
            console.log("no data");
            return res.status(400).json('No customer in database');
        }
        res.status(200).json(results);
    });
});

app.get('/query', async (req, res)=>{
    db.query('SELECT * FROM customer where customerStatus like "Pending" ', async (err, results) => {
        if (err) throw err;
        const len=0;
        if (len === results.length) {
            return res.status(400).json('No Pendings');
        }
        res.status(200).json(results);
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
app.put('/customer/status/:id', async (req, res)=>{
    const id=  req.params.id;
    const { customerStatus}=req.body;
    db.query('UPDATE customer SET customerStatus=? WHERE customerid=? ',[customerStatus,id], (err)=>{
        if (err) throw err;
        res.status(200).json({message: 'Customer status updated successfully'});
    });

});
app.put('/customer/:id', async (req, res)=>{
    const id=  req.params.id;
    const { customerName, customerEmail, customerContact, customerAddress, customerGarden, customerArea, customerSpecification, lightDuration} = req.body;
    
    if (!customerName ||! customerEmail || !customerContact || !customerAddress || !customerGarden ||!customerArea || !lightDuration) {
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
function email ( customerName, customerEmail){
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        host: 'smtp.gmail.com',
        secure:true,
        port:587,
        auth: {
          user: 'vaishnuht@gmail.com',
          pass: 'esmlppkzqlxdlojn'
        }
      });
  var mailOptions = {
    from: 'vaishnuht@gmail.com',
    to: `${customerEmail}`,
    subject: 'Thank You For Connecting With PlantCare',
    text: `Dear  ${customerName}, \n \n Thanks for Contacting Us. \n We will get back to you soon. \n Have a good day. \nThanks and Regards, \nPlantCare Consultation \nContact: 1223456789\nwebsite: dcghj@gj.hk\nsocial media `
  };
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
      response.end();
    }
  });

  }
