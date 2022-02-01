import React from "react";
import axios from "axios";

export const GetTodosApi = (token, api) => {
     return axios.get(api, {
        headers: {Authorization: token},
    })
};
export const PostItemsApi = (todo, api, token) => {
  console.log(JSON.stringify(todo));
  axios
    .post(api, todo, {
      headers: {
        Authorization: token,
      },
    })
    .then((r) => console.log(r));
};
export const CallDeleteItemApi = (datetime, api, token) => {
    console.log(token);
  axios
    .delete(api, {
      headers: {
        Authorization:token
      },
      data: {
        datetime:datetime
      },
    })
    .then((r) => console.log(r));
};
