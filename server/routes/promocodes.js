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

router.get(`/promocodes/:code`, getPromocode)

module.exports = router