const bcrypt = require('bcrypt')
const saltRounds = 12
const password = process.argv.slice(2)[0]

bcrypt.genSalt(saltRounds, function(err, salt){
    bcrypt.hash(password, salt, function(err, hash){
        console.log(hash)
    })
})

//roda no terminal (node generate-pass.js <password>)