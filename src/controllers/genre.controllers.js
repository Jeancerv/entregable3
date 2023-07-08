const catchError = require('../utils/catchError');
const genre = require('../models/genre');

const getAll = catchError(async(req, res) => {
    const results = await genre.findAll()
    return res.json(results)
});

const create = catchError(async(req, res) => {
    const result = await genre.create(req.body)
    return res.status(result)
});

const getOne = catchError(async(req, res) => {
    const {id} = req.params
    const result = await genre.findByPk(id)
    if (!result) return res.sendStatus(404)
    return res.json(result)
});

const remove = catchError(async(req, res) => {
    const {id} = req.params
    await genre.destroy({where: {id}})
    return res.sendStatus(204)
});

const update = catchError(async(req, res) => {
    const {id} = req.params
    const result = req.body

    const resultUpdate = await genre.update(result, { where: {
        id }, returning: true })

        return res.json(resultUpdate)
    
})

module.exports = {
    getAll,
    create,
    getOne,
    remove,
    update
}

