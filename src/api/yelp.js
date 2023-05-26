import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer " +
      "SLrm-A6kbKRDayotRq5f1kLNSBX3v-6u3pEkS1khXvbHCvUjHhIxoXNrgkwNt95pa1Qx-I8HMK84ZzzgT9T2oISLxNiufgqDcMd5fbpX_dm6UnSrkWiJsJg9tllwZHYx",
  },
});
