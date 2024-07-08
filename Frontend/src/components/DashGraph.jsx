import React from 'react'
import Graph1 from './Graph1';
import Graph2 from './Graph2';
import Graph3 from './Graph3';
import Graph4 from './Graph4';
import Piegraph from './Piegraph1';
import Piegraph1 from './Piegraph1';
import Piegraph2 from './Piegraph2';

function DashGraph() {

    return (
        <>
            <div className="max-w-screen-2xl mt-16 container mx-auto md:px-20 px-4">
                <div className="flex flex-col md:flex-row my-7">
                    <div className="w-full md:w-1/2 ">
                        <div>
                            Explore interactive charts and maps that summarize key statistics about global forests. Statistics and global rankings – including rates of forest change, forest extent and drivers of deforestation – can be customized, easily shared and downloaded for offline use.
                        </div>
                        <div>
                            <h1>GLOBAL PRIMARY FOREST LOSS</h1>
                            <p>
                                From 2002 to 2023, there was a total of 76.3 Mha humid primary forest lost globally, making up 16% of its total tree cover loss in the same time period. Total area of humid primary forest decreased globally by 7.4% in this time period.
                            </p>
                        </div>
                        <Graph1 />
                        <div>
                            <h1>
                                GLOBAL ANNUAL TREE COVER LOSS
                            </h1>
                            <p>
                                From 2001 to 2023, there was a total of 488 Mha of tree cover loss globally, equivalent to a 12% decrease in tree cover since 2000 and 207 Gt of CO₂ emissions.
                            </p>
                        </div>
                        <Graph2 />
                        <div>
                            <h1>GLOBAL ANNUAL TREE COVER LOSS BY DOMINANT DRIVER</h1>
                            <p>Globally from 2001 to 2023, 22% of tree cover loss occurred in areas where the dominant drivers of loss resulted in deforestation.</p>
                        </div>
                        <Graph3 />
                        <div>
                            <h1>GLOBAL ANNUAL TREE COVER LOSS FROM FIRES</h1>
                            <p>From 2001 to 2023, there was a total of 138 Mha tree cover lost from fires globally and 350 Mha from all other drivers of loss. The year with the most tree cover loss due to fires during this period was 2023 with 11.9 Mha lost to fires — 42% of all tree cover loss for that year.</p>
                        </div>
                        <Graph4 />
                    </div>
                    <div className="w-full md:w-1/2">

                        <div className="flex  flex-col">

                            <button 
                            onClick={()=>document.getElementById("maprandom").src = "https://www.globalforestwatch.org/map/global/?mainMap=eyJzaG93QW5hbHlzaXMiOnRydWV9&map=eyJkYXRhc2V0cyI6W3sib3BhY2l0eSI6MC43LCJ2aXNpYmlsaXR5Ijp0cnVlLCJkYXRhc2V0IjoicHJpbWFyeS1mb3Jlc3RzIiwibGF5ZXJzIjpbInByaW1hcnktZm9yZXN0cy0yMDAxIl19LHsiZGF0YXNldCI6InBvbGl0aWNhbC1ib3VuZGFyaWVzIiwibGF5ZXJzIjpbImRpc3B1dGVkLXBvbGl0aWNhbC1ib3VuZGFyaWVzIiwicG9saXRpY2FsLWJvdW5kYXJpZXMiXSwiYm91bmRhcnkiOnRydWUsIm9wYWNpdHkiOjEsInZpc2liaWxpdHkiOnRydWV9LHsiZGF0YXNldCI6InRyZWUtY292ZXItbG9zcyIsImxheWVycyI6WyJ0cmVlLWNvdmVyLWxvc3MiXSwib3BhY2l0eSI6MSwidmlzaWJpbGl0eSI6dHJ1ZSwidGltZWxpbmVQYXJhbXMiOnsic3RhcnREYXRlIjoiMjAwMi0wMS0wMSIsImVuZERhdGUiOiIyMDIzLTEyLTMxIiwidHJpbUVuZERhdGUiOiIyMDIzLTEyLTMxIn0sInBhcmFtcyI6eyJ0aHJlc2hvbGQiOjMwLCJ2aXNpYmlsaXR5Ijp0cnVlLCJhZG1fbGV2ZWwiOiJhZG0wIn19XX0%3D&mapMenu=eyJkYXRhc2V0Q2F0ZWdvcnkiOiJsYW5kQ292ZXIifQ%3D%3D"} 
                            className="btn btn-outline btn-info">GLOBAL PRIMARY FOREST LOSS
                            </button>

                            <button 
                            onClick={()=>document.getElementById("maprandom").src = "https://www.globalforestwatch.org/map/global/?mainMap=eyJzaG93QW5hbHlzaXMiOnRydWV9&map=eyJkYXRhc2V0cyI6W3siZGF0YXNldCI6InBvbGl0aWNhbC1ib3VuZGFyaWVzIiwibGF5ZXJzIjpbImRpc3B1dGVkLXBvbGl0aWNhbC1ib3VuZGFyaWVzIiwicG9saXRpY2FsLWJvdW5kYXJpZXMiXSwiYm91bmRhcnkiOnRydWUsIm9wYWNpdHkiOjEsInZpc2liaWxpdHkiOnRydWV9LHsiZGF0YXNldCI6InRyZWUtY292ZXItbG9zcyIsImxheWVycyI6WyJ0cmVlLWNvdmVyLWxvc3MiXSwib3BhY2l0eSI6MSwidmlzaWJpbGl0eSI6dHJ1ZSwidGltZWxpbmVQYXJhbXMiOnsic3RhcnREYXRlIjoiMjAwMS0wMS0wMSIsImVuZERhdGUiOiIyMDIzLTEyLTMxIiwidHJpbUVuZERhdGUiOiIyMDIzLTEyLTMxIn0sInBhcmFtcyI6eyJ0aHJlc2hvbGQiOjMwLCJ2aXNpYmlsaXR5Ijp0cnVlLCJhZG1fbGV2ZWwiOiJhZG0wIn19XX0%3D&mapMenu=eyJtZW51U2VjdGlvbiI6ImRhdGFzZXRzIiwiZGF0YXNldENhdGVnb3J5IjoibGFuZENvdmVyIn0%3D"}                             
                            className="btn btn-outline btn-success">GLOBAL ANNUAL TREE COVER LOSS</button>
                            
                            <button 
                            onClick={()=>document.getElementById("maprandom").src = "https://www.globalforestwatch.org/map/global/?mainMap=eyJzaG93QW5hbHlzaXMiOnRydWV9&map=eyJkYXRhc2V0cyI6W3siZGF0YXNldCI6InBvbGl0aWNhbC1ib3VuZGFyaWVzIiwibGF5ZXJzIjpbImRpc3B1dGVkLXBvbGl0aWNhbC1ib3VuZGFyaWVzIiwicG9saXRpY2FsLWJvdW5kYXJpZXMiXSwiYm91bmRhcnkiOnRydWUsIm9wYWNpdHkiOjEsInZpc2liaWxpdHkiOnRydWV9LHsiZGF0YXNldCI6InBvbGl0aWNhbC1ib3VuZGFyaWVzIiwibGF5ZXJzIjpbImRpc3B1dGVkLXBvbGl0aWNhbC1ib3VuZGFyaWVzIiwicG9saXRpY2FsLWJvdW5kYXJpZXMiXSwiYm91bmRhcnkiOnRydWUsIm9wYWNpdHkiOjEsInZpc2liaWxpdHkiOnRydWV9LHsiZGF0YXNldCI6InRyZWUtY292ZXItbG9zcy1ieS1kb21pbmFudC1kcml2ZXIiLCJsYXllcnMiOlsidHJlZS1jb3Zlci1sb3NzLWJ5LWRvbWluYW50LWRyaXZlciJdLCJvcGFjaXR5IjoxLCJ2aXNpYmlsaXR5Ijp0cnVlLCJ0aW1lbGluZVBhcmFtcyI6eyJzdGFydERhdGUiOiIyMDAxLTAxLTAxIiwiZW5kRGF0ZSI6IjIwMjMtMTItMzEiLCJ0cmltRW5kRGF0ZSI6IjIwMjMtMTItMzEifSwicGFyYW1zIjp7InRocmVzaG9sZCI6MzAsInZpc2liaWxpdHkiOnRydWUsImFkbV9sZXZlbCI6ImFkbTAifX1dfQ%3D%3D&mapMenu=eyJkYXRhc2V0Q2F0ZWdvcnkiOiJmb3Jlc3RDaGFuZ2UifQ%3D%3D"}                             
                            className="btn btn-outline btn-warning">GLOBAL ANNUAL TREE COVER LOSS BY DOMINANT DRIVER</button>

                            <button 
                            onClick={()=>document.getElementById("maprandom").src = "https://www.globalforestwatch.org/map/global/?mainMap=eyJzaG93QW5hbHlzaXMiOnRydWV9&map=eyJkYXRhc2V0cyI6W3siZGF0YXNldCI6InBvbGl0aWNhbC1ib3VuZGFyaWVzIiwibGF5ZXJzIjpbImRpc3B1dGVkLXBvbGl0aWNhbC1ib3VuZGFyaWVzIiwicG9saXRpY2FsLWJvdW5kYXJpZXMiXSwiYm91bmRhcnkiOnRydWUsIm9wYWNpdHkiOjEsInZpc2liaWxpdHkiOnRydWV9LHsiZGF0YXNldCI6InRyZWUtY292ZXItbG9zcy1maXJlcyIsImxheWVycyI6WyJ0cmVlLWNvdmVyLWxvc3MtZmlyZXMiXSwib3BhY2l0eSI6MSwidmlzaWJpbGl0eSI6dHJ1ZSwidGltZWxpbmVQYXJhbXMiOnsic3RhcnREYXRlIjoiMjAwMS0wMS0wMSIsImVuZERhdGUiOiIyMDIzLTEyLTMxIiwidHJpbUVuZERhdGUiOiIyMDIzLTEyLTMxIn0sInBhcmFtcyI6eyJ0aHJlc2hvbGQiOjMwLCJ2aXNpYmlsaXR5Ijp0cnVlLCJhZG1fbGV2ZWwiOiJhZG0wIn19XX0%3D&mapMenu=eyJkYXRhc2V0Q2F0ZWdvcnkiOiJmb3Jlc3RDaGFuZ2UifQ%3D%3D"}                             
                            className="btn btn-outline btn-error">GLOBAL ANNUAL TREE COVER LOSS FROM FIRES</button>
                        </div>

                        <div className="mt-10">
                            <iframe id='maprandom' src="https://www.globalforestwatch.org/map/?map=eyJkYXRhc2V0cyI6W3siZGF0YXNldCI6InBvbGl0aWNhbC1ib3VuZGFyaWVzIiwibGF5ZXJzIjpbImRpc3B1dGVkLXBvbGl0aWNhbC1ib3VuZGFyaWVzIiwicG9saXRpY2FsLWJvdW5kYXJpZXMiXSwib3BhY2l0eSI6MSwidmlzaWJpbGl0eSI6dHJ1ZX1dfQ%3D%3D" frameborder="0" height={2000} width={700}></iframe>
                        </div>
                    </div>
                </div>
                <div className="flex md:flex-row flex-col">
                    <div >
                        <div>
                            <h1>
                                GLOBAL TREE COVER GAIN
                            </h1>
                            <p>From 2000 to 2020, 131 Mha of tree cover was gained globally.</p>
                        </div>
                        <Piegraph1 />
                    </div>
                    <div>
                        <div>
                            <h1>
                                COMPONENTS OF NET CHANGE IN TREE COVER GLOBALLY
                            </h1>
                            <p>From 2000 to 2020, the world experienced a net change of -101 Mha (-2.4%) in tree cover.</p>
                        </div>
                        <Piegraph2 />
                    </div>
                </div>
            </div>
        </>
    )
}

export default DashGraph