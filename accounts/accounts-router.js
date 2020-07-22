const express = require('express');

const db = require('../data/dbConfig.js');

const router = express.Router();

router.get('/', (req, res) => {
    db.select('*')
    .from('accounts')
    .then((accounts) => res.status(200).json(accounts))
    .catch(err => console.log(err))
});

router.get('/:id', (req, res) => {
    const  { id } = req.params;
    db('accounts')
        // .where({ id: id })
        .where('id',id)
        // .first()
        .then((account) => res.status(200).json(account))
        .catch(err => err)
});

router.post('/', (req, res) => {
    const accountData = req.body
    db('accounts')
        .insert(accountData)
        .then( id => res.status(201).json({ data: id[0]}))
        .catch(err => console.log(err))
});

router.put('/:id', (req, res) => {
    const { id } = req.params;
    const changes = req.body;
    db("accounts")
        .where("id", id)
        .update(changes)
        .then(count => {
            if(count > 0){
            res.status(200).json({ message: `${count} record has been updated` });
            } else{ 
                res.status(404).json({ message: 'There wasn norecord to update'})
            }
        })
        .catch()
});

router.delete('/:id', (req, res) => {
    const { id } = req.params;
    db("accounts")
        .where("id", id)
        .delete()
        .then(count => {
            if(count > 0){
            res.status(200).json({ message: `${count} record has been deleted` });
            } else{ 
                res.status(404).json({ message: 'There was no record to update'})
            }
        })
        .catch()

});

module.exports = router;