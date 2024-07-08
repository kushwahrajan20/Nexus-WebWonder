import React from 'react'

import { PieChart } from '@mui/x-charts/PieChart';
import { useDrawingArea } from '@mui/x-charts/hooks';
import { styled } from '@mui/material/styles';

function Piegraph1() {

    const data = [
        { value: 37.2, label: 'Russia' },
        { value: 17.0, label: 'Canada' },
        { value: 14.0, label: 'United State' },
        { value: 8.06, label: 'Brazil' },
        { value: 1.88, label: 'India' },
        { value: 6.69, label: 'China' },
        
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

export default Piegraph1