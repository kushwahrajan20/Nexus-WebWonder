import React from 'react'
import { BarChart } from '@mui/x-charts/BarChart';

function Graph3() {
    const fData =  [4.96,5.07,4.35,6.62,6.32,6.34,6.81,6.63,5.88,6.38,6.18,7.36,5.57,6.72,6.20,8.61,9.00,7.59,7.84,7.72,7.48,7.05,8.05]
    const sData =  [2.97,3.16,2.51,2.92,3.39,3.19,3.71,3.62,4.02,4.33,3.47,4.35,4.91,6.41,4.93,8.33,8.69,6.70,6.17,6.73,6.00,6.04,6.60]
    const wData =  [2.08,4.13,3.96,5.07,3.56,3.75,3.33,3.83,2.56,3.14,3.52,5.96,6.60,5.68,4.27,5.55,5.83,6.08,5.35,6.70,7.44,5.25,9.00]
    const urData = [0.13,0.12,0.10,0.15,0.15,0.16,0.16,0.13,0.10,0.11,0.10,0.12,0.10,0.13,0.11,0.15,0.19,0.16,0.14,0.15,0.14,0.13,0.12]
    const coData = [3.08,3.86,3.48,5.03,4.59,4.10,4.27,4.29,4.31,4.48,4.20,5.56,3.35,4.70,4.07,6.95,5.60,4.17,4.61,4.42,4.14,4.28,4.46]
    
    const xLabels = [2001,2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023];

    return (
        <>
            <div className="overflow-x-scroll md:overflow-x-hidden">

                <BarChart
                    width={600}
                    height={400}
                    series={[
                        { data: fData, label: 'Forestry', id: 'r3Id', stack: 'total' },
                        { data: sData, label: 'Shifting Agriculture', id: 'b3Id', stack: 'total' },
                        { data: wData, label: 'Wildfire', id: 'c3Id', stack: 'total' },
                        { data: urData, label: 'Urbanization', id: 'u3Id', stack: 'total' },
                        { data: coData, label: 'Commodity driven deforestation', id: 'i3Id', stack: 'total' },
                    ]}
                    xAxis={[{ data: xLabels, scaleType: 'band' }]}
                />
            </div>
        </>
    )
}

export default Graph3