// Simple test to check API connectivity
fetch('http://localhost:3000/api/public/news')
  .then(response => {
    console.log('Status:', response.status);
    return response.json();
  })
  .then(data => {
    console.log('Success:', data);
    console.log('Articles found:', data.data?.articles?.length || 0);
  })
  .catch(error => {
    console.error('Error:', error.message);
  });