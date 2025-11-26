const API_URL = 'https://api.cosmicjs.com/v3/buckets/meu-portfolio-production-310f7c50-cac2-11f0-95c9-c3a2d4580235/objects?pretty=true&query=%7B%22type%22:%22projects%22%7D&limit=10&skip=0&read_key=Rf34svS8GBO8DL0dtSuS6YFiOMINuH7IaP5iXSy5E0WNQlfDQi&depth=1&props=slug,title,metadata,type,'

export async function getProjects() {
  const response = await fetch(API_URL);
  const projects = await response.json();
  return projects.objects;
}
