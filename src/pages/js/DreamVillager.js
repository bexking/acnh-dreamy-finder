import React from 'react'
import Header from '../../components/js/header.jsx'
import BottomNav from '../../components/js/BottomNav.jsx'
import ChosenDisplay from '../../components/js/ChosenDisplay.jsx'

export default function DreamVillager({selectedVillagers, setSelectedVillagers}) {
    return (
    <div>
        <Header />
        <h2>2. Select Your Dream Villagers</h2>
        <ChosenDisplay spaces={10} selectedVillagers={selectedVillagers} setSelectedVillagers={setSelectedVillagers}/>
        <BottomNav />
    </div>
    )
}
