import axios from "axios";
// const API_URI = "https://aora-server-hfc7.onrender.com/api";
const API_URI = "http://192.168.100.23:5050/api";

interface Props {
  username?: string;
  email: string;
  password: string;
}

interface VidoeProps {
  title: String;
  video: null;
  thumbnail: null;
  prompt: String;
  userId: String;
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

export const getAllPosts = async () => {
  try {
    const res = await axios.get(`${API_URI}/vidoes`);
    const data = res.data;
    return data;
  } catch (error) {
    console.log(error);
  }
};

// Get video posts that matches search query
export async function searchPosts(query: string) {
  try {
    const res = await axios.get(`${API_URI}/search/${query}`);
    const posts = res.data;

    if (!posts) throw new Error("Something went wrong");

    return posts;
  } catch (error) {
    throw new Error(error);
  }
}

export async function getUserPosts(userId: string) {
  try {
    const res = await axios.get(`${API_URI}/user-vidoes/${userId}`);

    const posts = res.data;

    if (!posts) throw new Error("Something went wrong");

    return posts;
  } catch (error) {
    throw new Error(error);
  }
}

// createVideoPost
export const createVideoPost = async ({
  title,
  video,
  thumbnail,
  prompt,
  userId,
}: VidoeProps) => {
  try {
    const response = await axios.post(`${API_URI}/create-vidoe`, {
      title,
      video: video.uri,
      thumbnail: thumbnail.uri,
      prompt,
      userId,
    });
    const data = response.data;
    console.log(data);

    if (data._id) {
      console.log("poste is created", data);
      return data;
    }
    return data;
  } catch (error) {
    console.log("error in appwrite");
  }
};
