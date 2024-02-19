import './Navbar.css'
import React from 'react';
import DropDownOptions from './DropDownOptions.jsx'


function Navbar(props) {

    const div1 = React.useRef(null);
    const div2 = React.useRef(null);

    const [subToggle, setSubToggle] = React.useState(false);

    const [isShop, setIsShop] = React.useState(false);
    const [isMac, setIsMac] = React.useState(false);
    const [isIpad, setIsIpad] = React.useState(false);
    const [isIphone, setIsIphone] = React.useState(false);
    const [isWatch, setIsWatch] = React.useState(false);
    const [isAirpods, setIsAirpods] = React.useState(false);
    const [isTv, setIsTv] = React.useState(false);
    const [isEntertainment, setIsEntertainment] = React.useState(false);
    const [isAccessories, setIsAccessories] = React.useState(false);
    const [isSupport, setIsSupport] = React.useState(false);

    React.useEffect(() => {
        if (props.Toggle) {
            div1.current.style.transform = 'rotate(45deg)';
            div1.current.style.top = '12px';
            div1.current.style.right = '28.5px';

            div2.current.style.transform = 'rotate(-45deg)';
            div2.current.style.top = '12px';
            div2.current.style.right = '31px';
        }
        else {
            div1.current.style.transform = 'rotate(0deg)';
            div1.current.style.top = '8.5px';
            div1.current.style.right = '31px';

            div2.current.style.transform = 'rotate(0deg)';
            div2.current.style.top = '14.5px';
            div2.current.style.right = '31px';

            setSubToggle(false);
        }
    }, [props.Toggle]) //for = to X

    function setAllfalse() {
        setIsShop(false);
        setIsMac(false);
        setIsIpad(false);
        setIsIphone(false);
        setIsWatch(false);
        setIsAirpods(false);
        setIsTv(false);
        setIsEntertainment(false);
        setIsAccessories(false);
        setIsSupport(false);
    }

    return <>
        <div className={`w-[100%] h-[44px] z-40  ${props.Toggle ? '' : 'bg-[#161617CC] backdrop-filter backdrop-blur-lg bg-opacity-30'} flex justify-between md:justify-center gap-[2.75vw] sticky items-center top-0 `}>

            <div className="absolute top-1 left-5 w-5 h-5" style={{ display: subToggle ? "inline" : "none" }} onClick={() => { setSubToggle(!subToggle); setAllfalse(); }}>
                <svg height="48" fill='#FFFFFF' viewBox="0 0 9 48" width="9" xmlns="http://www.w3.org/2000/svg">
                    <path d="m1.5618 24.0621 6.5581-6.4238c.2368-.2319.2407-.6118.0088-.8486-.2324-.2373-.6123-.2407-.8486-.0088l-7 6.8569c-.1157.1138-.1807.2695-.1802.4316.001.1621.0674.3174.1846.4297l7 6.7241c.1162.1118.2661.1675.4155.1675.1577 0 .3149-.062.4326-.1846.2295-.2388.2222-.6187-.0171-.8481z"></path>
                </svg>
            </div>

            <svg fill='#FFFFFF' viewBox="0 0 17 48" className='ml-2 md:ml-0 w-[25px] md:w-[15px] h-[50px] md:h-[40px]' style={{ display: props.Toggle ? "none" : "inline" }}>
                <path d="m15.5752 19.0792a4.2055 4.2055 0 0 0 -2.01 3.5376 4.0931 4.0931 0 0 0 2.4908 3.7542 9.7779 9.7779 0 0 1 -1.2755 2.6351c-.7941 1.1431-1.6244 2.2862-2.8878 2.2862s-1.5883-.734-3.0443-.734c-1.42 0-1.9252.7581-3.08.7581s-1.9611-1.0589-2.8876-2.3584a11.3987 11.3987 0 0 1 -1.9373-6.1487c0-3.61 2.3464-5.523 4.6566-5.523 1.2274 0 2.25.8062 3.02.8062.734 0 1.8771-.8543 3.2729-.8543a4.3778 4.3778 0 0 1 3.6822 1.841zm-6.8586-2.0456a1.3865 1.3865 0 0 1 -.2527-.024 1.6557 1.6557 0 0 1 -.0361-.337 4.0341 4.0341 0 0 1 1.0228-2.5148 4.1571 4.1571 0 0 1 2.7314-1.4078 1.7815 1.7815 0 0 1 .0361.373 4.1487 4.1487 0 0 1 -.9867 2.587 3.6039 3.6039 0 0 1 -2.5148 1.3236z"></path>
            </svg>

            <div className='nav_content hidden md:flex '>Store</div>
            <div className='nav_content hidden md:flex '>Mac</div>
            <div className='nav_content hidden md:flex '>iPad</div>
            <div className='nav_content hidden md:flex '>iPhone</div>
            <div className='nav_content hidden md:flex '>Watch</div>
            <div className='nav_content hidden md:flex '>AirPods</div>
            <div className='nav_content hidden md:flex '>TV & Home</div>
            <div className='nav_content hidden md:flex '>Entertainment</div>
            <div className='nav_content hidden md:flex '>Accessories</div>
            <div className='nav_content hidden md:flex '>Support</div>

            <div className='w-[140px] md:w-[auto] mr-2  md:mr-0 nav_content gap-[2.75vw] flex'>

                <svg height="40" fill='#FFFFFF' viewBox="0 0 17 48" width="15" className='ml-4 md:ml-0 ' style={{ display: props.Toggle ? "none" : "inline" }}>
                    <path d="m16.2294 29.9556-4.1755-4.0821a6.4711 6.4711 0 1 0 -1.2839 1.2625l4.2005 4.1066a.9.9 0 1 0 1.2588-1.287zm-14.5294-8.0017a5.2455 5.2455 0 1 1 5.2455 5.2527 5.2549 5.2549 0 0 1 -5.2455-5.2527z"></path>
                </svg>

                <svg height="40" fill='#ffffff' viewBox="0 0 17 48" width="15" className='ml-4 md:ml-0 ' style={{ display: props.Toggle ? "none" : "inline" }}>
                    <path d="m13.4575 16.9268h-1.1353a3.8394 3.8394 0 0 0 -7.6444 0h-1.1353a2.6032 2.6032 0 0 0 -2.6 2.6v8.9232a2.6032 2.6032 0 0 0 2.6 2.6h9.915a2.6032 2.6032 0 0 0 2.6-2.6v-8.9231a2.6032 2.6032 0 0 0 -2.6-2.6001zm-4.9575-2.2768a2.658 2.658 0 0 1 2.6221 2.2764h-5.2442a2.658 2.658 0 0 1 2.6221-2.2764zm6.3574 13.8a1.4014 1.4014 0 0 1 -1.4 1.4h-9.9149a1.4014 1.4014 0 0 1 -1.4-1.4v-8.9231a1.4014 1.4014 0 0 1 1.4-1.4h9.915a1.4014 1.4014 0 0 1 1.4 1.4z">
                    </path>
                </svg>

                <div className='ml-4 pt-[2px] flex flex-col md:hidden' onClick={() => { props.setToggle(!props.Toggle); }}>
                    <div id="container">
                        <div id="div1" ref={div1} className='text-[#FDFDFD] absolute font-medium z-50 top-[8.5px] right-[31px]'>—</div>
                        <div id="div2" ref={div2} className='text-[#FDFDFD] absolute font-medium z-40 top-[14.5px] right-[31px]'>—</div>
                    </div>
                </div>

            </div>
        </div>


        {/* slider code */}
        <div className='absolute top-0 left-0 w-full  bg-[#161617] z-20 transition-all duration-500 overflow-y-auto' style={{ height: props.Toggle ? "100vh" : "0" }}>

            <div className='absolute top-[47px] ' style={{ display: subToggle ? "none" : "inline" }}>

                <div className='flex flex-col gap-3'>
                    <div className='text-white text-3xl ml-[48px] transition-all duration-350' style={{ display: props.Toggle ? "inline" : "none" }} onClick={() => { setSubToggle(true); setIsShop(!isShop) }} >Store</div>
                    <div className='text-white text-3xl ml-[48px] transition-all duration-350' style={{ display: props.Toggle ? "inline" : "none" }} onClick={() => { setSubToggle(true); setIsMac(!isMac); }} >Mac</div>
                    <div className='text-white text-3xl ml-[48px] transition-all duration-350' style={{ display: props.Toggle ? "inline" : "none" }} onClick={() => { setSubToggle(true); setIsIpad(!isIpad); }} >iPad</div>
                    <div className='text-white text-3xl ml-[48px] transition-all duration-350' style={{ display: props.Toggle ? "inline" : "none" }} onClick={() => { setSubToggle(true); setIsIphone(!isIphone) }} >iPhone</div>
                    <div className='text-white text-3xl ml-[48px] transition-all duration-350' style={{ display: props.Toggle ? "inline" : "none" }} onClick={() => { setSubToggle(true); setIsWatch(!isWatch) }} >Watch</div>
                    <div className='text-white text-3xl ml-[48px] transition-all duration-350' style={{ display: props.Toggle ? "inline" : "none" }} onClick={() => { setSubToggle(true); setIsAirpods(!isAirpods) }} >AirPods</div>
                    <div className='text-white text-3xl ml-[48px] transition-all duration-350' style={{ display: props.Toggle ? "inline" : "none" }} onClick={() => { setSubToggle(true); setIsTv(!isTv) }} >TV & Home</div>
                    <div className='text-white text-3xl ml-[48px] transition-all duration-350' style={{ display: props.Toggle ? "inline" : "none" }} onClick={() => { setSubToggle(true); setIsEntertainment(!isEntertainment) }} >Entertainment</div>
                    <div className='text-white text-3xl ml-[48px] transition-all duration-350' style={{ display: props.Toggle ? "inline" : "none" }} onClick={() => { setSubToggle(true); setIsAccessories(!isAccessories) }} >Accessories</div>
                    <div className='text-white text-3xl ml-[48px] transition-all duration-350' style={{ display: props.Toggle ? "inline" : "none" }} onClick={() => { setSubToggle(true); setIsSupport(!isSupport); }} >Support</div>
                </div>

            </div>
            <div>
                <DropDownOptions Toggle={props.Toggle} setToggle={props.setToggle} subToggle={subToggle} setSubToggle={setSubToggle} shop={isShop} setShop={setIsShop} mac={isMac} setMac={setIsMac} ipad={isIpad} setIpad={setIsIpad} iphone={isIphone} setIphone={setIsIphone} watch={isWatch} setWatch={setIsWatch} airpods={isAirpods} setAirpods={setIsAirpods} tv={isTv} setTv={setIsTv} ent={isEntertainment} setEnt={setIsEntertainment} acc={isAccessories} setAcc={setIsAccessories} sup={isSupport} setSup={setIsSupport} />
            </div>
        </div>
    </>
}

export default Navbar;