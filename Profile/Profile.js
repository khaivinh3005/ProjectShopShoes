const token =
  'eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9lbWFpbGFkZHJlc3MiOiJraGFpIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjoiVklFV19QUk9GSUxFIiwibmJmIjoxNjk5MTg4NjU0LCJleHAiOjE2OTkxOTIyNTR9.j6hdrBhAA5kskFbxWb9Kk97SBpQJ7VCczRYF7XQzsyc';

const config = { Authorization: 'Bearer ' + token };

const callAPI = () => {
  // call api
  axios({
    method: 'post',
    url: 'https://shop.cyberlearn.vn/api/Users/getProfile',
    headers: config,
  })
    .then((response) => {
      console.log('response hihi: ', response);
    })
    .catch((error) => {});
};
