// public/users/general.js

// Example Axios setup (you can define this at the top)
import axios from "axios";

// You will need your base URL (or relative path)
const API_BASE = "/api";

// 1. Get all books
export const getBooks = async () => {
  try {
    const response = await axios.get(`${API_BASE}/books`);
    return response.data;
  } catch (error) {
    console.error("Error fetching books:", error);
    throw error;
  }
};

// 2. Get book by ISBN
export const getBookByISBN = async (isbn) => {
  try {
    const response = await axios.get(`${API_BASE}/books/${isbn}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching book by ISBN:", error);
    throw error;
  }
};

// 3. Get books by author
export const getBooksByAuthor = async (author) => {
  try {
    const response = await axios.get(`${API_BASE}/books/author/${author}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching books by author:", error);
    throw error;
  }
};

// 4. Get books by title
export const getBooksByTitle = async (title) => {
  try {
    const response = await axios.get(`${API_BASE}/books/title/${title}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching books by title:", error);
    throw error;
  }
};

// 5. Get book reviews
export const getBookReviews = async (isbn) => {
  try {
    const response = await axios.get(`${API_BASE}/books/${isbn}/review`);
    return response.data;
  } catch (error) {
    console.error("Error fetching book reviews:", error);
    throw error;
  }
};
