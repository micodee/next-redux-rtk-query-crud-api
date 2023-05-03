import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const postApi = createApi({
  reducerPath: "postApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),
  endpoints: (builder) => ({
    getAllPost: builder.query({
      query: () => ({
        url: `/posts`,
        method: "GET",
      }),
    }),

    getPostById: builder.query({
      query: (id) => ({
        url: `/posts/${id}`,
        method: "GET",
      }),
    }),

    getPostByLimit: builder.query({
      query: (num) => ({
        url: `/posts?_limit=${num}`,
        method: "GET",
      }),
    }),

    deletePost: builder.mutation({
      query: (id) => ({
        url: `/posts/${id}`,
        method: "DELETE",
      }),
    }),

    createPost: builder.mutation({
      query: (newPost) => ({
        url: `/posts`,
        method: "POST",
        body: newPost,
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
      }),
    }),

    updatePost: builder.mutation({
      query: (updateData) => {
        const {id, ...data} = updateData
        console.log("Update Post: ", updateData);
        console.log("Actual Update Post: ", data);
        return {
          url: `/posts/${id}`,
          method: "PUT",
          body: data,
          headers: {
            "Content-Type": "application/json; charset=UTF-8",
          },
        };
      },
    }),

    
  }),
});

export const {
  useGetAllPostQuery,
  useGetPostByIdQuery,
  useGetPostByLimitQuery,
  useDeletePostMutation,
  useCreatePostMutation,
  useUpdatePostMutation,
} = postApi;
