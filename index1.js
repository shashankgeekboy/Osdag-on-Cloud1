fetch('/api/hello-world')
  .then(response => response.json())
  .then(data => console.log(data.message));
