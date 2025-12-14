const loadUser = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(data=>{
        showUser(data)
    })

}

const showUser=(users)=>{
    
    const userContainer = document.getElementById('users');
    for (const user of users){
        console.log(user.name);
        const li = document.createElement('li');
        li.innerText = 'Ami tomar Bro';
        userContainer.appendChild(li);
    }

}