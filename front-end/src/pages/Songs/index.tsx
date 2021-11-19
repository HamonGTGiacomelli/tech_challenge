import React, { useEffect, useState } from "react";
import { SongsResponse } from "../../api/songs";
import SongsTable from "../../components/SongsTable";
import { API, graphqlOperation } from "aws-amplify";
import { getSongs } from "../../graphql/queries";

const Songs = () => {
  const [songs, setSongs] = useState<SongsResponse>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const callFetchSongs = async () => {
      const response = (await API.graphql(graphqlOperation(getSongs))) as {
        data: { getSongs: SongsResponse };
      };
      setSongs(response.data.getSongs);
      setIsLoading(false);
    };

    callFetchSongs();
  }, []);

  return <div>{!isLoading && <SongsTable songs={songs} />}</div>;
};

export default Songs;
