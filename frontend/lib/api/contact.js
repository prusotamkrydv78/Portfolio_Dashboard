export async function getContact() {
  const response = await fetch('/api/contact');
  if (!response.ok) throw new Error('Failed to fetch contact');
  return response.json();
}

export async function updateContact(data) {
  const response = await fetch('/api/contact', {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
  if (!response.ok) throw new Error('Failed to update contact');
  return response.json();
}

export async function addSocialLink(data) {
  const response = await fetch('/api/contact/social', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
  if (!response.ok) throw new Error('Failed to add social link');
  return response.json();
}

export async function updateSocialLink(id, data) {
  const response = await fetch(`/api/contact/social/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
  if (!response.ok) throw new Error('Failed to update social link');
  return response.json();
}

export async function deleteSocialLink(id) {
  const response = await fetch(`/api/contact/social/${id}`, {
    method: 'DELETE'
  });
  if (!response.ok) throw new Error('Failed to delete social link');
  return response.json();
}
