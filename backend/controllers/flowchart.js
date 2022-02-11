const Flowchart = require('../models/flowchart')
const saveflow = async (req, res) => {
    console.log("in here")
    const flowchart = new Flowchart(req.body)
    try {
        await flowchart.save()
        res.status(201).send(flowchart)
    } catch (err) {
        return res.status(400).json({
            error: err
        })
    }
}
const read = async (req, res) => {
    try {
        const id = req.params.id;
        const fc = await Flowchart.findById(id)
        if (!fc) {
            throw new Error("flowchart not found")
        }
        res.status(200).send(fc)


    } catch (e) {
        return res.status(400).json({
            error: e
        })

    }
}
const readAll = async (req, res) => {
    try {

        const fc = await Flowchart.find().select("name")
        if (!fc) {
            throw new Error("flowchart not found")
        }
        res.status(200).send(fc)


    } catch (e) {
        return res.status(400).json({
            error: e
        })

    }
}
module.exports = { read, readAll, saveflow }