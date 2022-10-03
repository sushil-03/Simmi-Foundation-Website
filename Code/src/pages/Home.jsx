import React from 'react'
import Carousel from '../components/Carousel';
import Events from '../components/Events';
import Footer from '../components/Footer';
import Funding from '../components/Funding';
import Help from '../components/Help';
import Navbar from '../components/Navbar'
import Objective from '../components/Objective';
import Welcome from '../components/Welcome';
const Home = () => {
  return (
        <div className="  relative w-screen overflow-hidden min-h-screen">
                        {/* This will show mini navbar */}
                        <div className="w-screen font-noto">
                            <p className="whitespace-nowrap text-sm  p-2 z-10 animate-scroll_text origin-right">
                                Smart India Multi Management Institute! स्मार्ट इंडिया
                                बहुद्देश्यीय प्रबन्धन संस्थान! Registration number :
                                085953/2020 Niti Aayog (Govt. Of India ) Unique Id :
                                HR/2020/0258148
                            </p>
                        </div>

                            <Navbar />
                            <Carousel/>
                            <Welcome/>
                            <Objective/>
                            <Help/>
                            <Events/>
                            <Funding/>
                        <Footer/>
        </div>
  );
}

export default Home