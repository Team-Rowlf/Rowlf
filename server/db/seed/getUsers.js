const axios = require('axios')

async function getUsers(){
 for(let i = 0; i < 40; i ++){
   const {data} =  await axios.get('https://randomuser.me/api')
    const user = data.results[0]
    let num = Math.floor(1000000000 + Math.random() * 9000000000).toString()
    console.log({
    firstName: user.name.first,
    lastName: user.name.last,
    phoneNum: num.slice(0,3)+'-'+num.slice(3,6)+'-'+num.slice(6),
    gender: user.gender,
    username: user.login.username,
    email: user.email,
    password: `${user.name.first.toLowerCase()}${user.name.last.substring(0,1).toLowerCase()}123`,
    isAdmin: false
      })
      console.log(',')
   }
}

getUsers()