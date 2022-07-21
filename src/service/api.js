import Axios from "axios";
const defaultAxios = Axios.create({
  headers: { "Content-Type": "application/json" },
});
defaultAxios.interceptors.response.use(
  (res) => {
    return res.data;
  },
  (err) => {
    return Promise.reject(err);
  }
);
const URL = "http://localhost:5000";
const URL1 = "http://localhost:5000";
export const postCreate = ({
  data = {},
  headers = {},
  params = {},
  path = {},
} = {}) => {
  return defaultAxios({
    url: `${URL}/admin/account/create`,
    method: "post",
    params,
    headers,
    data: {
      name: "Forrest Schneider",
      website: "engineer",
      phone: "(776) 667-5301",
      ...data,
    },
  });
};
export const postCreate1 = ({
  data = {},
  headers = {},
  params = {},
  path = {},
} = {}) => {
  return defaultAxios({
    url: `${URL1}/admin/meeting/create`,
    method: "post",
    params,
    headers,
    data: {
      title: "sensor",
      fromDateTime: "2023-02-02T20:08:03.448Z",
      toDateTime: "2022-11-21T01:47:36.963Z",
      location: "end-to-end",
      description: "Clothing",
      attachments: [{ _id: false, attachment: "cross-platform", desc: "copy" }],
      attenders: [{ _id: false, user: "e-services" }],
      note: "matrix",
      ...data,
    },
  });
};
