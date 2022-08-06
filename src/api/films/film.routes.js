const FilmRoutes = require('express').Router();
const {
    getAll,
    getByID,
    create,
    update,
    deleteElement } = require('./film.controller');



FilmRoutes.get('/', getAll);
FilmRoutes.get('/:id', getByID);
FilmRoutes.post('/', create)
FilmRoutes.patch('/:id', update)
FilmRoutes.delete('/:id', deleteElement)

module.exports = FilmRoutes;