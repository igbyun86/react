import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
    reducerPath: "api", //default api
    baseQuery: fetchBaseQuery({ baseUrl: "/" }),
    tagTypes: ["Count"],
    endpoints: (builder) => ({
        getCount: builder.query({
            query: ({ name }) => `hello/${name}`,

        }),
        setCount: builder.mutation({
            query: ({ name, value }) => {
                return {
                    url: `hello`,
                    method: "POST",
                    body: { helloId: value }
                };
            },
            invalidatesTags: (result, error, arg) => [{ type: "Count", id: arg.name }]
        })
    })
});

export const {useGetCountQuery, useSetCountMutation} = api;
// use + endpoints + Query(builder.query)의 이름으로 createApi가 hook 자동 생성
// use + endpoints + Mutation(builder.mutation)의 이름으로 createApi가 hook 자동 생성