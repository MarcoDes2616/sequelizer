const { Router } = require("express");
const Users = require("../models/users.models");
const router = Router();
const User = require('../models/users.models')


router.get('/api/v1/users', async (req, res) => {
    try {
        const users = await Users.findAll({
            attributes: ['id', 'name', 'email'],
            order: ['id']
        });
        res.json(users);
    } catch (error) {
        res.status(400).json(error);
    }
})

router.post('/api/v1/users', async (req, res) => {
    try {
        const newuser = req.body
        console.log(newuser);
        const result = await Users.create(newuser);
        res.status(201).json(result);
    } catch (error) {
        res.status(400).json(error);
    }
    
})

router.put('/api/v1/users/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const data = req.body;
        await Users.update( data, {
            where: {id}
        })
        res.status(204).send()
    } catch (error) {
        res.status(400).json(error);
    }

})
// router.put("/api/v1/users/:id", async (req, res) => {
//     try {    const { id } = req.params;    const data = req.body;    await User.update(data, {      where: { id },    });    res.status(204).send();  } catch (error) {    res.status(400).json(error);  }});

router.delete('/api/v1/users/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await Users.destroy({
            where: {id}
        })
        res.status(204).send()
    } catch (error) {
        res.status(400).json(error);
    }

})


module.exports = router;