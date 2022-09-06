import * as React from 'react';
import {useState} from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import {red} from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {useGetReportQuery} from "../features/covid/covidAPI";
import {CardActionArea, CircularProgress} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {selectOpen, setOpen} from "../features/selectedCountrySlice/openSlice";
import {setSelectedIso} from "../features/selectedCountrySlice/selectedCountrySlice";

const country_data = require('../utilities/all.json');

const dimention = ['256x192', '160x120', '112x84']

export default function RecipeReviewCard({region}) {

    const {iso, name} = region;
    const dispatch = useDispatch();
    const report = useGetReportQuery({
        date: '2020-04-16',
        // q: 'us aLabama',
        // region_name: 'US',
        iso: iso,
        // region_province: 'Alabama',
        // city_name: ''
    })

    const country = country_data && country_data.filter((item) => item.alpha_3 === iso)

    return (
        <Card sx={{maxWidth: 345}}>
            <CardActionArea onClick={() => {
                dispatch(setOpen(true))
                dispatch(setSelectedIso(iso))
            }
            }>
                <CardHeader
                    avatar={
                        <Avatar variant={'rounded'} sx={{bgcolor: red[500], height: 50, width: 50, borderBlock: 1}}
                                aria-label="recipe"
                                src={"https://flagcdn.com/" +
                                    (country[0] && country[0].alpha_2.toLocaleLowerCase()) + ".svg "}>
                            alt={region.iso}>
                        </Avatar>
                    }
                    action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon/>
                        </IconButton>
                    }
                    title={name}
                    subheader={iso}
                />
            </CardActionArea>

            <CardContent>
                {report.isLoading && <CircularProgress/>}
                <Typography variant={'h2'} color="text.secondary">
                    {report.data && report.data.data.length}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon/>
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon/>
                </IconButton>
            </CardActions>

        </Card>
    );
}