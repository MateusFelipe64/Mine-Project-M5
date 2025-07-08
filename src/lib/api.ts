// Mock data para exemplo
const apoio = [
  { _id: "1", title: "Apoio 1", content: "<p>Conteúdo do Apoio 1</p>" },
  { _id: "2", title: "Apoio 2", content: "<p>Conteúdo do Apoio 2</p>" },
];
const autocuidado = [
  { _id: "1", title: "Autocuidado 1", content: "<p>Conteúdo do Autocuidado 1</p>" },
  { _id: "2", title: "Autocuidado 2", content: "<p>Conteúdo do Autocuidado 2</p>" },
];
const bullying = [
  { _id: "1", title: "Bullying 1", content: "<p>Conteúdo do Bullying 1</p>" },
  { _id: "2", title: "Bullying 2", content: "<p>Conteúdo do Bullying 2</p>" },
];

export async function fetchApoio() {
  return apoio;
}
export async function fetchApoioById(id: string) {
  return apoio.find((item) => item._id === id) || null;
}

export async function fetchAutocuidado() {
  return autocuidado;
}
export async function fetchAutocuidadoById(id: string) {
  return autocuidado.find((item) => item._id === id) || null;
}

export async function fetchBullying() {
  return bullying;
}
export async function fetchBullyingById(id: string) {
  return bullying.find((item) => item._id === id) || null;
}