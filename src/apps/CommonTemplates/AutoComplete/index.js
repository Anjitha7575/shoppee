import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function FreeSoloCreateOption(props) {
    const { filterVal, setFilterVal, topSearchKeyWords, filterLabel = "Search", doSearchBasedOnVal } = props;

    const handleChange1 = (_, v) => {
        setFilterVal(v);
        doSearchBasedOnVal(v);
    }

    const handleChange2 = (e) => {
        setFilterVal(e.target.value);
    }

    return (
        <Autocomplete
            value={filterVal}
            onChange={handleChange1}
            selectOnFocus
            handleHomeEndKeys
            id="free-solo-with-text-demo"
            options={topSearchKeyWords}
            getOptionLabel={(option) => {
                if (typeof option === 'string') {
                    return option;
                }
                if (option.inputValue) {
                    return option.inputValue;
                }
                return option;
            }}
            renderOption={(props, option) => <li {...props}>{option}</li>}
            sx={{ width: 300 }}
            freeSolo
            renderInput={(params) => (
                <TextField onChange={handleChange2} {...params} label={filterLabel} />
            )}
        />
    );
}

