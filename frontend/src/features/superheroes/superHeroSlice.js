import { apiSlice } from "../../app/api/apiSlice";

export const superHeroApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getAllSuperHeroes: builder.mutation({
            query: () => ({
                url: "/api/superheroes",
                method: "GET",
            }),
        }),
        getSuperHero: builder.mutation({
            query: ({ _id }) => ({
                url: `/api/superheroes/${_id}`,
                method: "GET",
            }),
        }),
        postNewSuperHero: builder.mutation({
            query: (data) => ({
                url: "/api/superheroes",
                method: "POST",
                body: { ...data },
            }),
        }),
        updateSuperHero: builder.mutation({
            query: (data) => ({
                url: `/api/superheroes/${data._id}`,
                method: "PUT",
                body: { ...data },
            }),
        }),
        deleteSuperHero: builder.mutation({
            query: ({ _id }) => ({
                url: `/api/superheroes/${_id}`,
                method: "DELETE",
            }),
        }),
    }),
});

export const {
    useGetAllSuperHeroesMutation,
    usePostNewSuperHeroMutation,
    useUpdateSuperHeroMutation,
    useGetSuperHeroMutation,
    useDeleteSuperHeroMutation,
} = superHeroApiSlice;
