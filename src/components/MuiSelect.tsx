import React, { useState } from 'react'
import { Box, TextField, MenuItem } from '@mui/material'

export const MuiSelect = () => {
    const [countries, setContries] = useState<string[]>([])
    console.log(countries)
    const handleChange = (event:React.ChangeEvent<HTMLInputElement>) =>{
        const value = event.target.value
        setContries(typeof value =='string' ? value.split(',') : value)
    }
  return (
    <Box width={250}>
        <TextField
            label="Select Country"
            select
            value={countries}
            onChange={handleChange}
            fullWidth
            SelectProps={{
                multiple: true
            }}
            size='small'
            color='secondary'
            helperText="ກະລຸນາເລືອກປະເທດ"
            error
            >
            <MenuItem value="TH">Thailand</MenuItem>
            <MenuItem value="US">USA</MenuItem>
            <MenuItem value="LA">Laos</MenuItem>
        </TextField>
    </Box>
  )
}
