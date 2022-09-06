import React, {useState} from 'react';
import './App.css';
import {Alert, AlertTitle, CircularProgress, Collapse, Grid, Paper, Stack} from "@mui/material";
import {useGetRegionsQuery, useGetReportQuery, useGetReportsQuery} from "./features/covid/covidAPI";
import {RenderData} from "./UI/RenderData";
import RecipeReviewCard from './UI/RecipeReviewCard'
import {Country_info, CountryInfo} from './UI/Country_info'

const renderLoading = () => (<CircularProgress/>)

const renderError = (error) => {
    return (
        <>
            <Collapse in={true} var>
                <Alert variant={'filled'} severity="error">
                    <AlertTitle>{error.status}</AlertTitle>
                    <strong>{JSON.stringify(error)}</strong>
                </Alert>
            </Collapse>
        </>
    )
}

function renderGrid(data) {
    return (
        <Grid container spacing={2}>
            {
                data && data.map((region) => (
                    <Grid item xs={4} key={region.iso + region.name}>
                        <RecipeReviewCard region={region}/>
                    </Grid>
                ))
            }
        </Grid>);
}

function App() {

    const {data, isFetching, isLoading, isError, error} = useGetReportsQuery();
    const regions = useGetRegionsQuery();

    return (
        <div className="App">
            <CountryInfo>

            </CountryInfo>
            <Stack alignItems={'center'} padding={20}>

                {data && <RenderData data={data.data}/>}
                {isError && renderError(error)}
                {(isLoading || isFetching) && renderLoading()}
                {
                    regions.data && regions.data.data && renderGrid(regions.data.data)
                }

            </Stack>
        </div>
    );
}

export default App;
