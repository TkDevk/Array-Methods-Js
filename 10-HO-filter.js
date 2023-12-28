//filter out and mutate doesn't mutate the array, so i need to create a new one

// it filters by value

let post = [
    {title:'Book 1', author:'Average book writer'},
    {title:'Book 2', author:'Normal writer'},
    {title:'Book 3', author:'Famous book writer'}
];

let postFiltered=post.filter((p)=>p.title==='Book 1')

console.log(postFiltered)
