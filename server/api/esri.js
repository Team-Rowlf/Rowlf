const router = require('express').Router();
const {ESRI_KEY} = process.env

router.get('/key', async (req, res, next) => {
    try {
        // probably shouldn't send key here either; should fetch stores here and load them in redux store
        res.send(ESRI_KEY)
    } catch (err) {
        next(err)
    }
})

module.exports = router;