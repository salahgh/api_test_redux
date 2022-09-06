import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const covidAPI = createApi({
    reducerPath: 'covidAPI',
    baseQuery: fetchBaseQuery(
        {
            baseUrl: 'https://covid-19-statistics.p.rapidapi.com/', prepareHeaders:
                (headers) => {
                    headers.set('Access-Control-Allow-Origin', '*')
                    headers.set('X-RapidAPI-Key', '159861bca2msh874b238e92ccd64p141103jsn36418bbe7b5d')
                    headers.set('X-RapidAPI-Host', 'covid-19-statistics.p.rapidapi.com')
                    return headers
                }
        }),
    endpoints:
        (builder) => ({
            getReports: builder.query({
                query: () => `reports/total`,
            }),
            getRegions: builder.query({
                query: () => `regions`,
            }),
            getReport: builder.query({
                query: (args) => {
                    const {date, q, region_name, iso, region_province, city_name} = args;
                    return {
                        url: 'reports',
                        params: args
                    }
                }
            }),
        }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {useGetReportsQuery, useGetRegionsQuery, useGetReportQuery} = covidAPI