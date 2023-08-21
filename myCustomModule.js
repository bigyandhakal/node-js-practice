const myDate = () =>{
    return new Date();
}

const myTime = () =>{
    return new Date().getTime();
}

module.exports = {myDate, myTime};