import React from 'react';

function MainImgContainer(){
    
    const SliderDiv = React.useRef(null);
    const box = React.useRef(null);


    return<>
        <div className="w-[100%] h-[480px] sm:h-[533px] md:h-[406px] lg:h-[562px] xl:h-[706px] 2xl:h-[780px] 3xl:h-[800px] 4xl:h-[1000px] flex flex-col ">
           
            <div className="w-[100%] h-[calc(100%-28px)] bg-red-400 ">
                {/* <div className="w-full h-full flex flex-row gap-[15px]  relative overflow-hidden"  ref={SliderDiv}> */}
                <div className="w-full h-full overflow-hidden" >
                    <div className="w-full h-full flex flex-row gap-[15px] align-middle -translate-x-[50%] sm:-translate-x-[35%] md:-translate-x-[57%] lg:-translate-x-[62%] xl:-translate-x-[48%] 2xl:-translate-x-[40%] 4xl:-translate-x-[33%]"  ref={SliderDiv}>
                        <div className="bg-amber-300 h-[100%] min-w-[65%] sm:min-w-[55%] md:min-w-[70%] lg:min-w-[74%] xl:min-w-[65%] 2xl:min-w-[60%] 3xl:min-w-[60%] 4xl:min-w-[55%] box" id="box8" >8</div>
                        <div className="bg-amber-300 h-[100%] min-w-[65%] sm:min-w-[55%] md:min-w-[70%] lg:min-w-[74%] xl:min-w-[65%] 2xl:min-w-[60%] 3xl:min-w-[60%] 4xl:min-w-[55%] box" id="box1" >1</div>
                        <div className="bg-amber-300 h-[100%] min-w-[65%] sm:min-w-[55%] md:min-w-[70%] lg:min-w-[74%] xl:min-w-[65%] 2xl:min-w-[60%] 3xl:min-w-[60%] 4xl:min-w-[55%] box" id="box2" >2</div>
                        <div className="bg-amber-300 h-[100%] min-w-[65%] sm:min-w-[55%] md:min-w-[70%] lg:min-w-[74%] xl:min-w-[65%] 2xl:min-w-[60%] 3xl:min-w-[60%] 4xl:min-w-[55%] box" id="box3" >3</div>
                        <div className="bg-amber-300 h-[100%] min-w-[65%] sm:min-w-[55%] md:min-w-[70%] lg:min-w-[74%] xl:min-w-[65%] 2xl:min-w-[60%] 3xl:min-w-[60%] 4xl:min-w-[55%] box" id="box4" >4</div>
                        <div className="bg-amber-300 h-[100%] min-w-[65%] sm:min-w-[55%] md:min-w-[70%] lg:min-w-[74%] xl:min-w-[65%] 2xl:min-w-[60%] 3xl:min-w-[60%] 4xl:min-w-[55%] box" id="box5" >5</div>
                        <div className="bg-amber-300 h-[100%] min-w-[65%] sm:min-w-[55%] md:min-w-[70%] lg:min-w-[74%] xl:min-w-[65%] 2xl:min-w-[60%] 3xl:min-w-[60%] 4xl:min-w-[55%] box" id="box6" >6</div>
                        <div className="bg-amber-300 h-[100%] min-w-[65%] sm:min-w-[55%] md:min-w-[70%] lg:min-w-[74%] xl:min-w-[65%] 2xl:min-w-[60%] 3xl:min-w-[60%] 4xl:min-w-[55%] box" id="box7" >7</div>
                    </div>
                </div>
            </div>
            
            <div className="w-[100%] h-[28px] flex flex-row justify-center align-middle relative">
                    <div className='w-[220px] h-full flex flex-row justify-evenly align-middle'>
                        <div className='w-2 h-2 border rounded-full border-transparent mt-[11px] bg-[#333333]'></div>
                        <div className='w-2 h-2 border rounded-full border-transparent mt-[11px] bg-[#949494]'></div>
                        <div className='w-2 h-2 border rounded-full border-transparent mt-[11px] bg-[#949494]'></div>
                        <div className='w-2 h-2 border rounded-full border-transparent mt-[11px] bg-[#949494]'></div>
                        <div className='w-2 h-2 border rounded-full border-transparent mt-[11px] bg-[#949494]'></div>
                        <div className='w-2 h-2 border rounded-full border-transparent mt-[11px] bg-[#949494]'></div>
                        <div className='w-2 h-2 border rounded-full border-transparent mt-[11px] bg-[#949494]'></div>
                        <div className='w-2 h-2 border rounded-full border-transparent mt-[11px] bg-[#949494]'></div>
                    </div>
                    <div className='w-[22px] h-[22px] border rounded-full border-transparent bg-[#D2D2D7] absolute right-2 top-[3.5px]'></div>
            </div>

        </div>
    </>
}

export default MainImgContainer;