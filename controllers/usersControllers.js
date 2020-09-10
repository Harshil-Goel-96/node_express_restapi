import { v4 as uuidv4 } from "uuid";

let users = [];

export const getUsers = (req, res) => {
  res.send(users);
};

export const getUser = (req, res) => {
  //console.log(req.params);
  const id = req.params.id;
  const foundUser = users.find((user) => user.id === id);
  res.send(foundUser);
};

export const postUser = (req, res) => {
  //console.log(req.body);
  users.push({ ...req.body, id: uuidv4() });
  res.send(req.body);
};

export const deleteUser = (req, res) => {
  //console.log(req.params);
  const id = req.params.id;
  users = users.filter((user) => user.id !== id);
  res.send(users);
};

export const patchuser = (req, res) => {
  const { firstName, LastName, Age } = req.body;
  const id = req.params.id;
  const user = users.find((user) => user.id === id);
  if (firstName) {
    user.firstName = firstName;
  }
  if (LastName) {
    user.LastName = LastName;
  }
  if (Age) {
    user.Age = Age;
  }
  res.send(users);
};
