const catchError = require('../utils/catchError');
const Movie = require('../models/Movie');
const Actor = require('../models/Actor');
const Director = require('../models/Director');
const genre = require('../models/genre');

const getAll = catchError(async(req, res) => {
    const results = await Movie.findAll({include: [Actor, Director, genre]})
    return res.json(results)
});

const create = catchError(async(req, res) => {
    const result = await Movie.create(req.body)
    return res.status(result)
});

const getOne = catchError(async(req, res) => {
    const {id} = req.params
    const result = await Movie.findByPk(id)
    if (!result) return res.sendStatus(404)
    return res.json(result)
});

const remove = catchError(async(req, res) => {
    const {id} = req.params
    await Movie.destroy({where: {id}})
    return res.sendStatus(204)
});

const update = catchError(async(req, res) => {
    const {id} = req.params
    const result = req.body

    const resultUpdate = await Movie.update(result, { where: {
        id }, returning: true })

        return res.json(resultUpdate)
    
})

const setGenres = catchError(async (req, res) =>{
    
    const {id} = req.params
    const movie = await Movie.findByPk(id)
    await movie.setGenres(req.body)
    const getGenres = await movie.getGenres()
    return res.json(getGenres)
})

const setDirectors = catchError(async (req, res) =>{

    const {id} = req.params
    const movie = await Movie.findByPk(id)
    await movie.setDirectors(req.body)
    const getDirectors = await movie.getDirectors()
    
    return res.json(getDirectors)

})

const setActors = catchError(async ( req, res) =>{

    const {id} = req.params
    const movie = await Movie.findByPk(id)
    await movie.setActors(req.body)
    const getActors = await movie.getActors()
    
    return res.json(getActors)
})

module.exports = {
    getAll,
    create,
    getOne,
    remove,
    update,
    setGenres,
    setDirectors,
    setActors
}
