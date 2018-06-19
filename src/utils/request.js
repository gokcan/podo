const checkStatus = (response) => {
  if (response.status >= 200 && response.status < 300 && response.ok) {
    return response;
  }

  const error = new Error(response.statusText);
  error.response = response;
  throw error;
};

const parseJSON = (response) => {
  if (response.status === 204 || response.status === 205) {
    return null;
  }
  return response.json();
};

const request = (url, options) =>
  fetch(url, options)
    .then(checkStatus)
    .then(parseJSON);


export default request;

