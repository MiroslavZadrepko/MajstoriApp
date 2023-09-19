import { Typography } from '@mui/material';
import React from 'react'

function OneRev({ majstor }) {

    console.log(majstor);
    const { craftsman_rev: [{ creator, review }] } = majstor;

    console.log(creator);

    return (
        <div>
            <Typography sx={{mb: 0}}>{review}</Typography>
            <Typography sx= {{mt:0}}>Napisao: {creator}</Typography>
        </div>
    )
}

export default OneRev