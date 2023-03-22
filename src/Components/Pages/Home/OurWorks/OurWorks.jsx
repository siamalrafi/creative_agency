import React from 'react';
import { styled } from '@mui/material/styles';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import LabTabs from './LabTabs';
import { Box } from '@mui/system';


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
    const [value, setValue] = React.useState('1');
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    const Item = styled("div")(({ theme }) => ({
        textAlign: 'center',
    }));


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
                        <LabTabs />

                    </RightTab>
                </Item>
            </Box>


        </div >
    );
};

export default OurWorks;