import React from 'react'
import Header from '../../components/js/header.jsx'
import BottomNav from '../../components/js/BottomNav.jsx'
import ChosenDisplay from '../../components/js/chosenDisplay.jsx'

export default function DreamVillager({selectedVillagers, setSelectedVillagers, villagerInfo, prevSelectedVillagers}) {
    return (
    <div className="villagerSelectorPage">
        <Header />
        <h2>2. Select Your Dream Villagers</h2>
        <ChosenDisplay spaces={10} villagerInfo={villagerInfo} selectedVillagers={selectedVillagers} setSelectedVillagers={setSelectedVillagers} prevSelectedVillagers={prevSelectedVillagers}/>
        <BottomNav nextDisabled={selectedVillagers.length === 0}/>
    </div>
    )
}
