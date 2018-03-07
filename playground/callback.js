let getUser = (id, callback) => {
    let user = {
        id: id,
        name: 'Sudhir'
    };
    callback(user);
};

getUser(21, (userObject) => {
    console.log(userObject);
} );