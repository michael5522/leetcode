import React from "react"
import { useParams, Link, NavLink, Outlet, useLoaderData } from "react-router-dom"

function getHostVans(id) {
  const url = id ? `/api/host/vans/${id}` : "/api/host/vans"
  const res = await fetch(url)
  if (!res.ok) {
    throw {
      message: "Failed to fetch vans",
      statusText: res.statusText,
      status: res.status
    }
  }
  const data = await res.json()
  return data.vans
}


export function loader({ params }) {
  return getHostVans(params.id)
}

export default function HostVanDetail() {
  const currentVan = useLoaderData()



  return (

          </NavLink>
        </nav>
        <Outlet context={{ currentVan }} />
      </div>
    </section>
  )
}
