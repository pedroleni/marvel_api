const Actor = require ('./actor.model');
const {setError } = require('../../helpers/error');

// --------------------------------------------------------------
const getAll =  async (req, res, next) => {
    try {
        const actors = await Actor.find();
        return  res.json({
            status:200,
            message: 'Recover all MARVEL Heroes',
            data: { actors }
        });

    }
    catch (error) {
        return next(setError(500, 'Failed  All Actor'))

    }
}
// --------------------------------------------------------------
const getByID = async ( req, res, next) => {
    try{
        const {id} = req.params; 
        const actor = await Actor.findById(id);
        if (!actor) return next(setError(404, 'actor no found'));
        return res.json({
            status:200,
            message:'Recover DC Heroes by ID',
            data: {actor}

        });
      

    }
    catch (error) {
        return next(setError(500, 'Failed actor by ID'))

    }
}

//Definimos la función que nos permitirá crear un nuevo elemento
const create = async (req, res, next) => {
    try {
        const actor = new Actor(req.body)
        const actorInBd = await actor.save()
        return res.json({
            status: 201,
            message: 'Created new actor',
            data: { actor: actorInBd }
        });
    } catch (error) {
        return next(setError(500, 'Failed created actor'))
    }
}

//Definimos la función que nos permitirá actualizar un elemento mediante su id
const update = async (req, res, next) => {
    try {
        const { id } = req.params
        const actor = new Actor(req.body)
        actor._id = id;
        const updatedactor = await Actor.findByIdAndUpdate(id, actor)
        if (!updatedactor) return next(setError(404, 'Code not found'))
        return res.json({
            status: 201,
            message: 'Updated element',
            data: {  heroeDC: updatedheroeMarvel }
        });
    } catch (error) {
        return next(setError(500, 'Failed updated actor'));
    }
}

//Definimos la función que nos permitirá borrar un elemento mediante su id
const deleteElement = async (req, res, next) => {
    try {
        const { id } = req.params
        const deletedactor = await Actor.findByIdAndDelete(id)
        if (!deletedactor) return next(setError(404, 'Actor not found'))
        return res.json({
            status: 200,
            message: 'deleted actor',
            data: { actor: deletedactor }
        });
    } catch (error) {
        return next(setError(500, 'Failed deleted element'));
    }
}



module.exports = {
    getAll, 
    getByID,
    create,
    update,
    deleteElement
};