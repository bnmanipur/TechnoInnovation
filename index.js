require("dotenv").config()

const { writeFileSync } = require("fs")

const pug = require("pug")

const express = require("express")

const app = express()

var data = [{
        "title": "Internet of Things",
        "image": "./images/iot.jpg",
        "description": [
            "The Internet of things (IoT) describes physical objects (or groups of such objects) that are embedded with sensors, processing ability, software, and other technologies that connect and exchange data with other devices and systems over the Internet or other communications networks.",
        ]
    },
    {
        "title": "Electricity",
        "image": "./images/electricity.jpg",
        "description": [
            "Electricity is a very convenient way to transfer energy, and it has been adapted to a huge, and growing, number of uses. The invention of a practical incandescent light bulb in the 1870s led to lighting becoming one of the first publicly available applications of electrical power.",
        ]
    },
    {
        "title": "Computer Chip",
        "image": "./images/computer_chip.jpg",
        "description": [
            "Computer chip, also called chip, integrated circuit or small wafer of semiconductor material embedded with integrated circuitry. Chips comprise the processing and memory units of the modern digital computer. Chip making is extremely precise and is usually done in a “clean room,” since even microscopic contamination could render a chip defective. Nanotechnology made transistors even smaller and chips correspondingly more powerful as the technology advanced.",
        ]
    },
    {
        "title": "Quantum Computing",
        "image": "./images/quantum_computing.jpg",
        "description": [
            "Quantum computing is a type of computation that harnesses the collective properties of quantum states, such as superposition, interference, and entanglement, to perform calculations. Though the devices are currently too small to outperform usual computers for practical applications, they are believed to be able to solve certain computational problems much faster than the usual computers. In October 2019, it was announced that a quantum computer solved a problem that a standard computer couldn’t in just 200 seconds.",
        ]
    },
    {
        "title": "Cloud Computing",
        "image": "./images/cloud_computing.jpg",
        "description": [
            "Cloud computing is the on-demand availability of computer system resources, especially data storage (cloud storage) and computing power, without direct active management by the user. Large clouds often have functions distributed over multiple locations, each location being a data center.",
        ]
    },
    {
        "title": "Global Positioning System",
        "image": "./images/gps.jpg",
        "description": [
            "The Global Positioning System, originally Navstar GPS, is a satellite-based radionavigation system owned by the United States government and operated by the United States Space Force. It is one of the global navigation satellite systems (GNSS) that provides geolocation and time information to a GPS receiver anywhere on or near the Earth where there is an unobstructed line of sight to four or more GPS satellites.",
        ]
    },
]

app.set('views', './views')

app.use(express.static('./public'))

app.set(`view engine`, `pug`)

app.get(`/`, (req, res) => {
    res.render(`index`, { data: data })
})

app.get('/compile', (req, res) => {
    var compiled_index = pug.compileFile("./views/index.pug")

    compiled_index = compiled_index({ data: data }).replace("./", "./public/")

    writeFileSync("index.html", compiled_index)

})

app.listen(process.env.PORT, (err) => {
    if (err)
        return console.error(`Error: ${err}`)
    console.log(`Server started at port ${process.env.PORT} successfully!`)
})