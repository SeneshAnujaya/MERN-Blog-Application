const express = require('express');
const cors = require('cors');
const  mongoose  = require('mongoose');
const User = require('./models/User')
const bcrypt = require('bcryptjs');
const app = express();
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser')

const salt = bcrypt.genSaltSync(10);
const secret = 'sdsfgsdng345wetn3slfk45nsklg5nsd';

app.use(cors({credentials: true, origin: 'http://localhost:3000'}));
app.use(express.json());
app.use(cookieParser());

mongoose.connect('mongodb+srv://senesh9637:uCgHWxr6DCNVYe09@cluster0.yieh1yf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');

app.post('/register', async (req, res) => {
    const {username, password} = req.body;
    try {
        const userDoc = await User.create({
            username, 
            password: bcrypt.hashSync(password, salt)
        })
        res.json(userDoc);
    } catch(e) {
        res.status(400).json(e);
    } 
})

app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const userDoc = await User.findOne({username});
    const passOk = bcrypt.compareSync(password, userDoc.password)

    if(passOk) {
        // logged in
        jwt.sign({username, id: userDoc._id}, secret, {}, (err, token) => {
             if (err) throw err;
             res.cookie('token', token).json('ok');
        })
    } else {
        res.status(400).json('wrong credentials')
    } 
})


app.get('/profile', (req, res) => {
    const {token} = req.cookies;
    res.json(req.cookies); 
})

app.listen(4000, () => {
    console.log('server is listning to 4000');
})

// uCgHWxr6DCNVYe09

// mongodb+srv://senesh9637:uCgHWxr6DCNVYe09@cluster0.yieh1yf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0