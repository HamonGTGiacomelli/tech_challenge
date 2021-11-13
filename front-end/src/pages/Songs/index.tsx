import React, { useEffect, useState } from "react";
import { fetchSongs, SongsResponse } from "../../api/songs";
import SongsTable from "../../components/SongsTable";

const Songs = () => {
  const [songs, setSongs] = useState<SongsResponse>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setSongs(fetchSongs());
    setIsLoading(false);
  }, []);

  return <div>{!isLoading && <SongsTable songs={songs} />}</div>;
};

export default Songs;
