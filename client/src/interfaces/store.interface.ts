import MetaDataResp from "./meta-data-resp.interface";

export default interface Store {
  user: {
    metaData: MetaDataResp;
    isLoading: boolean;
  };
}
