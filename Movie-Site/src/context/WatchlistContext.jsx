import React, { createContext, useContext, useState, useEffect, useRef } from "react";

const WatchlistContext = createContext();

export const WatchlistProvider = ({ children }) => {
  const [watchlist, setWatchlist] = useState(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("watchlist");
      return stored ? JSON.parse(stored) : [];
    }
    return [];
  });

  const channelRef = useRef(null);
  const watchlistRef = useRef(watchlist);

  // Keep ref updated with latest watchlist
  useEffect(() => {
    watchlistRef.current = watchlist;
  }, [watchlist]);

  // Setup BroadcastChannel once on mount
  useEffect(() => {
    if (typeof window !== "undefined" && "BroadcastChannel" in window) {
      channelRef.current = new BroadcastChannel("watchlist-sync");

      channelRef.current.onmessage = (event) => {
        // Only update if different from current watchlist
        if (JSON.stringify(event.data) !== JSON.stringify(watchlistRef.current)) {
          setWatchlist(event.data);
        }
      };

      return () => {
        channelRef.current.close();
      };
    }
  }, []);

  // Update localStorage and broadcast on watchlist change
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("watchlist", JSON.stringify(watchlist));
    }
    if (channelRef.current) {
      channelRef.current.postMessage(watchlist);
    }
  }, [watchlist]);

  const addToWatchlist = (item) => {
    setWatchlist((prev) => {
      if (prev.find((i) => i.id === item.id && i.type === item.type)) return prev;
      return [...prev, item];
    });
  };

  const removeFromWatchlist = (id, type) => {
    setWatchlist((prev) => prev.filter((i) => i.id !== id || i.type !== type));
  };

  const isInWatchlist = (id, type) => watchlist.some((i) => i.id === id && i.type === type);

  return (
    <WatchlistContext.Provider value={{ watchlist, addToWatchlist, removeFromWatchlist, isInWatchlist }}>
      {children}
    </WatchlistContext.Provider>
  );
};

export const useWatchlist = () => useContext(WatchlistContext);