import React from 'react'
import Graph1 from './Graph1';
import Graph2 from './Graph2';
import Graph3 from './Graph3';
import Graph4 from './Graph4';
import Piegraph1 from './Piegraph1';
import Piegraph2 from './Piegraph2';

function DashGraph() {

    return (
        <>
            <div className="max-w-screen-2xl mt-14 container mx-auto md:px-20 px-4">
                <div className="mt-28 items-center justify-center text-center">
                    <h1 className="text-2xl md:text-4xl">Explore interactive <span className="text-green-600">charts and maps!</span></h1>
                    <p className="max-w-screen-lg mx-auto my-10">that summarize key statistics about global forests.
                        Statistics and global rankings – including rates of forest change,
                        forest extent and drivers of deforestation can be customized, easily
                        shared and downloaded for offline use.
                    </p>
                </div>

                <div className='hidden  md:max-w-screen-2xl border-2 md:border-green-600 rounded-lg m-4 mt-7 p-3 md:flex  transform transition-all hover:-translate-y-2 duration-300 hover:shadow-2xl'>
                    <div className="w-5/6 ">
                        <iframe id='maprandom' src="https://www.globalforestwatch.org/map/global/?mainMap=eyJoaWRlTGVnZW5kIjp0cnVlLCJzaG93QW5hbHlzaXMiOnRydWV9&map=eyJjZW50ZXIiOnsibGF0IjoyNy4yMDEyMTQ0OTAwODM4NCwibG5nIjoxMi4yMDA5NzAyMTcxNDQwMjR9LCJ6b29tIjoyLjAwMDAwMDAwMDAwMDAwMTgsImRhdGFzZXRzIjpbeyJkYXRhc2V0IjoicG9saXRpY2FsLWJvdW5kYXJpZXMiLCJsYXllcnMiOlsiZGlzcHV0ZWQtcG9saXRpY2FsLWJvdW5kYXJpZXMiLCJwb2xpdGljYWwtYm91bmRhcmllcyJdLCJib3VuZGFyeSI6dHJ1ZSwib3BhY2l0eSI6MSwidmlzaWJpbGl0eSI6dHJ1ZX1dfQ%3D%3D&mapMenu=eyJkYXRhc2V0Q2F0ZWdvcnkiOiJmb3Jlc3RDaGFuZ2UifQ%3D%3D&mapPrompts=eyJvcGVuIjp0cnVlLCJzdGVwc0tleSI6InJlY2VudEltYWdlcnkiLCJzdGVwc0luZGV4IjowfQ%3D%3D"
                            className="rounded-md"
                            frameborder="2"
                            height={650} width={1030}
                        >
                        </iframe>
                    </div>

                    <div className="w-1/6">

                        <button
                            onClick={() => document.getElementById("maprandom").src = "https://www.globalforestwatch.org/map/global/?mainMap=eyJoaWRlTGVnZW5kIjp0cnVlfQ%3D%3D&map=eyJjZW50ZXIiOnsibGF0IjoyNC44NzQ0ODg1NjgzODAxMjMsImxuZyI6NDEuMDYxMjkzMzUzNzU4NzF9LCJ6b29tIjoyLjA3ODQ2NTE4MzcyNjE5MSwiZGF0YXNldHMiOlt7ImRhdGFzZXQiOiJ0cmVlLWNvdmVyLWxvc3MiLCJvcGFjaXR5IjoxLCJ2aXNpYmlsaXR5Ijp0cnVlLCJsYXllcnMiOlsidHJlZS1jb3Zlci1sb3NzIl19LHsiZGF0YXNldCI6InBvbGl0aWNhbC1ib3VuZGFyaWVzIiwibGF5ZXJzIjpbImRpc3B1dGVkLXBvbGl0aWNhbC1ib3VuZGFyaWVzIiwicG9saXRpY2FsLWJvdW5kYXJpZXMiXSwiYm91bmRhcnkiOnRydWUsIm9wYWNpdHkiOjEsInZpc2liaWxpdHkiOnRydWV9XX0%3D&mapPrompts=eyJvcGVuIjp0cnVlLCJzdGVwc0tleSI6InJlY2VudEltYWdlcnkiLCJzdGVwc0luZGV4IjowfQ%3D%3D"}
                            className=" border-green-600  border-2 text-green-600 m-2 w-11/12 px-4 py-2 rounded-md hover:bg-green-100 duration-300">
                            Tree cover loss
                        </button>
                        <button
                            onClick={() => document.getElementById("maprandom").src = "https://www.globalforestwatch.org/map/global/?mainMap=eyJoaWRlTGVnZW5kIjp0cnVlfQ%3D%3D&map=eyJjZW50ZXIiOnsibGF0IjoyNC44NzQ0ODg1NjgzODAxMjMsImxuZyI6NDEuMDYxMjkzMzUzNzU4NzF9LCJ6b29tIjoyLjA3ODQ2NTE4MzcyNjE5MSwiZGF0YXNldHMiOlt7ImRhdGFzZXQiOiJ0cmVlLWNvdmVyLWdhaW4iLCJvcGFjaXR5IjoxLCJ2aXNpYmlsaXR5Ijp0cnVlLCJsYXllcnMiOlsidHJlZS1jb3Zlci1nYWluLTIwMDEtMjAyMCJdfSx7ImRhdGFzZXQiOiJwb2xpdGljYWwtYm91bmRhcmllcyIsImxheWVycyI6WyJkaXNwdXRlZC1wb2xpdGljYWwtYm91bmRhcmllcyIsInBvbGl0aWNhbC1ib3VuZGFyaWVzIl0sImJvdW5kYXJ5Ijp0cnVlLCJvcGFjaXR5IjoxLCJ2aXNpYmlsaXR5Ijp0cnVlfV19&mapPrompts=eyJvcGVuIjp0cnVlLCJzdGVwc0tleSI6InJlY2VudEltYWdlcnkiLCJzdGVwc0luZGV4IjowfQ%3D%3D"}
                            className=" border-green-600  border-2 text-green-600 m-2 w-11/12 px-4 py-2 rounded-md hover:bg-green-100 duration-300">
                            Tree cover gain
                        </button>
                        <button
                            onClick={() => document.getElementById("maprandom").src = "https://www.globalforestwatch.org/map/global/?map=eyJjZW50ZXIiOnsibGF0IjoyNC44NzQ0ODg1NjgzODAxMjMsImxuZyI6NDEuMDYxMjkzMzUzNzU4NzF9LCJ6b29tIjoyLjA3ODQ2NTE4MzcyNjE5MSwiZGF0YXNldHMiOlt7ImRhdGFzZXQiOiJOZXQtQ2hhbmdlLVNUQUdJTkciLCJvcGFjaXR5IjoxLCJ2aXNpYmlsaXR5Ijp0cnVlLCJsYXllcnMiOlsiZm9yZXN0LW5ldC1jaGFuZ2UiXX0seyJkYXRhc2V0IjoicG9saXRpY2FsLWJvdW5kYXJpZXMiLCJsYXllcnMiOlsiZGlzcHV0ZWQtcG9saXRpY2FsLWJvdW5kYXJpZXMiLCJwb2xpdGljYWwtYm91bmRhcmllcyJdLCJib3VuZGFyeSI6dHJ1ZSwib3BhY2l0eSI6MSwidmlzaWJpbGl0eSI6dHJ1ZX1dfQ%3D%3D&mapPrompts=eyJvcGVuIjp0cnVlLCJzdGVwc0tleSI6InJlY2VudEltYWdlcnkiLCJzdGVwc0luZGV4IjowfQ%3D%3D"}
                            className=" border-green-600  border-2 text-green-600 m-2 w-11/12 px-4 py-2 rounded-md hover:bg-green-100 duration-300">
                            Net change in tree cover
                        </button>
                        <button
                            onClick={() => document.getElementById("maprandom").src = "https://www.globalforestwatch.org/map/global/?mainMap=eyJoaWRlTGVnZW5kIjp0cnVlfQ%3D%3D&map=eyJjZW50ZXIiOnsibGF0IjoyNC44NzQ0ODg1NjgzODAxMjMsImxuZyI6NDEuMDYxMjkzMzUzNzU4NzF9LCJ6b29tIjoyLjA3ODQ2NTE4MzcyNjE5MSwiZGF0YXNldHMiOlt7ImRhdGFzZXQiOiJ0cmVlLWNvdmVyLWxvc3MtZmlyZXMiLCJvcGFjaXR5IjoxLCJ2aXNpYmlsaXR5Ijp0cnVlLCJsYXllcnMiOlsidHJlZS1jb3Zlci1sb3NzLWZpcmVzIl19LHsiZGF0YXNldCI6InBvbGl0aWNhbC1ib3VuZGFyaWVzIiwibGF5ZXJzIjpbImRpc3B1dGVkLXBvbGl0aWNhbC1ib3VuZGFyaWVzIiwicG9saXRpY2FsLWJvdW5kYXJpZXMiXSwiYm91bmRhcnkiOnRydWUsIm9wYWNpdHkiOjEsInZpc2liaWxpdHkiOnRydWV9XX0%3D&mapPrompts=eyJvcGVuIjp0cnVlLCJzdGVwc0tleSI6InJlY2VudEltYWdlcnkiLCJzdGVwc0luZGV4IjowfQ%3D%3D"}
                            className=" border-green-600  border-2 text-green-600 m-2 w-11/12 px-4 py-2 rounded-md hover:bg-green-100 duration-300">
                            Tree cover loss due to fires
                        </button>
                        <button
                            onClick={() => document.getElementById("maprandom").src = "https://www.globalforestwatch.org/map/global/?mainMap=eyJoaWRlTGVnZW5kIjp0cnVlfQ%3D%3D&map=eyJjZW50ZXIiOnsibGF0IjoyNC44NzQ0ODg1NjgzODAxMjMsImxuZyI6NDEuMDYxMjkzMzUzNzU4NzF9LCJ6b29tIjoyLjA3ODQ2NTE4MzcyNjE5MSwiZGF0YXNldHMiOlt7ImRhdGFzZXQiOiJ0cm9waWNhbC10cmVlLWNvdmVyIiwib3BhY2l0eSI6MSwidmlzaWJpbGl0eSI6dHJ1ZSwibGF5ZXJzIjpbInRyb3BpY2FsLXRyZWUtY292ZXItaGVjdGFyZSJdfSx7ImRhdGFzZXQiOiJwb2xpdGljYWwtYm91bmRhcmllcyIsImxheWVycyI6WyJkaXNwdXRlZC1wb2xpdGljYWwtYm91bmRhcmllcyIsInBvbGl0aWNhbC1ib3VuZGFyaWVzIl0sImJvdW5kYXJ5Ijp0cnVlLCJvcGFjaXR5IjoxLCJ2aXNpYmlsaXR5Ijp0cnVlfV19&mapPrompts=eyJvcGVuIjp0cnVlLCJzdGVwc0tleSI6InJlY2VudEltYWdlcnkiLCJzdGVwc0luZGV4IjowfQ%3D%3D"}
                            className=" border-green-600  border-2 text-green-600 m-2 w-11/12 px-4 py-2 rounded-md hover:bg-green-100 duration-300">
                            Tropical tree cover
                        </button>
                        <button
                            onClick={() => document.getElementById("maprandom").src = "https://www.globalforestwatch.org/map/global/?mainMap=eyJoaWRlTGVnZW5kIjp0cnVlfQ%3D%3D&map=eyJjZW50ZXIiOnsibGF0IjoyNC44NzQ0ODg1NjgzODAxMjMsImxuZyI6NDEuMDYxMjkzMzUzNzU4NzF9LCJ6b29tIjoyLjA3ODQ2NTE4MzcyNjE5MSwiZGF0YXNldHMiOlt7ImRhdGFzZXQiOiJwcmltYXJ5LWZvcmVzdHMiLCJvcGFjaXR5IjoxLCJ2aXNpYmlsaXR5Ijp0cnVlLCJsYXllcnMiOlsicHJpbWFyeS1mb3Jlc3RzLTIwMDEiXX0seyJkYXRhc2V0IjoicG9saXRpY2FsLWJvdW5kYXJpZXMiLCJsYXllcnMiOlsiZGlzcHV0ZWQtcG9saXRpY2FsLWJvdW5kYXJpZXMiLCJwb2xpdGljYWwtYm91bmRhcmllcyJdLCJib3VuZGFyeSI6dHJ1ZSwib3BhY2l0eSI6MSwidmlzaWJpbGl0eSI6dHJ1ZX1dfQ%3D%3D&mapPrompts=eyJvcGVuIjp0cnVlLCJzdGVwc0tleSI6InJlY2VudEltYWdlcnkiLCJzdGVwc0luZGV4IjowfQ%3D%3D"}
                            className=" border-green-600  border-2 text-green-600 m-2 w-11/12 px-4 py-2 rounded-md hover:bg-green-100 duration-300">
                            Primary forest
                        </button>
                        <button
                            onClick={() => document.getElementById("maprandom").src = "https://www.globalforestwatch.org/map/global/?map=eyJjZW50ZXIiOnsibGF0IjoyNC41MTU0NDE1OTI2MDE3MTQsImxuZyI6NDEuOTE2OTI3NTExOTYzNTF9LCJ6b29tIjoyLjA1MDAwNzQ0MzIyNjYzOCwiZGF0YXNldHMiOlt7ImRhdGFzZXQiOiJmb3Jlc3QtbGFuZHNjYXBlLWludGVncml0eS1pbmRleCIsIm9wYWNpdHkiOjEsInZpc2liaWxpdHkiOnRydWUsImxheWVycyI6WyJmb3Jlc3QtbGFuZHNjYXBlLWludGVncml0eS1pbmRleC0yMDIxIl19LHsiZGF0YXNldCI6InBvbGl0aWNhbC1ib3VuZGFyaWVzIiwibGF5ZXJzIjpbImRpc3B1dGVkLXBvbGl0aWNhbC1ib3VuZGFyaWVzIiwicG9saXRpY2FsLWJvdW5kYXJpZXMiXSwiYm91bmRhcnkiOnRydWUsIm9wYWNpdHkiOjEsInZpc2liaWxpdHkiOnRydWV9XX0%3D&mapPrompts=eyJvcGVuIjp0cnVlLCJzdGVwc0tleSI6InJlY2VudEltYWdlcnkiLCJzdGVwc0luZGV4IjowfQ%3D%3D"}
                            className=" border-green-600  border-2 text-green-600 m-2 w-11/12 px-4 py-2 rounded-md hover:bg-green-100 duration-300">
                            Forest landscape integrity index
                        </button>
                        <button
                            onClick={() => document.getElementById("maprandom").src = "https://www.globalforestwatch.org/map/global/?map=eyJjZW50ZXIiOnsibGF0IjoyNi4xNDkzMzU2NDg0MzM3MiwibG5nIjo1My41OTYwNTUzMDg0ODc1Mn0sInpvb20iOjIuODMyMjE1OTA1Nzc0MjU1LCJkYXRhc2V0cyI6W3siZGF0YXNldCI6ImxhbmQtY292ZXIiLCJvcGFjaXR5IjoxLCJ2aXNpYmlsaXR5Ijp0cnVlLCJsYXllcnMiOlsibGFuZC1jb3Zlci0yMDE1Il19LHsiZGF0YXNldCI6InBvbGl0aWNhbC1ib3VuZGFyaWVzIiwibGF5ZXJzIjpbImRpc3B1dGVkLXBvbGl0aWNhbC1ib3VuZGFyaWVzIiwicG9saXRpY2FsLWJvdW5kYXJpZXMiXSwiYm91bmRhcnkiOnRydWUsIm9wYWNpdHkiOjEsInZpc2liaWxpdHkiOnRydWV9XX0%3D&mapPrompts=eyJvcGVuIjp0cnVlLCJzdGVwc0tleSI6InJlY2VudEltYWdlcnkiLCJzdGVwc0luZGV4IjowfQ%3D%3D"}
                            className=" border-green-600  border-2 text-green-600 m-2 w-11/12 px-4 py-2 rounded-md hover:bg-green-100 duration-300">
                            Land cover
                        </button>
                        <button
                            onClick={() => document.getElementById("maprandom").src = "https://www.globalforestwatch.org/map/global/?map=eyJjZW50ZXIiOnsibGF0IjoyNi4xNDkzMzU2NDg0MzM3MiwibG5nIjo1My41OTYwNTUzMDg0ODc1Mn0sInpvb20iOjIuODMyMjE1OTA1Nzc0MjU1LCJkYXRhc2V0cyI6W3siZGF0YXNldCI6IndkcGEtcHJvdGVjdGVkLWFyZWFzIiwib3BhY2l0eSI6MSwidmlzaWJpbGl0eSI6dHJ1ZSwibGF5ZXJzIjpbIndkcGEtcHJvdGVjdGVkLWFyZWFzIl19LHsiZGF0YXNldCI6InBvbGl0aWNhbC1ib3VuZGFyaWVzIiwibGF5ZXJzIjpbImRpc3B1dGVkLXBvbGl0aWNhbC1ib3VuZGFyaWVzIiwicG9saXRpY2FsLWJvdW5kYXJpZXMiXSwiYm91bmRhcnkiOnRydWUsIm9wYWNpdHkiOjEsInZpc2liaWxpdHkiOnRydWV9XX0%3D&mapPrompts=eyJvcGVuIjp0cnVlLCJzdGVwc0tleSI6InJlY2VudEltYWdlcnkiLCJzdGVwc0luZGV4IjowfQ%3D%3D"}
                            className=" border-green-600  border-2 text-green-600 m-2 w-11/12 px-4 py-2 rounded-md hover:bg-green-100 duration-300">
                            Protected Areas
                        </button>
                        <button
                            onClick={() => document.getElementById("maprandom").src = "https://www.globalforestwatch.org/map/global/?map=eyJjZW50ZXIiOnsibGF0IjoyNC4yMDEyMzA2OTY3MjI1NSwibG5nIjo1MS4zNjk3MzE1OTU4Mjk5OX0sInpvb20iOjIuNzAxNjE5NzYzODA0MjI5NiwiZGF0YXNldHMiOlt7ImRhdGFzZXQiOiJtYWpvci1kYW1zIiwib3BhY2l0eSI6MSwidmlzaWJpbGl0eSI6dHJ1ZSwibGF5ZXJzIjpbIm1ham9yLWRhbXMtMjAxNCJdfSx7ImRhdGFzZXQiOiJwb2xpdGljYWwtYm91bmRhcmllcyIsImxheWVycyI6WyJkaXNwdXRlZC1wb2xpdGljYWwtYm91bmRhcmllcyIsInBvbGl0aWNhbC1ib3VuZGFyaWVzIl0sImJvdW5kYXJ5Ijp0cnVlLCJvcGFjaXR5IjoxLCJ2aXNpYmlsaXR5Ijp0cnVlfV19&mapPrompts=eyJvcGVuIjp0cnVlLCJzdGVwc0tleSI6InJlY2VudEltYWdlcnkiLCJzdGVwc0luZGV4IjowfQ%3D%3D"}
                            className=" border-green-600  border-2 text-green-600 m-2 w-11/12 px-4 py-2 rounded-md hover:bg-green-100 duration-300">
                            Major dams
                        </button>

                    </div>

                </div>

                <div className="flex flex-col md:flex-row ">
                    <div className="w-full md:w-1/2 text-center">

                        <div className="border-2 md:border-green-600 rounded-lg m-4 my-8 p-3 transform transition-all hover:-translate-y-2 duration-300 hover:shadow-2xl">
                            <h1 className="text-lg my-4 text-green-600">GLOBAL ANNUAL TREE COVER LOSS BY DOMINANT DRIVER</h1>
                            <p>Globally from 2001 to 2023, 22% of tree cover loss occurred in areas where the dominant drivers of loss resulted in deforestation.</p>
                            <Graph3 />
                        </div>
                        <div className="border-2 md:border-green-600 rounded-lg m-4 my-8 p-3 transform transition-all hover:-translate-y-2 duration-300 hover:shadow-2xl">

                            <h1 className="text-lg my-4 text-green-600">
                                COMPONENTS OF NET CHANGE IN TREE COVER GLOBALLY
                            </h1>
                            <p>From 2000 to 2020, the world experienced a net change of -101 Mha (-2.4%) in tree cover.</p>
                            <Piegraph2 />
                        </div>

                        <div className="border-2 shadow-md md:border-green-600 rounded-lg m-4 my-8 p-3 transform transition-all hover:-translate-y-2 duration-300 hover:shadow-2xl">

                            <h1 className="text-lg my-4 text-green-600 m-4">GLOBAL PRIMARY FOREST LOSS</h1>
                            <p>
                                From 2002 to 2023, there was a total of 76.3 Mha humid primary forest lost globally, making up 16% of its total tree cover loss in the same time period. Total area of humid primary forest decreased globally by 7.4% in this time period.
                            </p>

                            <Graph1/>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 text-center">

                        <div className="border-2 md:border-green-600 rounded-lg m-4 my-8 p-3 transform transition-all hover:-translate-y-2 duration-300 hover:shadow-2xl">

                            <h1 className="text-lg my-4 text-green-600">
                                GLOBAL TREE COVER GAIN
                            </h1>
                            <p>From 2000 to 2020, 131 Mha of tree cover was gained globally.</p>

                            <Piegraph1 />
                        </div>


                        <div className="border-2 md:border-green-600 rounded-lg m-4 my-8 p-3 transform transition-all hover:-translate-y-2 duration-300 hover:shadow-2xl">
                            <h1 className="text-lg my-4 text-green-600">
                                GLOBAL ANNUAL TREE COVER LOSS
                            </h1>
                            <p>
                                From 2001 to 2023, there was a total of 488 Mha of tree cover loss globally, equivalent to a 12% decrease in tree cover since 2000 and 207 Gt of CO₂ emissions.
                            </p>
                            <Graph2 />
                        </div>

                        <div className="border-2 md:border-green-600 rounded-lg m-4 my-8 p-3 transform transition-all hover:-translate-y-2 duration-300 hover:shadow-2xl">
                            <h1 className="text-lg my-4 text-green-600">GLOBAL ANNUAL TREE COVER LOSS FROM FIRES</h1>
                            <p>From 2001 to 2023, there was a total of 138 Mha tree cover lost from fires globally and 350 Mha from all other drivers of loss. The year with the most tree cover loss due to fires during this period was 2023 with 11.9 Mha lost to fires — 42% of all tree cover loss for that year.</p>
                            <Graph4 />
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default DashGraph