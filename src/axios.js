import axios from "axios";

export default axios.create({
  baseURL: "http://api.rottentomatoes.com/api/public/v1.0"
});
