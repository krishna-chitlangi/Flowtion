const express = require('express')
const auth = require('../middleware/auth')
const isAdmin = require('../middleware/isAdmin')
const isAuth = require('../middleware/isAuth')
const { add, read, deleteflow } = require('../controllers/flowchart')
const router = new express.Router()

router.post('/addflowchart', auth, isAuth, isAdmin, add)
router.get('/flowchart/:id', auth, isAuth, read)
router.delete('/delete/:id', auth, isAuth, isAdmin, deleteflow)



router.param("id", flowchartbyId)

module.exports = router
