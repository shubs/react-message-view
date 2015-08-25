import { get } from "../utils/APIUtils";

// Fetchr service to load a conversation given an id.

export default {
  name: "conversation",

  read(req, resource, { id, imageSize=1600 }, config, done) {
    const query = {
      "image_size": imageSize
    };
    const options = {
      locale: req.locale
    };
    get(`/conversation/${id}`, query, options, done);
  }

};
