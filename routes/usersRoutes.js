

let usersDatabase = [];

export const createUser=(req, res) => {
  // res.send("post route reached");
  const user = req.body;

  usersDatabase.push({ ...user, id: Date.now() });
  // res.send("Hello");
  res.send(`added  user ${user.firstName}`);
};

export const getUsers=(req, res) => {
  res.send(usersDatabase);
};

export const getUser = (req, res) => {
  res.send(usersDatabase.find((user) => user.id !== req.params.id));
};

export const deleteUser = (req, res) => {
  const { id } = req.params;

  usersDatabase = usersDatabase.filter((user) => id != user.id);
  // res.send("Hello");
  res.send(`deleted  user `);
};

export const updateUser = (req, res) => {
  const { id } = req.params;
  // const userToBeUpdated = usersDatabase.find((user) => user.id == id);
  usersDatabase = usersDatabase.map((user) => {
    if (user.id == id) return { ...user, age: 28 };
    else user;
  });
  res.send("user updated");
};
