import React from 'react'
import { BarChart } from '@mui/x-charts/BarChart';

function Graph2() {
    const rData = [1.83,2.70,3.03,3.52,1.59,2.23,2.34,3.05,2.11,1.86,3.02,5.39,4.97,4.49,2.33,5.05,5.29,5.56,3.69,5.44,6.52,4.29,3.35]
    const bData = [2.75,3.51,3.25,3.85,3.49,2.88,2.62,2.44,1.82,2.69,1.92,2.92,1.95,2.69,2.22,5.38,4.52,2.95,2.70,3.29,2.99,3.31,2.81]
    const cData = [1.36,2.32,1.61,2.71,2.92,2.41,2.12,1.95,1.55,2.10,2.16,2.55,2.81,2.64,2.73,2.08,2.56,2.14,2.18,1.20,2.52,2.30,8.57]
    const uData = [1.94,2.04,1.65,2.75,2.69,2.61,2.44,2.21,1.61,2.17,1.66,1.96,1.74,1.74,2.29,2.26,2.31,2.09,2.11,1.97,2.04,2.20,1.38]
    const iData = [0.74,0.85,0.54,1.29,1.18,1.43,1.39,1.40,1.94,1.28,1.54,2.26,1.14,1.89,1.75,2.42,1.30,1.22,1.18,0.96,0.84,0.88,1.40]
    const oData = [4.74,5.03,4.40,5.80,6.23,6.09,7.49,7.56,7.96,8.45,7.27,8.45,8.05,10.3,8.30,12.5,13.4,10.8,12.3,12.9,10.4,9.83,10.7]
    
    const xLabels = [2001,2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023];

    return (
        <>
                   <div className="overflow-x-scroll md:overflow-x-hidden">
                <BarChart
                    width={600}
                    height={400}
                    series={[
                        { data: rData, label: 'Rassia', id: 'rId', stack: 'total' },
                        { data: bData, label: 'Brazil', id: 'bId', stack: 'total' },
                        { data: cData, label: 'Canada', id: 'cId', stack: 'total' },
                        { data: uData, label: 'United States', id: 'uId', stack: 'total' },
                        { data: iData, label: 'India', id: 'iId', stack: 'total' },
                        { data: oData, label: 'Other', id: 'oId', stack: 'total' },
                    ]}
                    xAxis={[{ data: xLabels, scaleType: 'band' }]}
                />
            </div>
        </>
    )
}

export default Graph2