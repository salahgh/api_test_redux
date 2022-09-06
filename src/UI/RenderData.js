import {Typography} from "@mui/material";

export const RenderData = ({data}) => {

    const {date, confirmed, deaths, recovered, active} = data

    return (
        < >
            < Typography
                variant={'h3'}>
                date
            < /Typography>

            <Typography variant={'h4'} color={'orange'}>
                {date}
            </Typography>

            <Typography variant={'h3'}>
                confirmed
            </Typography>
            <Typography variant={'h4'} color={'orange'}>
                {confirmed}
            </Typography>
            <Typography variant={'h3'}>
                deaths
            </Typography>
            <Typography variant={'h4'} color={'orange'}>
                {deaths}
            </Typography>

            <Typography variant={'h3'}>
                recovered
            </Typography>
            <Typography variant={'h4'} color={'orange'}>
                {recovered}
            </Typography>

            <Typography variant={'h3'}>
                active
            </Typography>
            <Typography variant={'h4'} color={'orange'}>
                {active}
            </Typography>
        </>
    )

}