const favoritesKey = "uicean-favorites";
const legacyFavoritesKey = "veyro-favorites";

export function readFavorites(): string[] {
  try {
    const current = localStorage.getItem(favoritesKey);
    if (current) return JSON.parse(current) as string[];
    const previous = localStorage.getItem(legacyFavoritesKey);
    if (!previous) return [];
    localStorage.setItem(favoritesKey, previous);
    return JSON.parse(previous) as string[];
  } catch {
    return [];
  }
}

export function writeFavorites(ids: string[]) {
  localStorage.setItem(favoritesKey, JSON.stringify(ids));
}

const recentKey = "uicean-recently-viewed";

export function readRecentlyViewed(): string[] {
  try {
    return JSON.parse(localStorage.getItem(recentKey) || "[]") as string[];
  } catch {
    return [];
  }
}

export function recordRecentlyViewed(id: string) {
  const next = [id, ...readRecentlyViewed().filter(item => item !== id)].slice(0, 12);
  localStorage.setItem(recentKey, JSON.stringify(next));
}
