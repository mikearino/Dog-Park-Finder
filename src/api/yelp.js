import Axios from "axios";

export default Axios.create({
  baseURL: "https://api.yelp.com/v3/categories",
  headers: {
    Authorization:
      "Bearer nWIPzXZkCJWv1s5Wix7KGLozEG4JS7O3eajh-6WgyuVc2CtYp4jHMHf6U6q4ZTQrHJQeyHH6r7gCRctSSzFeoYwO85HMkg8kcMzSWsBoKrl4wKGZcq6tt5v_juMEXnYx"
  }
});
