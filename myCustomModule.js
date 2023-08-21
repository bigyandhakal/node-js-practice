const myDate = () =>{
    return new Date();
}

const myTime = () =>{
    return new Date().getTime();
}

const msg = () =>{
    return 'This is a custom module'
}

module.exports = {myDate, myTime, msg};