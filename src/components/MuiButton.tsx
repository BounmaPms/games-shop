import {
    Stack,
    Button,
    IconButton,
    ButtonGroup,
    ToggleButton,
    ToggleButtonGroup
} from "@mui/material"

//Icon Import
import AbcIcon from '@mui/icons-material/Abc';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';

import { useState } from "react";

export const MuiButton = () => {
    const [formats, setFormats] = useState<string | null>(null)
    console.log(formats)
    const handleFormatChange = (
        _event: React.MouseEvent<HTMLElement>,
        updatedFormats: string | null
    ) => {
        setFormats(updatedFormats)
    }

    return (
        <Stack spacing={4}>
            <Stack spacing={2} direction={"row"}>
                <Button variant="text" href="https://www.google.com">Text</Button>
                <Button variant="contained">Contained</Button>
                <Button variant="outlined">Outlined</Button>
            </Stack>
            <Stack spacing={2} direction={"row"}>
                <Button variant="contained" color="primary">Primary</Button>
            </Stack>
            <Stack display={"block"} spacing={2} direction={"row"}>
                <Button variant="contained" size="small">Small</Button>
            </Stack>
            <Stack spacing={2} direction={"row"}>
                <Button variant="contained" startIcon={<AbcIcon />}>ABC</Button>
                <Button variant="contained" endIcon={<AbcIcon />}>ABC</Button>
                <IconButton aria-label="send" color="secondary"><AbcIcon /></IconButton>
            </Stack>
            <Stack direction={"row"}>
                <ButtonGroup variant="outlined" orientation="vertical" size="medium" aria-label="alignment button group">
                    <Button onClick={() => alert('Left Clicked')}>Left</Button>
                    <Button>Center</Button>
                    <Button>Right</Button>
                </ButtonGroup>
            </Stack>
            <Stack direction={"row"}>
                <ToggleButtonGroup
                    aria-label="text formatting"
                    value={formats}
                    onChange={handleFormatChange}
                    size='small'
                    color="success"
                    orientation="vertical"
                    exclusive
                >
                    <ToggleButton value={'bold'} aria-label="bold">
                        <FormatBoldIcon />
                    </ToggleButton>
                    <ToggleButton value={'italic'} aria-label="italic">
                        <FormatItalicIcon />
                    </ToggleButton>
                    <ToggleButton value={'underlined'} aria-label="underlined">
                        <FormatUnderlinedIcon />
                    </ToggleButton>
                </ToggleButtonGroup>

            </Stack>
        </Stack>
    )
}
