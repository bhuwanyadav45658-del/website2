import React from 'react';
import Hero from '../components/sections/Hero';
import WhatIsAI from '../components/sections/WhatIsAI';
import HowItWorks from '../components/sections/HowItWorks';
import Benefits from '../components/sections/Benefits';
import CTA from '../components/sections/CTA';

const Home = () => {
    React.useEffect(() => {
        document.title = '100xSolution | AI-Powered Marketing Automation';
    }, []);

    return (
        <>
            <Hero />
            <WhatIsAI />
            <HowItWorks />
            <Benefits />
            <CTA />
        </>
    );
};

export default Home;
