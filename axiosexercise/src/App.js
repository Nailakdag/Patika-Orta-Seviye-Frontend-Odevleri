import axios from "axios";

const getUsers = async (sayi) => {
  const { data: users } = await axios(
    "https://jsonplaceholder.typicode.com/users/" + sayi
  );
  console.log(users);
};

const getPost = async (sayi) => {
  const { data: post } = await axios(
    "https://jsonplaceholder.typicode.com/posts?id=" + sayi
  );
  console.log(post);
};

async function getData(sayi) {
  try {
    const users = await getUsers(sayi);
    const post = await getPost(sayi);
    return users + post;
  } catch (error) {
    return error;
  }
}

export default getData;
