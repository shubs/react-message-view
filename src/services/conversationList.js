import { get } from "../utils/APIUtils";

// Fetchr service to load a conversation given an id.

export default {
  name: "conversationList",

  read(req, resource, { imageSize=1600 }, config, done) {
    const query = {
      "image_size": imageSize
    };
    const options = {
      locale: req.locale
    };
    get(`/conversation/`, query, options, done);
  }

};
