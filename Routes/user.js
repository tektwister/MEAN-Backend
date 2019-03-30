const user = require('../Models/user')
const router = require('express').Router()

router.get('/test',(req, res)=>{
    res.send("User Route")
})

router.post('/createUser', (req, res)=>{
    var newUser = user({
        username : req.body.user,
        password: req.body.password
    })

    newUser.save((saveError, saveDocs)=>{
        res.send('Success')
    })
})

router.get('/getUsers' , (req, res)=>{
    user.find({}).exec((err, docs)=>{
        res.json(docs)
    })
})

router.post('/authenticate', (req, res) => {
    user.find({username: req.body.username}, (findErr, findDocs)=>{
        if(findDocs.length == 0){
            res.json({
                success: false,
                user: 'No User Found'
            })
        } else {
            res.json({
                success: true,
                user: findDocs[0].username
            })
        }
    })
})
 
router.post('/create', (req, res) => {

})

// router.post('/delete', (req, res) => {

// })

// router.post('/update', (req, res) => {

// })

module.exports = router