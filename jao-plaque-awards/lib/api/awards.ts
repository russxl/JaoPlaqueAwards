const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';

export interface Award {
  id: number;
  title: string;
  description?: string;
  material: string;
  image_url?: string;
  created_at: string;
  updated_at?: string;
}

export interface CreateAwardData {
  title: string;
  description?: string;
  material: string;
  image_url?: string;
}

export const getAwards = async (material?: string): Promise<Award[]> => {
  const url = new URL(`${API_URL}/api/awards`);
  if (material) {
    url.searchParams.append('material', material);
  }
  
  const response = await fetch(url.toString());
  if (!response.ok) {
    throw new Error('Failed to fetch awards');
  }
  return response.json();
};

export const getAward = async (id: number): Promise<Award> => {
  const response = await fetch(`${API_URL}/api/awards/${id}`);
  if (!response.ok) {
    throw new Error('Failed to fetch award');
  }
  return response.json();
};

export const createAward = async (data: CreateAwardData): Promise<Award> => {
  const response = await fetch(`${API_URL}/api/awards`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  
  if (!response.ok) {
    throw new Error('Failed to create award');
  }
  return response.json();
};

export const updateAward = async (id: number, data: CreateAwardData): Promise<Award> => {
  const response = await fetch(`${API_URL}/api/awards/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  
  if (!response.ok) {
    throw new Error('Failed to update award');
  }
  return response.json();
};

export const deleteAward = async (id: number): Promise<void> => {
  const response = await fetch(`${API_URL}/api/awards/${id}`, {
    method: 'DELETE',
  });
  
  if (!response.ok) {
    throw new Error('Failed to delete award');
  }
}; 