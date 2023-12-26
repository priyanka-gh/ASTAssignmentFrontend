export const fetchUserData = async (page) => {
    try {
      const response = await fetch(`http://localhost:3000/users?page=${page}&pageSize=10`);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      console.log("Response Data:", data);
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  };
  
  export const deleteUser = async (telegramId) => {
    try {
      const response = await fetch(`http://localhost:3000/users/${telegramId}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      console.log("User deleted successfully");
      window.location.reload();
    } catch (error) {
      console.error('Error deleting user:', error);
      throw error;
    }
  };

  export const blockUser = async (telegramId) => {
    try {
      const response = await fetch(`http://localhost:3000/users/${telegramId}/block`, {
        method: 'PATCH',
      });
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      console.log("User blocked successfully");
      window.location.reload();
    } catch (error) {
      console.error('Error blocking user:', error);
      throw error;
    }
  };
  
  export const updateApiKey = async (newApiKey) => {
    try {
      const response = await fetch('http://localhost:3000/config', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ key: 'weatherApiKey', value: newApiKey }),
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      console.log('API key updated successfully');
    } catch (error) {
      console.error('Error updating API key:', error);
      throw error;
    }
  };
  

  export const fetchAllUsers = async () => {
    try {
      const response = await fetch('http://localhost:3000/users/all');
      const data = await response.json();
      const totalUsers = data.length;
      const pageSize = 10;
      const totalPages = Math.ceil(totalUsers / pageSize);
      console.log("to",totalPages)
      return totalPages;
    } catch (error) {
      console.error('Error fetching all users:', error);
    }
  };