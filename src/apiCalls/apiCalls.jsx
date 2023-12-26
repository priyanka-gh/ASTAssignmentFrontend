const BACKEND_URL = "https://ast-assignment.onrender.com"

export const fetchUserData = async (page) => {
    try {
      const response = await fetch(`${BACKEND_URL}/users?page=${page}&pageSize=10`);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  
  export const deleteUser = async (telegramId) => {
    try {
      const response = await fetch(`${BACKEND_URL}/users/${telegramId}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      window.location.reload();
    } catch (error) {
      console.error('Error deleting user:', error);
      throw error;
    }
  };

  export const blockUser = async (telegramId) => {
    try {
      const response = await fetch(`${BACKEND_URL}/users/${telegramId}/block`, {
        method: 'PATCH',
      });
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      window.location.reload();
    } catch (error) {
      console.error('Error blocking user:', error);
      throw error;
    }
  };
  
  export const updateApiKey = async (newApiKey) => {
    try {
      const response = await fetch(`${BACKEND_URL}/config`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ key: 'weatherApiKey', value: newApiKey }),
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
    } catch (error) {
      console.error('Error updating API key:', error);
      throw error;
    }
  };
  

  export const fetchAllUsers = async () => {
    try {
      const response = await fetch(`${BACKEND_URL}/users/all`);
      const data = await response.json();
      const totalUsers = data.length;
      const pageSize = 10;
      const totalPages = Math.ceil(totalUsers / pageSize);
      return totalPages;
    } catch (error) {
      console.error('Error fetching all users:', error);
    }
  };