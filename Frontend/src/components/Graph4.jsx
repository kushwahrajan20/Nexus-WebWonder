import React from 'react'
import { BarChart } from '@mui/x-charts/BarChart';

function Graph4() {

    const uData = [13.4,16.5,14.5,19.5,18.5,17.6,18.4,18.6,17.0,18.6,17.6,23.5,20.6,23.7,19.6,29.7,29.4,24.7,24.2,25.8,25.3,22.8,28.3];
    const pData = [2.53,4.58,4.51,5.43,3.92,4.19,4.00,4.27,2.89,3.66,4.23,6.74,7.00,6.43,5.29,9.63,7.94,6.47,7.57,8.88,9.34,6.72,11.9];
    const xLabels = [2001,2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023];

    return (
        <>
                <BarChart
                    width={600}
                    height={400}
                    series={[
                        { data: uData, label: 'Tree cover loss', id: 'uvId', stack: 'total' },
                        { data: pData, label: 'Tree cover loss from fire', id: 'pvId', stack: 'total' },
                    ]}
                    xAxis={[{ data: xLabels, scaleType: 'band' }]}
                />
        </>
    )
}

export default Graph4