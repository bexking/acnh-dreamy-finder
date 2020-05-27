import React from 'react'
import '../css/home.css';
import { Button } from '../../components/js/button';

export default function home() {
    return (
        <div>
            <div className="intro">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                <Button>Get Started</Button>
            </div>
        </div>
    )
}
