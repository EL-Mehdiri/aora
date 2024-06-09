import axios from "axios";
const API_URI = "https://aora-server-hfc7.onrender.com/api";

interface Props {
  username: string;
  email: string;
  password: string;
}

// Register User
export const createUser = async ({ username, email, password }: Props) => {
  try {
    // Making a POST request to your API
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
