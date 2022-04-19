const express = require('express')
const cors = require('cors')
const { json } = require('body-parser')


const app = express()

const PORT = 1995

app.use(express.urlencoded({ extended: false }))
app.use(express.json())


app.post('/Add-Agent', (req, res) => {
    const {
        accountName,
        accountNumber,
        businessLocation,
        businessName,
        businessType,
        city,
        dateOfBirth,
        emailAddress,
        firstName,
        gender,
        idCardType,
        idExpiryDate,
        idIssueDate,
        idNumber,
        lastName,
        mobileNumber,
        nPowerId,
        officeAddress,
        socioProfCode,
        state,
        status,
        title


    } = req.body
    console.log(req.body)
    res.status(200).send("Submitted Successfully🚀🚀🚀👍")
})




app.listen(PORT, () => {
    console.log(`App lisening on port ${PORT}`)
})