"use client"
import CardKpi from "@/components/card/kpi"
import { Grid, Title } from "@mantine/core"

let kpis = [
  {
    id: 1,
    title: "Total Revenue",
    category: "General",
    value: 45231.89,
    insight: "+20.1% from last month",
  },
  {
    id: 2,
    title: "Total Revenue",
    category: "General",
    value: 45231.89,
    insight: "+20.1% from last month",
  },
  {
    id: 3,
    title: "Total Revenue",
    category: "Open / Follow-Up",
    value: 45231.89,
    insight: "+20.1% from last month",
  },
  {
    id: 4,
    title: "Total Revenue",
    category: "Open / Follow-Up",
    value: 45231.89,
    insight: "+20.1% from last month",
  },
  {
    id: 5,
    title: "Total Revenue",
    category: "General",
    value: 45231.89,
    insight: "+20.1% from last month",
  },
  {
    id: 6,
    title: "Total Revenue",
    category: "General",
    value: 45231.89,
    insight: "",
  },
  {
    id: 7,
    title: "Total Revenue",
    category: "Upcoming Renewals",
    value: 45231.89,
    insight: "+20.1% from last month",
  },
  {
    id: 8,
    title: "Total Revenue",
    category: "Upcoming Renewals",
    value: 45231.89,
    insight: "",
  },
]

export default function Dashboard() {
  return (
    <div className="space-y-4">
      <Title my={"1rem"}>General</Title>
      <Grid style={{ gridAutoRows: "1fr", alignItems: "stretch" }}>
        {kpis
          .filter((kpi) => kpi.category == "General")
          .map((kpi, index) => {
            return (
              <Grid.Col span={{ base: 3, sm: 2, md: 4, lg: 3 }} key={`${index}_${kpi?.id}`}>
                <CardKpi
                  
                  title={kpi?.title}
                  contentPrimary={kpi?.value}
                  contentSecondary={kpi?.insight}
                />
              </Grid.Col>
            )
          })}
      </Grid>
      <Title my={"1rem"}>Open / Follow-Up</Title>
      <Grid>
        {kpis
          .filter((kpi) => kpi.category == "Open / Follow-Up")
          .map((kpi, index) => {
            return (
              <Grid.Col span={{ base: 3, sm: 2, md: 4, lg: 3 }} key={`${index}_${kpi?.id}`}>
                <CardKpi
                  
                  title={kpi?.title}
                  contentPrimary={kpi?.value}
                  contentSecondary={kpi?.insight}
                />
              </Grid.Col>
            )
          })}
      </Grid>
      <Title my={"1rem"}>Upcoming Renewals</Title>
      <Grid>
        {kpis
          .filter((kpi) => kpi.category == "Upcoming Renewals")
          .map((kpi, index) => {
            return (
              <Grid.Col span={{ base: 3, sm: 2, md: 4, lg: 3 }} p={"1rem"} key={`${index}_${kpi?.id}`}>
                <CardKpi
                  
                  title={kpi?.title}
                  contentPrimary={kpi?.value}
                  contentSecondary={kpi?.insight}
                />
              </Grid.Col>
            )
          })}
      </Grid>
    </div>
  )
}
