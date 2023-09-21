import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
    baseUrl: "http://192.168.0.100:3500",
});

export const apiSlice = createApi({
    baseQuery,
    tagTypes: ["api"],
    endpoints: (builder) => ({}),
});
