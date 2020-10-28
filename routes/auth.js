const { Router } = require('express')
const userService = require("../user_service");
const connection = require('../database')
const router = Router();
//registe  users
router.post('/signup', async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await userService.addUser(email, password)
        const User = {
            id:user.user.uid,
            full_name: req.body.full_name,
            email: req.body.email,
        }
        const sql = `INSERT INTO users SET ?`
        connection.query(sql, User, (error, row, fields) => {
            if (error) throw error;
            res.send('created')
        })
    } catch (err) {
        res.status(401).json({ error: err.message });
    }
});
router.post("/signin", async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await userService.authenticate(email, password);
        res.json(user);
    } catch (err) {
        res.status(401).json({ error: err.message });
    }
});
module.exports = router;