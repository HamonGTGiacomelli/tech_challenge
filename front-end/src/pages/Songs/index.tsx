import React, { useEffect, useState } from "react";
import SongsTable from "../../components/SongsTable";
import { API, graphqlOperation } from "aws-amplify";
import { getSongs } from "../../graphql/queries";
import { SongsResponse } from "../../graphql/types";
import "./styles.css";
import { ReactComponent as Loading } from "../../assets/loading.svg";

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

  return (
    <div className="songsPage">
      <h1>Songs</h1>
      <span>Click on the header to sort</span>
      {isLoading ? (
        <div className="loadingContainer">
          <Loading />
        </div>
      ) : (
        <SongsTable songs={songs} />
      )}
    </div>
  );
};

export default Songs;
