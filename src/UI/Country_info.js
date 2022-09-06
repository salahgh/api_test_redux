import {Button, Dialog, DialogActions, DialogContent, DialogTitle, Stack} from "@mui/material";
import country_data from "../utilities/all.json";
import {useDispatch, useSelector} from "react-redux";
import {selectOpen, setOpen} from "../features/selectedCountrySlice/openSlice";
import {selectSelectedCountry} from "../features/selectedCountrySlice/selectedCountrySlice";

export const CountryInfo = () => {

    const open = useSelector(selectOpen)
    const iso = useSelector(selectSelectedCountry)

    const dispach = useDispatch()

    const country = country_data && country_data.filter((item) => item.alpha_3 === iso)

    return (
        <Dialog open={open}>
            <DialogTitle>title</DialogTitle>
            <DialogContent>
                <Stack>
                    {JSON.stringify(country)}
                </Stack>
            </DialogContent>
            <DialogActions>
                <Button onClick={()=> dispach(setOpen(false))}>ok</Button>
            </DialogActions>
        </Dialog>
    )
}