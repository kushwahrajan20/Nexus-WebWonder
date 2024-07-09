import React from 'react'
import { BarChart } from '@mui/x-charts/BarChart';


function Graph1() {
    const uData = [99.7, 99.5, 99.2, 98.8, 98.6, 98.3, 98.0, 97.7, 97.4, 97.2, 96.8, 96.6, 96.2, 95.9, 95.3, 94.8, 94.5, 94.1, 93.7, 93.3, 92.9, 92.6];
    const pData = [2.66, 2.49, 3.40, 3.33, 2.81, 2.90, 2.71, 2.80, 3.31, 2.75, 3.60, 2.64, 3.59, 2.93, 6.13, 5.00, 3.65, 3.75, 4.21, 3.75, 4.12, 3.74];

    const xLabels = [2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023];

    return (
        <>
            <BarChart
                width={600}
                height={400}
                series={[
                    {
                        data: pData,
                        label: ' Primary forest lose',
                        id: 'pvId',
                        yAxisKey: 'leftAxisId',
                    },
                    {
                        data: uData,
                        label: ' Primary forest extent remaining',
                        id: 'uvId',
                        yAxisKey: 'rightAxisId',
                    },
                ]}
                xAxis={[{ data: xLabels, scaleType: 'band' }]}
                yAxis={[{ id: 'leftAxisId' }, { id: 'rightAxisId' }]}
                rightAxis="rightAxisId"
            />

        </>
    )
}

export default Graph1