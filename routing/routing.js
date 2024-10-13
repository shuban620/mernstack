import express from "express";
const router = express.Router();
import registeruser from '../Controller/registerschema.js';

router.post('/register', registeruser);

export default router;


// router.post('/', (req, res) => {
//     res.send("your post program is running well!");
//   });

// router.get('/about', (req, res) => {
//   res.send("your get program is running well!");
// });

// router.put('/contactus', (req, res) => {
//   res.send("your put program is running well!");
// });
  
// router.patch('/portfolio', (req, res) => {
//   res.send("your patch program is running well!");a
// });
  
// router.delete('/whyus', (req, res) => {
//   res.send("your delete program is running well!");
// });


// This code is used to create routes for the application.
// The routes are created using the express.Router() method.
// The routes are defined using the HTTP methods such as POST, GET, PUT, PATCH, and DELETE.
// Each route sends a response message to the client.
// The default export is used to export the router object.