
import InitActions from "./pages/InitActions";

import features from "./constants/features";

import InboxPage from "./pages/InboxPage";
import ConversationPage from "./pages/ConversationPage";
import HomePage from "./pages/HomePage";
import PhotoPage from "./pages/PhotoPage";
import FeaturedPage from "./pages/FeaturedPage";

export default {

  home: {
    path: "/",
    method: "get",
    handler: InboxPage,
    action: InitActions.ConversationListPage
  },

  conversation: {
    path: "/featured/conversation/:id",
    method: "get",
    handler: ConversationPage,
    action: InitActions.ConversationPage
  },

  featured: {
    path: `/featured/:feature(${features.join("|")})`,
    method: "get",
    handler: FeaturedPage,
    action: InitActions.featuredPage
  },

  photo: {
    path: "/photo/:id",
    method: "get",
    handler: PhotoPage,
    action: InitActions.photoPage
  },

  // This route doesn't point to any handler.
  // I made it just as example for showing an action responding with an error
  bad: {
    path: "/bad",
    method: "get",
    action: InitActions.badPage
  }

};
