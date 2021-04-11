module.exports = (request, response) => {
  if (request.method === "GET") {
    response.json([
      { name: "Bambang", location: "Tangerang Selatan" },
      { name: "Bejo", location: "Bandung Barat" },
    ])
  } else {
    
  }
}