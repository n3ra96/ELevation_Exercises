Exercise 1
db.linkedon.count({salary:{$gt:25000}})

Exercise 2
db.linkedon.find({},{"firstName": 1,"salary": 1 ,"_id": 0}).sort({salary: -1}).limit(3)

Exercise 3
db.linkedon.count({"currentCompany":{"industry": "Retail", "name" : "Walmart" },"salary":{$gte:7000}})

Exercise 4
db.linkedon.find({$or:[{"currentCompany.industry":"Retail"},{ "currentCompany.industry":"Sales"} ]},{"currentCompany.name": 1,"firstName": 1,"lastName": 1,"salary":1 ,"_id": 0}).sort({salary: -1}).limit(1)

Exercise 5
db.linkedon.count({$or:[{"currentCompany.name": "Apple"},{"previousCompanies.name": "Apple"}]})

