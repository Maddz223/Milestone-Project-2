// This module provides functions to manage a watchlist in local storage.
const WATCHLIST_KEY = "watchlist";

export const getWatchlist = () => {
  try {
    return JSON.parse(localStorage.getItem(WATCHLIST_KEY)) || [];
  } catch {
    return [];
  }
};

export const isInWatchlist = (id, type) => {
  const list = getWatchlist();
  return list.some((item) => item.id === id && item.type === type);
};

export const addToWatchlist = (item) => {
  const list = getWatchlist();
  if (!isInWatchlist(item.id, item.type)) {
    list.push(item);
    localStorage.setItem(WATCHLIST_KEY, JSON.stringify(list));
  }
};

export const removeFromWatchlist = (id, type) => {
  const updatedList = getWatchlist().filter(
    (item) => !(item.id === id && item.type === type)
  );
  localStorage.setItem(WATCHLIST_KEY, JSON.stringify(updatedList));
};