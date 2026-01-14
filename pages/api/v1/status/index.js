function status(request, response) {
  response.status(200).json({ chave: "vai toma no cú" });
}

export default status;
