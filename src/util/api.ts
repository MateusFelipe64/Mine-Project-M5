const API_BASE = `https://api-saude-mental-jovens.onrender.com/api`;

export async function fetchAutocuidado(): Promise<any> {
  const res = await fetch(`${API_BASE}/autocuidado`);
  return await res.json();
}

export async function fetchApoio(): Promise<any> {
  const res = await fetch(`${API_BASE}/apoio`);
  return await res.json();
}

export async function fetchBullying(): Promise<any> {
  const res = await fetch(`${API_BASE}/bullying`);
  return await res.json();
}

export async function fetchAutocuidadoById(id: string): Promise<any> {
  const res = await fetch(`${API_BASE}/autocuidado/${id}`);
  return await res.json();
}

export async function fetchApoioById(id: string): Promise<any> {
  const res = await fetch(`${API_BASE}/apoio/${id}`);
  return await res.json();
}

export async function fetchBullyingById(id: string): Promise<any> {
  const res = await fetch(`${API_BASE}/bullying/${id}`);
  return await res.json();
}