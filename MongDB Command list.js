// MongoDb command list

show dbs

use ****

db.users.insertOne( { name: 'Ali', age: 30 } )

show collections

db.users.find()

db.users.find().pretty()

db.users.find('Ali')

db.users.insertMany( [ {name: '', age: }, {name: '', age: }, {name: '', age: } ]) 
// you should use [] above

// find age > 25:
db.users.find({ age: {$gt: 25} })

// find nested data:
db.users.find( {"address.street": 'Street name' })


// editing some data in user: using $set will edit age, but everything else will be removed except id. So you will get id, and age.

db.users.update( {name: 'Ali'}, {$set: {age: 32} } )

// if we want to just edit an object with all other data non-changed:
// just pass new object as value with $set
// we will update age, and name will not be touched
db.users.update({name:'Ali'}, {$set: {age:31}})

// if we dont use $set: we will save our new data and remove all old data, but it is the same object with old id.
// will update age, and lose name
db.users.update({name:'Ali'}, {age:29})



// Delete:
db.users.deleteOne({name:'Ali'})

//DeleteMany:
db.user.delete()







