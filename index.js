let axios = require('axios')

function Profile(id){
let baseRequest = `https://www.roblox.com/users/${id}/profile`
let robloxRequest = `https://api.roblox.com/users/${id}`
axios.get(robloxRequest)
    .then(function(username) {
            if (!(username.data == '{"success":false,"errorMessage":"User not found"}')) {
                axios.get(baseRequest)
                    .then(function(response) {
                            let data = response.data.split("<")
                            let proccessing = data[17].replace(`meta name=description content="${username.data.Username} is one of the millions playing, creating and exploring the endless possibilities of Roblox. Join ${username.data.Username} on Roblox and explore together!`, '');
                            proccessing = proccessing.replace('">', "")
                            let has = true
                            let position = -1
                            console.log(proccessing)
                    })
        .catch(function(error) {
            console.log(error);
        })
    }
else {
    console.log('Unknown name did you spell it correctly?')
}
})
.catch(function(error) {
    console.log(error)
})
}

Profile(179974257)
