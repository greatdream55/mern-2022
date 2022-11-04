### Database

- `show dbs` -- show all databases inside server
- `use first_db` -- create & switch to that dbs
- `db` -- showing the current dbs
- `db.dropDatabase()`  -- drop that current database

### Create Table

- `show collections` : show all tables
- `db.createCollection('item')` : create table `'item'`
- `db.item.drop()`

### record/row / documents

- `db.item.insert({name: 'sandwiches', price: 10.99, size: {length: 6, height: 1}})`

### retrieve data

- find / findOne
- `db.item.find({******* criteria ******** })`
- `db.item.find({******* criteria ******** }).pretty()`
- `db.item.find({name: 'sandwiches'})`

greater than -- \$gt   less than  --- $lt

- `db.item.findOne({price: {$lt :100} } )`

### 2 criteria   $and

```js 
db.item.find({ $and :  
                    [   {price: {$lt :100}  } ,
                        {price: {$gt :5}  } 
                     ]      
            })
```

### insert

`db.item.insert({name: 'wrong item2' , price: 10000 })`
`db.item.insert({name: 'wrong item1' , price: 30000 })`
`db.item.insert({name: 'wrong item3' , price: 50000 })`

### delete   (.remove / .deleteOne / .deleteMany)

`db.item.remove({name : 'wrong item'})`
`db.item.deleteOne({name : 'wrong item2'})`
`db.item.deleteMany({price: {$gt :9999} })`


### update    +array : $addToSet(make sure it is unique)  \$push

`db.item.updateMany({}, {$addToSet:{shops: 'BestBuy, Amazon, Walmart'}})`
`db.item.updateMany({}, {$push:{shops: 'Costco'}})`
`db.item.updateMany({}, {$pull:{shops: 'Costco'}})`

`db.item.updateMany({}, {$addToSet:{shops2: ['BestBuy', 'Amazon', 'Walmart']}})`

### $rename

`db.item.updateMany({}, {$rename: {'shops2': 'testing'}})`

### drop column ($unset)

`db.item.updateMany({}, [{$unset: ['testing']}])`
