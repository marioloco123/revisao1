function status(request, response) {
  response.status(200).json({ chave: "Teste testando 123" });
}

export default status;
