const API_BASE =  `https://api-saude-mental-jovens.onrender.com/api`


export async function fechAutocuidado():Promise<any>{
     const res = await fetch(`${API_BASE}/autocuidado`);

     const result =  await res.json();

     return result; 
}


export async function fechApoio():Promise<any>{
     const res = await fetch(`${API_BASE}/apoio`);

     const result =  await res.json();

     return result; 
}


export async function fechBullying():Promise<any>{
     const res = await fetch(`${API_BASE}/bullying`);

     const result =  await res.json();

     return result; 
}


export async function fetchAutocuidadoById(id: string): Promise<any> {
  const res = await fetch(`${API_BASE}/autocuidado/${id}`);
  const result = await res.json();
  return result;
}

export async function fetchApoioById(id: string): Promise<any> {
  const res = await fetch(`${API_BASE}/apoio/${id}`);
  const result = await res.json();
  return result;
}

export async function fetchBullyingById(id: string): Promise<any> {
  const res = await fetch(`${API_BASE}/bullying/${id}`);
  const result = await res.json();
  return result;
}