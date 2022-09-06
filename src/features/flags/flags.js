import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const flagsAPI = createApi({
    reducerPath: 'flagsAPI',
    baseQuery: fetchBaseQuery(
        {
            baseUrl: 'https://countryflagsapi.com/'
        }),
    endpoints:
        (builder) => ({
            getFlags: builder.query({
                query: ({format,iso}) => `PNG/CHN`,
            }),
        }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {useGetFlagsQuery} = flagsAPI