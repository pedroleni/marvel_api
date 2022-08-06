const ActorsRoutes = require('express').Router();
const {
    getAll,
    getByID,
    create,
    update,
    deleteElement } = require('./actor.controller');



    ActorsRoutes.get('/', getAll);
    ActorsRoutes.get('/:id', getByID);
    ActorsRoutes.post('/', create)
    ActorsRoutes.patch('/:id', update)
    ActorsRoutes.delete('/:id', deleteElement)

module.exports = ActorsRoutes;