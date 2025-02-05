const express = require('express');
const fs = require('fs');
const router = express.Router();

router.get('/tasks', (req, res) => {
    fs.readFile('./data/tasks.json', (err, data) => {
        if (err) return res.status(500).json({ error: 'Could not read data' });
        res.json(JSON.parse(data));
    });
});

router.get('/tasks/:id', (req, res) => {
    const taskId = parseInt(req.params.id);
    fs.readFile('./data/tasks.json', (err, data) => {
        if (err) return res.status(500).json({ error: 'Could not read data' });
        const tasks = JSON.parse(data);
        const task = tasks.find(t => t.id === taskId);
        if (!task) {
            return res.status(404).json({ error: 'Task not found' });
        }
        res.json(task);
    });
});


module.exports = router;