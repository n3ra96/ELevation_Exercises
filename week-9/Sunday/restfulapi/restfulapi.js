const express = require('express');
const app = express();
app.use(express.json());

let users = [
    { id: 1, name: 'Alice', age: 30 , isActive: true},
    { id: 2, name: 'Bob', age: 25 , isActive: false},
    { id: 3, name: 'Charlie', age: 35 , isActive: true},
    { id: 4, name: 'Diana', age: 28 , isActive: true},
    { id: 5, name: 'Edward', age: 40 , isActive: false}
  ];
  
  let animals = [
    { id: 1, type: 'Dog', name: 'Rex' },
    { id: 2, type: 'Cat', name: 'Whiskers' },
    { id: 3, type: 'Bird', name: 'Tweety' },
    { id: 4, type: 'Fish', name: 'Goldie' },
    { id: 5, type: 'Hamster', name: 'Fuzzy' }
  ];

  app.use(express.json())

// List all users 
app.get('/users', (req, res) => res.status(200).send({users:users}));

// Get a user by ID 
app.get('/users/id/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  user ? res.send(user) : res.status(404).send('User not found');
});

// Search users by name 
app.get('/users/name/:name', (req, res) => {
  const { name } = req.params;
  const filteredUsers = users.filter(u => u.name.toLowerCase().includes(name.toLowerCase()));
  filteredUsers ? res.send(filteredUsers) : res.status(404).send("user not found");
});

// Add a new user 
app.post('/users', (req, res) => {
  const newUser = { id: users.length + 1, ...req.body };
  users.push(newUser);
  res.status(201).send(newUser);
});

// Update a user 
app.put('/users/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (user) {
    Object.assign(user, req.body);
    res.status(200).send(user);
  } else {
    res.status(404).send('User not found');
  }
});

// Delete a user 
app.delete('/users/:id', (req, res) => {
  user = users.filter(user => user.id == parseInt(req.params.id));
  users = users.filter(user => user.id !== parseInt(req.params.id));
  res.status(200).send({message: 'user removed', user: user});
});

// List all animals 
app.get('/animals', (req, res) => res.status(200).send(animals));

// Get a specific animal by ID 
app.get('/animals/id/:id', (req, res) => {
  const animal = animals.find(a => a.id === parseInt(req.params.id));
  animal ? res.status(200).send(animal) : res.status(404).send('Animal not found');
});

// Add a new animal 
app.post('/animals', (req, res) => {
  const newAnimal = { id: animals.length + 1, ...req.body };
  animals.push(newAnimal);
  res.status(201).send(newAnimal);
});

// Update an animal 
app.put('/animals/:id', (req, res) => {
  const animal = animals.find(a => a.id === parseInt(req.params.id));
  if (animal) {
    Object.assign(animal, req.body);
    res.send(animal);
  } else {
    res.status(404).send('Animal not found');
  }
});

// Delete an animal 
app.delete('/animals/:id', (req, res) => {
  animals = animals.filter(animal => animal.id !== parseInt(req.params.id));
  const animal = animals.filter(animal => animal.id == parseInt(req.params.id));
  res.status(200).send({message :'Animal removed', animal: animal});
});

// Increment User's Age 
app.patch('/users/age/:id', (req, res) => {
    const userId = req.params.id;
    const user = users.find(u => u.id === parseInt(userId));
    if (user) {
      user.age += 1;
      res.send(user);
    } else {
      res.status(404).send('User not found');
    }
  });
  
  // Filter Animals by Type 
  app.get('/animals/type/:type', (req, res) => {
    const { type } = req.params;
    const filteredAnimals = animals.filter(animal => animal.type.toLowerCase() === type.toLowerCase());
    res.status(200).send(filteredAnimals);
  });
  
  // Change Animal's Name 
  app.patch('/animals/id/:id', (req, res) => {
    const id = req.params.id
    const { newName } = req.body;
    const animal = animals.find(a => a.id === parseInt(id));
    if (animal && newName) {
      animal.name = newName;
      res.send(animal);
    } else {
      res.status(404).send('Animal not found or new name not provided');
    }
  });
  
  // List Users in a Certain Age Range 
  app.get('/users/age', (req, res) => {
    const { minAge, maxAge } = req.query;
    if (minAge  && maxAge){
        const filteredUsers = users.filter(user => user.age >= minAge && user.age <= maxAge);
        res.json(filteredUsers);
    }else{
        res.status(404).send('minAge or maxAge not found')
    }
  });
  
  // Toggle User's Active Status 
  app.patch('/users/status/:id', (req, res) => {
    const userId = req.params.id;
    const user = users.find(u => u.id === parseInt(userId));
    if (user) {
      user.isActive = !user.isActive;
      res.send(user);
    } else {
      res.status(404).send('User not found');
    }
  });
  

app.listen(3000, () => console.log('Server running on port 3000'));