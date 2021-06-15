import React from 'react'
import Header from '../../components/js/header.jsx'
import BottomNav from '../../components/js/BottomNav.jsx'
import ChosenDisplay from '../../components/js/chosenDisplay.jsx'

export default function CurrentVillager({selectedVillagers, setSelectedVillagers, villagerInfo}) {
    return (
        <div className="villagerSelectorPage">
            <Header />
            <h2>1. Select Your Current Villagers</h2>
            <ChosenDisplay spaces={9} villagerInfo={villagerInfo} selectedVillagers={selectedVillagers} setSelectedVillagers={setSelectedVillagers} prevSelectedVillagers={[]}/>
            <BottomNav />
        </div>
    )
}
