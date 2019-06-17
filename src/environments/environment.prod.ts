const apiRoot = 'https://localhost:8443/api';

export const environment = {
  appName: 'RentCube',
  production: true,
  googleMapsKey: '',
  apiRoot,
  usersEndpoint: apiRoot + '/users',
  hotelsEndpoint: apiRoot + '/hotels'
};
