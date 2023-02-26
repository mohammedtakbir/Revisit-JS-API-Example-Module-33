async function loadRandomUser(){
    try{
        const res = await fetch(`https://randomuser.me/api/?results=1`);
        const users = await res.json();
        console.log(users)
    }
    catch(error){
        console.log(error.message)
    }
}