import axios from "axios";

const springBootInstance = axios.create({
  baseURL: 'http://localhost:8083'
});


export const invokeCommand = async (commandBoundary,miniappname) => {
  try {
    const response = await springBootInstance.post(`/superapp/miniapp/${miniappname}`, commandBoundary);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error invoking command:', error);
    throw error;
  }
};



export const createUser = async (userData) => {
  try {
    const response = await springBootInstance.post('/superapp/users', userData);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log('Error creating user:', error);
    throw error;
  }
};

export const getUsers = async () => {
  try {
    const response = await springBootInstance.get('/users');
    return response.data;
  } catch (error) {
    console.error('Error getting users:', error);
    throw error;
  }
};

export const loginUser = async (superApp, email) => {
  try {
    const response = await springBootInstance.get(`/superapp/users/login/${superApp}/${email}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error logging in user:', error);
    throw error;
  }
};

export const updateUserRole = async (superapp, userEmail, update) => {
  try {
    await springBootInstance.put(`/superapp/users/${superapp}/${userEmail}`, update);
    console.log('User role updated successfully');
  } catch (error) {
    console.log('Error updating user role:', error);
    throw error;
  }
};

export const createNewObject = async (object) => {
  try {
    const response = await axios.post('http://localhost:8083/superapp/objects', object);
    return response.data;
  } catch (error) {
    console.error('Error creating object:', error);
    throw error;
  }
};

export const updateObject = async (userSuperapp, userEmail, superApp, internalObjectId, update) => {
  try {
    const response = await axios.put(`http://localhost:8083/superapp/objects/${superApp}/${internalObjectId}?userSuperapp=${userSuperapp}&userEmail=${userEmail}`, update);
    return response.data;
  } catch (error) {
    console.error('Error updating object:', error);
    throw error;
  }
};

export const convertToUSD = async (amount, fromCurrency) => {
  try {
    const API_KEY = '1e33b68a768eada7fe36a1fa';  
    const response = await fetch(`https://v6.exchangerate-api.com/v6/${API_KEY}/latest/${fromCurrency}`);
    const data = await response.json();

    if (data.result !== 'success') {
      console.error('Error fetching exchange rate data:', data['error-type']);
      return;
    }

    const usdExchangeRate = data.conversion_rates['USD'];
    const amountInUSD = amount * usdExchangeRate;
    
    return amountInUSD;
  } catch (error) {
    console.error('Error in convertToUSD:', error);
  }
};

