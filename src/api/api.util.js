export const getLoggedInData = props => {
  const userData = localStorage.getItem('userData');
  if (userData) {
    const parsedUserData = JSON.parse(userData);
    return JSON.parse(parsedUserData.authorizationToken);
  }
  return null;
};

export const getAccessToken = async () => {
  const data = await getLoggedInData();
  if (data) {
    return data.access_token ? data.access_token : '';
  }

  return null;
};
