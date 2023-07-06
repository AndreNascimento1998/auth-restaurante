const base64Url = require('base64url')

const header = {
    alg: 'HS256',
    typ: 'JWT'
}

const payload = {
    username: 'andre@gmail.com',
    name: 'André Carlos',
    exp: new Date().getTime()
}


const headerEncoded = base64Url.encode(JSON.stringify(header))
const payloadEncoded = base64Url.encode(JSON.stringify(payload))

const key = 'abcd123456'

const crypt = require('crypto')

const signature = crypt.createHmac('sha256', key).update(`${headerEncoded}.${payloadEncoded}`).digest('bin')


console.log(`${headerEncoded}.${payloadEncoded}.${base64Url.encode(signature)}`)
