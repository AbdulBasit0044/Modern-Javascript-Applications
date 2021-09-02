let user = {
    name: 'Geralt',
    age: 32,
    email: 'geraltofrivia@witcher.com',
    location: 'rivia',
    blogs: ["Kill the monster 1", 'Kill the monster 2'],
    login: function(){
       console.log("user is logged in"); 
    },
    logout: function(){
        console.log("user is logged out");
    },
    //###########################################//
    logBlogs: function(){
        console.log(this);//this will return the current object if written in regular function
        console.log(`${this.name} have killed the following monsters`);
        this.blogs.forEach(element => {
            console.log(element);
        });
    }
    //###########################################//
    // logBlogs: ()=>{
    //     console.log(this);//this will return the global window object if written in arrow function
    // }
}

// console.log(user);
// console.log(user.name);
// console.log(user['name']);

// user.name = 'The white wolf';
// console.log(user.name);
// user['name'] = "The monster slayer";
// console.log(user.name);

user.logBlogs();
console.log(this);//this will return the global window object