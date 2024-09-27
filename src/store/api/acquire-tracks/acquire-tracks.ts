import {
  IAddTrackViaFileUploadRequestDto,
  IAddTrackViaFileUploadResponseDto,
  ISearchForTrackInSpotifyRequestDto,
  ISearchForTrackInSpotifyResponseDto,
  IYouTubeVideoDownloadRequestDto,
  IYouTubeVideoDownloadResponseDto,
  IYouTubeVideoInfoRequestDto,
  IYouTubeVideoInfoResponseDto,
} from ".";
import { api } from "../rtk-query-api-config";

// https://github.com/reduxjs/redux-toolkit/discussions/2052
export const acquireTracksApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getYouTubeVideoInfo: builder.query<
      IYouTubeVideoInfoResponseDto,
      IYouTubeVideoInfoRequestDto
    >({
      query: (videoUrl) => ({
        url: `acquire-tracks/youtube/info/${encodeURIComponent(videoUrl)}`,
      }),
    }),
    addYouTubeVideo: builder.mutation<
      IYouTubeVideoDownloadResponseDto,
      IYouTubeVideoDownloadRequestDto
    >({
      query: (body) => ({
        url: "acquire-tracks/youtube/download",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Tracks"],
    }),
    addTrackViaFileUpload: builder.mutation<
      IAddTrackViaFileUploadResponseDto,
      IAddTrackViaFileUploadRequestDto
    >({
      query: (body) => ({
        url: "acquire-tracks/upload",
        method: "POST",
        body,
        formData: true,
      }),
      invalidatesTags: ["Tracks"],
    }),
    searchForTrackInSpotify: builder.query<
      ISearchForTrackInSpotifyResponseDto[],
      ISearchForTrackInSpotifyRequestDto
    >({
      query: ({ query, limit, offset }) => ({
        url: `acquire-tracks/spotify-search`,
        params: { query, limit, offset },
      }),
    }),
  }),
});

export const {
  useLazyGetYouTubeVideoInfoQuery,
  useAddYouTubeVideoMutation,
  useAddTrackViaFileUploadMutation,
  useLazySearchForTrackInSpotifyQuery,
} = acquireTracksApi;