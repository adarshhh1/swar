import React, { useEffect, useState } from "react";

const Trends = () => {
  const [playlists, setPlaylists] = useState([]);
  const CLIENT_ID = "YOUR_SPOTIFY_CLIENT_ID";
  const CLIENT_SECRET = "YOUR_SPOTIFY_CLIENT_SECRET";

  useEffect(() => {
    const fetchToken = async () => {
      const response = await fetch("https://accounts.spotify.com/api/token", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization: `Basic ${btoa(
            "b215d552c9f14c7f90550da80806ad0a" +
              ":" +
              "07745d5773a746bd87ca9fe1da1576de"
          )}`,
        },
        body: "grant_type=client_credentials",
      });

      const data = await response.json();
      fetchPlaylists(data.access_token);
    };

    const fetchPlaylists = async (token) => {
      const response = await fetch(
        "https://api.spotify.com/v1/search?q=indian classical music&type=playlist",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      const data = await response.json();
      setPlaylists(data.playlists.items);
    };

    fetchToken();
  }, []);

  return (
    <div className="container mx-auto p-5">
      <h1 className="text-center text-3xl font-bold mb-5">
        Trending Indian Classical Music
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {playlists.map((playlist) => (
          <div key={playlist.id} className="relative group cursor-pointer">
            <a
              href={playlist.external_urls.spotify}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={playlist.images[0]?.url}
                alt={playlist.name}
                className="rounded-lg shadow-lg w-full transform group-hover:scale-105 transition duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                <p className="text-white font-bold text-lg">{playlist.name}</p>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trends;
