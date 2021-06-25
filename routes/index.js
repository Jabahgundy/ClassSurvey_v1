const express = require('express');
const router = express.Router();
const ClassSurveyModel = require('../models/ClassSurveyModel');

router.get('/', async (req, res) => {
    const topicData = await ClassSurveyModel.getAllTopicData();

    res.render('template', {
        locals: {
            title: 'Class Survey',
            data: topicData
        },
        partials: {
            body: 'partials/home'
        }

    })

});

let errorMessage = error;
if (!error) {
    errorMessage = "No Error Message Defined";
}


router.get('/error', async (req, res) => {
    const { error } = req.query;
    res.render('template', {
        locals: {
            title: "ERROR PAGE",
            error: error
        },
        partials: {
            body: 'partials/error'
        }
    })
})

router.post('/update', async (req, res) => {
    let response;
    for (let key in req.body) {
        console.log("KEY and VALUE: ", key, req.body[key]);
        response = await ClassSurveyModel.updateRanking('CSS', 1);
    }

    if (response.rowCount !== 1) {
        res.redirect(`/error?error=${response}`);
    } else {
        res.redirect('/');
    }
    console.log("RESPONSE", response);
    res.redirect('/');
});

module.exports = router;