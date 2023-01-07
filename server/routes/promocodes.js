const router = require(`express`).Router()

const promocodesModel = require("../models/promocodes")

const getPromocode = (req, res, next) =>
{
    promocodesModel.findOne({code: req.params.code}, (err, data) =>
    {
        if(err)
        {
            return next(err)
        }

        res.json(data)
    })
}

const getAllPromocodes = (req, res, next) =>
{
    promocodesModel.find({}, (err, data) =>
    {
        if(err)
        {
            return next(err)
        }

        res.json(data)
    })
}

router.get(`/promocodes/:code`, getPromocode)
router.get(`/promocodes`, getAllPromocodes)

module.exports = router