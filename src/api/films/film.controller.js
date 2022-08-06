const Film = require ('./film.model');
const {setError } = require('../../helpers/error');


const getAll =  async (req, res, next) => {
    try {
        const film = await Film.find().populate("actors");
        return  res.json({
            status:200,
            message: 'Recover all DC Heroes',
            data: {  film }
        });

    }
    catch (error) {
        return next(setError(500, 'Failed film All Recover'))

    }
}

const getByID = async ( req, res, next) => {
    try{
        const {id} = req.params; 
        const film = await Film.findById(id).populate("actors");
        if (!film) return next(setError(404, 'heroe no found'));
        return res.json({
            status:200,
            message:'Recover film by ID',
            data: {film}

        });
      

    }
    catch (error) {
        return next(setError(500, 'Failed film'))

    }
}

//Definimos la función que nos permitirá crear un nuevo elemento
const create = async (req, res, next) => {
    try {
        const film = new Film(req.body)
        const heroesInBd = await film.save()
        return res.json({
            status: 201,
            message: 'Created new element',
            data: { film: Film }
        });
    } catch (error) {
        return next(setError(500, 'Failed film element'))
    }
}

//Definimos la función que nos permitirá actualizar un elemento mediante su id
const update = async (req, res, next) => {
    try {
        const { id } = req.params
        const film = new Film(req.body)
        film._id = id;
        const updatedfilm = await Film.findByIdAndUpdate(id, film)
        if (!updatedfilm) return next(setError(404, 'Code not found'))
        return res.json({
            status: 201,
            message: 'Updated element',
            data: {  film: Film }
        });
    } catch (error) {
        return next(setError(500, 'Failed updated film'));
    }
}

//Definimos la función que nos permitirá borrar un elemento mediante su id
const deleteElement = async (req, res, next) => {
    try {
        const { id } = req.params
        const deletedfilm = await Film.findByIdAndDelete(id)
        if (!deletedfilm) return next(setError(404, 'Film not found'))
        return res.json({
            status: 200,
            message: 'deleted film',
            data: { film: deletedfilm }
        });
    } catch (error) {
        return next(setError(500, 'Failed deleted film'));
    }
}



module.exports = {
    getAll, 
    getByID,
    create,
    update,
    deleteElement
};