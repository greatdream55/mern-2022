# MongoDB SHELL command

### Database

- `show dbs` : showing all database
- `use firstDB` : create & switch to the db
- `db.dropDatabase()` : switch to the db and drop database

### Collections (Table)

- `show collections` :show all tables
- `db.createCollection('item')` : create a table
- `db.item.drop()` : drop a table

### Documents (Fields)

- `db.item.insert([{name: "TV", price: 899, size:{length: 60, height: 50}})` 
- `db.item.insertMany([{name: "TV2", price: 899, size:{length: 60, height: 50}},{name: "TV3", price: 899, size:{length: 60, height: 50}}])` 
- insertMany allows you to add multiple items

### Retrieve Data from dbs

- `db.item.find()`  : can add .pretty()
- `db.item.find({price: {$lt: 100}})` : find all fields with the price less than 100
- `$lt` : less than  `$gt` : greater than `$and` : multiple criteria
- `db.item.find({$and: [{price: {$lt:100}}, {price:{$gt:10}}]})`  
- `db.item.findOne({name:"toy"})`

### Update

- `db.item.update({}, {$addToSet:{shops: ["BestBuy","Amazon", "Walmart"]}})` : Only update one item
- `db.item.updateMany({}, {$addToSet:{shops: {$each:["BestBuy","Amazon", "Walmart"]}}})` : Update multiple items by adding an array of shops using $each 
- `db.item.update({name:"games"}, {$push: {shops: 'gamestop'}})` : add to array
- `db.item.update({name:"games"}, {$pull: {shops: 'gamestop'}})` : remove from array
- `db.item.updateMany({}, {$inc: {price: 1}})` : increment by 1
- `db.item.updateMany({}, {$rename: {'rating': 'stock'}})` : renaming the name of the field

### Delete

- both .remove, .deleteOne, .deleteMany work
- `db.item.deleteMany({price: {$gt: 100}})` 
- `db.item.deleteOne({})`
- `db.item.updateMany({}, [{$unset: ['stock']}])` :$unset removes the column

## REMARKS

- $push adds items in the order in which they were received. Also, you can add the same items several times.

- $addToSet adds just unique items, but the order of items is not guaranteed.
