// Map of project names to their image URLs
export const projectImages = {
  // Default fallback images based on common project types
  default: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop",
  website: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&h=400&fit=crop",
  api: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop",
  mobile: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=400&fit=crop",
  game: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=800&h=400&fit=crop",
  ml: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop",
};

export function getProjectImage(repo) {
  // First check if we have a custom image for this specific project
  if (projectImages[repo.name]) {
    return projectImages[repo.name];
  }

  // Then try to determine the type of project from its name and description
  const name = repo.name.toLowerCase();
  const description = (repo.description || "").toLowerCase();
  const terms = [...name.split("-"), ...name.split("_"), ...description.split(" ")];

  if (terms.some(term => ["web", "website", "portfolio", "blog"].includes(term))) {
    return projectImages.website;
  }

  if (terms.some(term => ["api", "server", "backend", "service"].includes(term))) {
    return projectImages.api;
  }

  if (terms.some(term => ["mobile", "app", "android", "ios"].includes(term))) {
    return projectImages.mobile;
  }

  if (terms.some(term => ["game", "unity", "pygame"].includes(term))) {
    return projectImages.game;
  }

  if (terms.some(term => ["ml", "ai", "machine", "learning", "neural", "model"].includes(term))) {
    return projectImages.ml;
  }

  // Fallback to default image
  return projectImages.default;
}
