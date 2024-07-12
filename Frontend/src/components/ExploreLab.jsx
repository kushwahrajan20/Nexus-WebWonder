import React from 'react'

function ExploreLab() {
  return (
    <>
      <div className=''>
        <div className='mt-20 border-2 h-screen overflow-y-scroll fixed ml-auto'>
          <div
            onClick={() => document.getElementById("view360").src = "https://www.globalforestwatch.org/map/global/?map=eyJjZW50ZXIiOnsibGF0IjoyNC4yMDEyMzA2OTY3MjI1NSwibG5nIjo1MS4zNjk3MzE1OTU4Mjk5OX0sInpvb20iOjIuNzAxNjE5NzYzODA0MjI5NiwiZGF0YXNldHMiOlt7ImRhdGFzZXQiOiJtYWpvci1kYW1zIiwib3BhY2l0eSI6MSwidmlzaWJpbGl0eSI6dHJ1ZSwibGF5ZXJzIjpbIm1ham9yLWRhbXMtMjAxNCJdfSx7ImRhdGFzZXQiOiJwb2xpdGljYWwtYm91bmRhcmllcyIsImxheWVycyI6WyJkaXNwdXRlZC1wb2xpdGljYWwtYm91bmRhcmllcyIsInBvbGl0aWNhbC1ib3VuZGFyaWVzIl0sImJvdW5kYXJ5Ijp0cnVlLCJvcGFjaXR5IjoxLCJ2aXNpYmlsaXR5Ijp0cnVlfV19&mapPrompts=eyJvcGVuIjp0cnVlLCJzdGVwc0tleSI6InJlY2VudEltYWdlcnkiLCJzdGVwc0luZGV4IjowfQ%3D%3D"}
            className='bg-[url("https://tse1.mm.bing.net/th?id=OIP.5_RtLfTs1XW-oDsdrd1a2gHaEK&pid=Api&P=0&h=180")] h-20 w-20 bg-black m-2 hover:outline-2 outline-white'></div>
        </div>
        <div>
          <iframe id='view360' src="https://www.globalforestwatch.org/dashboards/global/" width={1500} height={890} allowFullScreen frameborder="0"></iframe>
        </div>
      </div>
    </>
  )
}

export default ExploreLab