const router = require('express').Router();
const { addRecipesToArray } =  require('./helperFunctions')

router.post('/convertshoppinglist', async (req, res, next) => {
    try {
        const ingredientArray =  []
        addRecipesToArray(req.body, ingredientArray)
        res.send({ingredients: ingredientArray})
    } catch(err) {
        next(err)
    }
})

module.exports = router;