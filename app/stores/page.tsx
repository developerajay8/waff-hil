import React from 'react'
import StoresHero from '../components/stores/StoresHero'
import WhereWeAreGrid from '../components/stores/WhereWeAreGrid'
import ExpansionBlueprint from '../components/stores/ExpansionBlueprint'

export default function page() {
  return (
    <div>
      <StoresHero/>
      <WhereWeAreGrid/>
      <ExpansionBlueprint/>
    </div>
  )
}
