// public/users/general.js

import axios from "axios";

const API_BASE = "/api";

// 1. Get all books
export const getBooks = async () => {
  try {
    const response = await axios.get(`${API_BASE}/books`);
    if (response.status === 200) {
      return response.data; // JSON array of all books
    } else {
      throw new Error(`HTTP ${response.status}: Could not fetch books`);
    }
  } catch (error) {
    console.error("Error fetching books:", error.message);
    throw error;
  }
};

// 2. Get book by ISBN
export const getBookByISBN = async (isbn) => {
  try {
    const response = await axios.get(`${API_BASE}/books/${isbn}`);
    if (response.status === 200) {
      return response.data; // single book object
    } else if (response.status === 404) {
      return null; // "book not found"
    } else {
      throw new Error(`HTTP ${response.status}: Could not fetch book by ISBN`);
    }
  } catch (error) {
    console.error("Error fetching book by ISBN:", error.message);
    throw error;
  }
};

// 3. Get books by author
export const getBooksByAuthor = async (author) => {
  try {
    const response = await axios.get(`${API_BASE}/books/author/${author}`);
    if (response.status === 200) {
      // Even if array is empty, it’s valid
      return response.data;
    } else {
      throw new Error(`HTTP ${response.status}: Could not fetch books by author`);
    }
  } catch (error) {
    console.error("Error fetching books by author:", error.message);
    throw error;
  }
};

// 4. Get books by title
export const getBooksByTitle = async (title) => {
  try {
    const response = await axios.get(`${API_BASE}/books/title/${title}`);
    if (response.status === 200) {
      return response.data; // array of books
    } else {
      throw new Error(`HTTP ${response.status}: Could not fetch books by title`);
    }
  } catch (error) {
    console.error("Error fetching books by title:", error.message);
    throw error;
  }
};

// 5. Get book reviews
export const getBookReviews = async (isbn) => {
  try {
    const response = await axios.get(`${API_BASE}/books/${isbn}/review`);
    if (response.status === 200) {
      return response.data; // array of review objects
    } else {
      throw new Error(`HTTP ${response.status}: Could not fetch reviews`);
    }
  } catch (error) {
    console.error("Error fetching book reviews:", error.message);
    throw error;
  }
};
