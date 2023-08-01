const getUser = () => {
    let user;

    fetch('apis/v1/users/getCurrentUser', {
        headers: { 'Content-Type': 'application/json' },
        method: 'GET'
    })
    .then(response => response.json())
    .then(data => data = user)
    .catch(error => console.log(error))

    return user;
}


export { getUser }