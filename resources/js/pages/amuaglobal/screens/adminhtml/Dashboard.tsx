import { type JSX } from "react"
import { ContentLayout } from "../../layout"

export default function Dashboard() {

  return (
    <div>
      <h3>conten of admin dashboard</h3>
    </div>
  )
}

Dashboard.layout = (page: JSX.Element) => <ContentLayout>{page}</ContentLayout>