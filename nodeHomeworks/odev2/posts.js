const post = [
    {name: "post1" , description: "Lorem ipsum"},
    {name: "post2" , description: "Dolor sit amet"},
    {name: "post3" , description: "Asmetamiat"}

];



function displayPosts(){
    for(let i= 0;i < post.length; i++){
        console.log(post[i].name + "  =>  " +  post[i].description);
    }
}


function addPost(name,description){
    let newPost = {name: name , description: description};
    post.push(newPost);
}


addPost("Eren" , "Lorem ipsum dolar not sit amet ");

displayPosts();