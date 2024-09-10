import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = process.env.REACT_APP_API_BASE_URL;

export const blogApi = createApi({
  reducerPath: "blogApi",
  baseQuery: fetchBaseQuery({ baseUrl }),

  endpoints: (builder) => ({
    // get all blogs api function
    getAllBlogs: builder.mutation({
      query: (page) => ({
        url: `/blogs?page=${page}&limit=3`,
        method: "GET",
      }),
    }),

    // get single blog by id api function
    getBlogById: builder.mutation({
      query: (blogId) => ({
        url: `/blogs/${blogId}`,
        method: "GET",
      }),
    }),

    // create new blog api function
    createNewBlog: builder.mutation({
      query: (blogData) => ({
        url: "/blogs",
        method: "POST",
        body: blogData,
        credentials: true,
      }),
    }),
  }),
});

export const {
  useCreateNewBlogMutation,
  useGetAllBlogsMutation,
  useGetBlogByIdMutation,
} = blogApi;
