
import React from 'react';
import { Typography } from '@mui/material';

const serviceTitlte = ({ title, colored, sx }) => {
    return (
        <div>
            <div>
                <Typography
                    sx={{
                        fontSize: '34px',
                        fontWeight: 'bold',
                        textAlign: 'center',
                        ...sx,
                    }}
                >
                    {title}{' '}
                    {colored && <span style={{ color: '#7AB259' }}>{colored}</span>}
                </Typography>
            </div>

        </div>
    );
};

export default serviceTitlte;