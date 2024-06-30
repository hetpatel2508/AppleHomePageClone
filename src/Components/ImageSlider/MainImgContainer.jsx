// import {useState,useEffect,useRef} from 'react';

import {useState, useEffect, useRef } from "react";

function MainImgContainer(){
    
    // let count=0;
    const [count,setCount]=useState(0)
    const containerRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(true);                        
    const playSVG = (<svg className="ml-[5.5px] mt-[5.5px]" height="10px" width="12px" viewBox="0 0 512 512"><path d="M405.2,232.9L126.8,67.2c-3.4-2-6.9-3.2-10.9-3.2c-10.9,0-19.8,9-19.8,20H96v344h0.1c0,11,8.9,20,19.8,20  c4.1,0,7.5-1.4,11.2-3.4l278.1-165.5c6.6-5.5,10.8-13.8,10.8-23.1C416,246.7,411.8,238.5,405.2,232.9z"/></svg>)
    const pauseSVG = (<svg className="ml-[4.5px] mt-[5.5px]" height="10px" width="12px" viewBox="0 0 512 512"><g><path d="M224,435.8V76.1c0-6.7-5.4-12.1-12.2-12.1h-71.6c-6.8,0-12.2,5.4-12.2,12.1v359.7c0,6.7,5.4,12.2,12.2,12.2h71.6   C218.6,448,224,442.6,224,435.8z"/><path d="M371.8,64h-71.6c-6.7,0-12.2,5.4-12.2,12.1v359.7c0,6.7,5.4,12.2,12.2,12.2h71.6c6.7,0,12.2-5.4,12.2-12.2V76.1   C384,69.4,378.6,64,371.8,64z"/></g></svg>)
    
    useEffect(()=>{
        const container = containerRef.current;
        const indicator = document.querySelectorAll(".indicator");
        
        function moveFirstBox(){
            const firstBox = container.firstElementChild;
            
            const computedStyle = window.getComputedStyle(firstBox);
            const wid = computedStyle.minWidth;
            
            firstBox.style.minWidth = '0px';

            setTimeout(async ()=>{
                // count = ((count+1) % 8);

                container.removeChild(firstBox)
                container.appendChild(firstBox)                

                firstBox.style.minWidth=wid;

                clearIndicator();

                setCount((prevCount) => (prevCount + 1) % 8);
            },1900)
        }

        function clearIndicator() {
            indicator.forEach((ele) => {
                ele.style.backgroundColor = "#949494";
            })
        }

        let intervalId;

        if (isPlaying) {
            intervalId = setInterval(moveFirstBox, 5000);
        }

        return () => clearInterval(intervalId);
    }, [isPlaying])

    useEffect(() => {
        // console.log('Updated count:', count);
        document.querySelectorAll(".indicator")[count].style.backgroundColor = "#333333";
      }, [count]);
    
    const togglePlayPause = () => {
        setIsPlaying(!isPlaying);
    };  


    const handleIndicatorClick = (index) => {

        togglePlayPause();

        const container = containerRef.current;
        const indicator = document.querySelectorAll(".indicator");
        indicator.forEach((ele) => {
            ele.style.backgroundColor = "#949494";
        });
        indicator[index].style.backgroundColor = "#333333";

        let newCount = count;

        if (newCount < index) {
            while (newCount < index) {
                let firstChild = container.firstElementChild;
                container.removeChild(firstChild);
                container.append(firstChild);
                newCount++;
            }
        } else {
            let diff = newCount - index;
            let t = 0;
            while (t < diff) {
                let lastChild = container.lastElementChild;
                container.removeChild(lastChild);
                container.prepend(lastChild);
                t++;
            }
            newCount = index;
        }

        setCount(newCount);

        setTimeout(()=>{
            togglePlayPause();
        },3000)
    };


    return<>
            <br /><br /><br />

        <div className="w-[100%] h-[480px] sm:h-[533px] md:h-[406px] lg:h-[562px] xl:h-[706px] 2xl:h-[780px] 3xl:h-[800px] 4xl:h-[1000px] flex flex-col ">
           
            <div className="w-[100%] h-[calc(100%-28px)] bg-red-400 ">
                {/* <div className="w-full h-full flex flex-row gap-[15px]  relative overflow-hidden" > */}
                <div className="w-full h-full overflow-hidden" >
                    <div className="w-full h-full flex flex-row align-middle -translate-x-[50%] sm:-translate-x-[35%] md:-translate-x-[57%] lg:-translate-x-[62%] xl:-translate-x-[48%] 2xl:-translate-x-[40%] 4xl:-translate-x-[33%]" id='main_container' ref={containerRef}>
                        <div className="transition-all duration-[1.52s] ease bg-amber-300 h-[100%] min-w-[65%] sm:min-w-[55%] md:min-w-[70%] lg:min-w-[74%] xl:min-w-[65%] 2xl:min-w-[60%] 3xl:min-w-[60%] 4xl:min-w-[55%] box" id="box8" >8</div>
                        <div className="transition-all duration-[1.52s] ease bg-amber-300 h-[100%] min-w-[65%] sm:min-w-[55%] md:min-w-[70%] lg:min-w-[74%] xl:min-w-[65%] 2xl:min-w-[60%] 3xl:min-w-[60%] 4xl:min-w-[55%] box" id="box1" >1</div>
                        <div className="transition-all duration-[1.52s] ease bg-amber-300 h-[100%] min-w-[65%] sm:min-w-[55%] md:min-w-[70%] lg:min-w-[74%] xl:min-w-[65%] 2xl:min-w-[60%] 3xl:min-w-[60%] 4xl:min-w-[55%] box" id="box2" >2</div>
                        <div className="transition-all duration-[1.52s] ease bg-amber-300 h-[100%] min-w-[65%] sm:min-w-[55%] md:min-w-[70%] lg:min-w-[74%] xl:min-w-[65%] 2xl:min-w-[60%] 3xl:min-w-[60%] 4xl:min-w-[55%] box" id="box3" >3</div>
                        <div className="transition-all duration-[1.52s] ease bg-amber-300 h-[100%] min-w-[65%] sm:min-w-[55%] md:min-w-[70%] lg:min-w-[74%] xl:min-w-[65%] 2xl:min-w-[60%] 3xl:min-w-[60%] 4xl:min-w-[55%] box" id="box4" >4</div>
                        <div className="transition-all duration-[1.52s] ease bg-amber-300 h-[100%] min-w-[65%] sm:min-w-[55%] md:min-w-[70%] lg:min-w-[74%] xl:min-w-[65%] 2xl:min-w-[60%] 3xl:min-w-[60%] 4xl:min-w-[55%] box" id="box5" >5</div>
                        <div className="transition-all duration-[1.52s] ease bg-amber-300 h-[100%] min-w-[65%] sm:min-w-[55%] md:min-w-[70%] lg:min-w-[74%] xl:min-w-[65%] 2xl:min-w-[60%] 3xl:min-w-[60%] 4xl:min-w-[55%] box" id="box6" >6</div>
                        <div className="transition-all duration-[1.52s] ease bg-amber-300 h-[100%] min-w-[65%] sm:min-w-[55%] md:min-w-[70%] lg:min-w-[74%] xl:min-w-[65%] 2xl:min-w-[60%] 3xl:min-w-[60%] 4xl:min-w-[55%] box" id="box7" >7</div>
                    </div>
                </div>
            </div>
            
            <div className="w-[100%] h-[28px] flex flex-row justify-center align-middle relative">
                    <div className='w-[220px] h-full flex flex-row justify-evenly align-middle' id='indicator_container'>
                        <div className='w-2 h-2 border rounded-full border-transparent mt-[11px] bg-[#333333] indicator' id='indicator1' onClick={() => handleIndicatorClick(0)}></div>
                        <div className='w-2 h-2 border rounded-full border-transparent mt-[11px] bg-[#949494] indicator' id='indicator2' onClick={() => handleIndicatorClick(1)}></div>
                        <div className='w-2 h-2 border rounded-full border-transparent mt-[11px] bg-[#949494] indicator' id='indicator3' onClick={() => handleIndicatorClick(2)}></div>
                        <div className='w-2 h-2 border rounded-full border-transparent mt-[11px] bg-[#949494] indicator' id='indicator4' onClick={() => handleIndicatorClick(3)}></div>
                        <div className='w-2 h-2 border rounded-full border-transparent mt-[11px] bg-[#949494] indicator' id='indicator5' onClick={() => handleIndicatorClick(4)}></div>
                        <div className='w-2 h-2 border rounded-full border-transparent mt-[11px] bg-[#949494] indicator' id='indicator6' onClick={() => handleIndicatorClick(5)}></div>
                        <div className='w-2 h-2 border rounded-full border-transparent mt-[11px] bg-[#949494] indicator' id='indicator7' onClick={() => handleIndicatorClick(6)}></div>
                        <div className='w-2 h-2 border rounded-full border-transparent mt-[11px] bg-[#949494] indicator' id='indicator8' onClick={() => handleIndicatorClick(7)}></div>
                    </div>
                    <div className='w-[22px] h-[22px] border rounded-full border-transparent bg-[#D2D2D7] absolute right-2 top-[3.5px]' id='toggleButton' onClick={togglePlayPause}>
                        {
                            isPlaying?pauseSVG:playSVG 
                        }                        
                    </div>
            </div>

        </div>
    </>
}

export default MainImgContainer;