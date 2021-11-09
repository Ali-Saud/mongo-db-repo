// deleting db, use it then delete it
use example1
db.dropDatabase()

// create new db:
use example2
//it creates 'example2' database, and switch to it

// tutorial:
use acme
db.createCollection('posts')
show collections

db.posts.insert({
    title: 'Post One',
    body: 'Body of Post One',
    category: 'News',
    likes: 4,
    tags: ['news','events'],
    user: {
        name:'John Doe',
        status: 'author'
    },
    date: Date()

})

// insert Many:

db.posts.insertMany([
    {
        title: 'Post Two',
        body: 'Body of Post Two',
        category: 'Technology',
        date: Date()
},
    {
    title: 'Post Three',
    body: 'Body of Post Three',
    category: 'News',
    date: Date()
},

    {
    title: 'Post Four',
    body: 'Body of Post Four',
    category: 'Entertainment',
    date: Date()
}

])

// Count:
db.posts.find({category:'News'}).count()

// sorting:
db.posts.find().sort({title:1 }).pretty()     //"or -1"


// find
db.posts.find().pretty()

// find + limit
db.posts.find({category:'News'}).limit(1).pretty()


// find - foreach
// forEach >>> capital E  <<<
db.posts.find().forEach(function(doc) {print('Blog Post: '+ doc.title)})


// find one
db.posts.findOne( {category: 'News'} )


// Update:
// without $set: you change it, you add your new data and lose old one.
//if no post Two: upsert will update and insert it
db.posts.update({ title: 'Post Two'},
    {
        title: 'Post two',
        body: 'New body of Post Two',
        date: Date()
    },
    {
        upsert: true  
    }
)
// this new update will take place of old one. so, no category will be found

// Using $set :
db.posts.update( {title: 'Post two'},
    {
        $set: {
            body: 'Body Of Post 2',
            category: 'Technology',
        }
    }
)

// rename:
db.posts.update({title:'Post One'}, {$rename: {likes:'Views'}})

