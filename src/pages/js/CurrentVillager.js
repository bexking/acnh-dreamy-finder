import React from 'react'
import Header from '../../components/js/header.jsx'
import BottomNav from '../../components/js/BottomNav.jsx'
import ChosenDisplay from '../../components/js/ChosenDisplay.jsx'
import { RoundButton } from '../../components/js/RoundButton.jsx'

export default function CurrentVillager() {
    return (
        <div>
            <Header />
            <h2>1. Select Your Current Villagers (max. 9)</h2>
            <BottomNav />
            <ChosenDisplay />
            <RoundButton />
        </div>
    )
}
