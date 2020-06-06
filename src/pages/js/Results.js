import React from 'react'
import Header from '../../components/js/header.jsx'
import BottomNav from '../../components/js/BottomNav.jsx'
import VillagerResults from '../../components/js/VillagerResults.jsx'

export default function Results({villagerInfo, selectedVillagers, selectedDrVillagers, setSelectedVillagers, setSelectedDrVillagers}) {

    let eachDreamy = selectedDrVillagers.map(dreamy => {
      return <VillagerResults villagerInfo={villagerInfo} selectedVillagers={selectedVillagers} dreamy={dreamy}/>
    });

    if (selectedDrVillagers.length === 0) {
        window.location.replace("/");
    }

    return (
        <div>
            <Header />
            <h2>3. Results</h2>
            <div className="allResults">{eachDreamy}</div>
            <BottomNav setSelectedVillagers={setSelectedVillagers} setSelectedDrVillagers={setSelectedDrVillagers} />
        </div>
    )
}
