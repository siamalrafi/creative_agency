import React from 'react';
import { styled } from '@mui/material/styles';
import { Box, textAlign } from '@mui/system';
import { Typography } from '@mui/material';



const Worktitle = styled('h1')(({ theme }) => ({
    textAlign: 'left',
    color: theme.palette.primary.green,
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(8),
    display: "inline-block",
    fontSize: "50px"

}));

const RightTab = styled("h2")(({ theme }) => ({
    textAlign: 'right',
    color: theme.palette.text.primary,
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(8),
    display: "inline-block",
    fontSize: "40px"
}))


const OurWorks = () => {
    const Item = styled("div")(({ theme }) => ({
        textAlign: 'center',
    }))

    return (
        <div>
            <Box sx={{
                display: 'flex',
                justifyContent: 'space-between',
                p: 1,
                m: 1,
                bgcolor: 'background.paper',
                borderRadius: 1,
            }}
            >
                <Item>
                    <Worktitle>
                        Here are our Some Works
                    </Worktitle>

                </Item>
                <Item>

                    <RightTab justifyContent="">
                        Hellow
                    </RightTab>
                </Item>
            </Box>


        </div >
    );
};

export default OurWorks;