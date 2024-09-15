import express from 'express';
import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';
const app = express();
import cors from 'cors';



app.use(express.json());
app.use(cors());

const SECRET = 'SECr3t';  


const adminSchema = new mongoose.Schema({
  username: String,
  password: String
});



const Admin = mongoose.model('Admin', adminSchema);


const authenticateJwt = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (authHeader) {
    const token = authHeader.split(' ')[1];
    jwt.verify(token, SECRET, (err, user) => {
      if (err) {
        return res.sendStatus(403);
      }
      req.user = user;
      next();
    });
  } else {
    res.sendStatus(401);
  }
};

// Connect to MongoDB

mongoose.connect('mongodb+srv://user:123@cluster0.y6k7q.mongodb.net/folder', { useNewUrlParser: true, useUnifiedTopology: true, dbName: "folder" });

app.get("/admin/me" , authenticateJwt, (req, res) => {
  res.json({
    username: req.user.username,
  })
})

app.post('/admin/signup', (req, res) => {
  const { username, password } = req.body;
  function callback(admin) {
    if (admin) {
      res.status(403).json({ message: 'Admin already exists' });
    } else {
      const obj = { username: username, password: password };
      const newAdmin = new Admin(obj);
      newAdmin.save();
      const token = jwt.sign({ username, role: 'admin' }, SECRET, { expiresIn: '1h' });
      res.json({ message: 'Admin created successfully', token });
    }

  }
  Admin.findOne({ username }).then(callback);
});

app.post('/admin/login', async (req, res) => {
  const { username, password } = req.headers;
  const admin = await Admin.findOne({ username, password });
  if (admin) {
    const token = jwt.sign({ username, role: 'admin' }, SECRET, { expiresIn: '1h' });
    res.json({ message: 'Logged in successfully', token });
  } else {
    res.status(403).json({ message: 'Invalid username or password' });
  }
});
app.listen(3000, () => console.log('Server running on port 3000'));
