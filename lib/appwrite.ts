import axios from "axios";
const API_URI = "https://aora-server-hfc7.onrender.com/api";

interface Props {
  username?: string;
  email: string;
  password: string;
}

// Register User
export const createUser = async ({ username, email, password }: Props) => {
  try {
    const response = await axios.post(`${API_URI}/auth/sign-up`, {
      username,
      email,
      password,
    });
    const data = response.data;

    if (data._id) {
      console.log("user is created");
    }
    console.log("user not created!!");
  } catch (error) {
    console.log("error in appwrite");
  }
};

export const signIn = async ({ email, password }: Props) => {
  try {
    const response = await axios.post(`${API_URI}/auth/sign-in`, {
      email,
      password,
    });
    const data = response.data;
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getCurrentUser = () => {
  try {
  } catch (error) {
    console.log(error);
  }
};

export const getAllPosts = async () => {
  try {
    const res = await axios.get(`${API_URI}/vidoes`);
    const data = res.data;
    return data;
  } catch (error) {
    console.log(error);
  }
};
