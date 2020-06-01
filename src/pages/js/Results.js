import React from 'react'
import Header from '../../components/js/header.jsx'
import BottomNav from '../../components/js/BottomNav.jsx'
import VillagerResults from '../../components/js/VillagerResults.jsx'

export default function Results({villagerInfo, selectedVillagers, selectedDrVillagers}) {

    let eachDreamy = selectedDrVillagers.map(dreamy => {
      return <VillagerResults villagerInfo={villagerInfo} selectedVillagers={selectedVillagers} dreamy={dreamy}/>
    });

    return (
        <div>
            <Header />
            <h2>3. Results</h2>
            <div className="allResults">{eachDreamy}</div>
            <BottomNav />
        </div>
    )
}
