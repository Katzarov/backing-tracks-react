export const queryParams = {
  logout: {
    key: "logout",
    value: {
      userInitiated: "user-initiated",
      auth0Initiated: "auth0-initiated",
    },
  },
};

export const routes = {
  login: "/login",
  callback: "/callback",
  logoutUserInitiated: `/login?${queryParams.logout.key}=${queryParams.logout.value.userInitiated}`,
  logoutAuth0Initiated: `/login?${queryParams.logout.key}=${queryParams.logout.value.auth0Initiated}`,
  // onBeforeRedirect: "",
  app: {
    root: "/",
    allTracks: {
      root: "/all-tracks",
      uri: (param = ":trackUri") => `${param}`,
    },
    playlist: {
      uri: (param = ":playlistId") => `/playlist/${param}`,
      track: {
        uri: (param = ":trackUri") => `track/${param}`,
      },
    },
  },
};
