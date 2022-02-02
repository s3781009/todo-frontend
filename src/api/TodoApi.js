import React from "react";
import axios from "axios";

export const PostItemsApi = (todo, api, token) => {
  axios
    .post(api, todo, {
      headers: {
        Authorization: token,
      },
    })
    .then((r) => console.log(r));
};

export const UpdateItemsApi = (todo, api, token) => {
  axios
    .patch(api, todo, {
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
        Authorization: token,
      },
      data: {
        datetime: datetime,
      },
    })
    .then((r) => console.log(r));
};
