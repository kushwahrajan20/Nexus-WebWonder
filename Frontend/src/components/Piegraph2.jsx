import React from 'react'

import { PieChart } from '@mui/x-charts/PieChart';
import { useDrawingArea } from '@mui/x-charts/hooks';
import { styled } from '@mui/material/styles';

function Piegraph2() {

    const data = [
        { value: 3.58, label: 'Stable forest' },
        { value: 131, label: 'Gain' },
        { value: 231, label: 'Loss' },
        { value: 308, label: 'Disturbed' },
    ];

    const size = {
        width: 600,
        height: 400,
    };

    const StyledText = styled('text')(({ theme }) => ({
        fill: theme.palette.text.primary,
        textAnchor: 'middle',
        dominantBaseline: 'central',
        fontSize: 20,
    }));

    function PieCenterLabel({ children }) {
        const { width, height, left, top } = useDrawingArea();
        return (
            <StyledText x={left + width / 2} y={top + height / 2}>
                {children}
            </StyledText>
        );
    }


    return (
        <>

            <div>
                <PieChart series={[{ data, innerRadius: 80 }]} {...size}>
                    <PieCenterLabel>Center label</PieCenterLabel>
                </PieChart>
            </div>

        </>
    )
}

export default Piegraph2