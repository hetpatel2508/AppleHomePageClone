import React from "react";

function Mobile_footer_part(){
    const [box1,setBox1] = React.useState(false);
    const [box2,setBox2] = React.useState(false);
    const [box3,setBox3] = React.useState(false);
    const [box4,setBox4] = React.useState(false);
    const [box5,setBox5] = React.useState(false);
    const [box6,setBox6] = React.useState(false);
    const [box7,setBox7] = React.useState(false);
    const [box8,setBox8] = React.useState(false);
    const [box9,setBox9] = React.useState(false);
    const [box10,setBox10] = React.useState(false);
    
    const b1 = React.useRef(null);
    const b2 = React.useRef(null);
    const b3 = React.useRef(null);
    const b4 = React.useRef(null);
    const b5 = React.useRef(null);
    const b6 = React.useRef(null);
    const b7 = React.useRef(null);
    const b8 = React.useRef(null);
    const b9 = React.useRef(null);
    const b10 = React.useRef(null);


    return<>
    <div className="lg:hidden mt-[1px] ml-[22px] h-[auto] text-[13px] font-normal ">
        <div className="h-[auto] pt-[8px] pb-[12px] w-[calc(100%-10px)] border border-solid border-r-0 border-t-0 border-l-0 border-b-1 border-black relative box" id="box1"  onClick={ ()=>{setBox1(!box1); b1.current.style.transform = box1?"rotate(0deg)":"rotate(180deg)";} }>
            <div>Shop and Learn</div>
            <div className="transition-all duration-700 ease absolute right-0 top-[9.5px] h-[20px] w-[20px] bg-green-300 flex justify-center align-middle" ref={b1}>7</div>
            <div className={`transition-all duration-700 ease text-[#000000B8] font-normal ml-[16px] overflow-hidden ${box1 ? "max-h-[500px]" : "max-h-0"}`} >
                    <div className="pt-[10px] pb-[5px]">Store</div>
                    <div className="pt-[5px] pb-[5px]">Mac</div>
                    <div className="pt-[5px] pb-[5px]">iPad</div>
                    <div className="pt-[5px] pb-[5px]">iPhone</div>
                    <div className="pt-[5px] pb-[5px]">Watch</div>
                    <div className="pt-[5px] pb-[5px]">AirPods</div>
                    <div className="pt-[5px] pb-[5px]">TV & Home</div>
                    <div className="pt-[5px] pb-[5px]">AirTag</div>
                    <div className="pt-[5px] pb-[5px]">Accessories</div>
                    <div className="pt-[5px] pb-[5px]">Gift Cards</div>
            </div>            
        </div>
        <div className="h-[auto] pt-[8px] pb-[12px] w-[calc(100%-10px)] border border-solid border-r-0 border-t-0 border-l-0 border-b-1 border-black relative box" id="box2"  onClick={ ()=>{setBox2(!box2); b2.current.style.transform = box2?"rotate(0deg)":"rotate(180deg)";} }>
            <div>Apple Wallet</div>
            <div className="transition-all duration-700 ease absolute right-0 top-[9.5px] h-[20px] w-[20px] bg-green-300 flex justify-center align-middle" ref={b2}>7</div>
            <div className={`transition-all duration-700 ease text-[#000000B8] font-normal ml-[16px] overflow-hidden ${box2 ? "max-h-[500px]" : "max-h-0"}`} >

                    <div className="pt-[10px] pb-[5px]">Wallet</div>
                    
            </div>
        </div>
        <div className="h-[auto] pt-[8px] pb-[12px] w-[calc(100%-10px)] border border-solid border-r-0 border-t-0 border-l-0 border-b-1 border-black relative box" id="box3"  onClick={ ()=>{setBox3(!box3); b3.current.style.transform = box3?"rotate(0deg)":"rotate(180deg)";} }>
            <div>Account</div>
            <div className="transition-all duration-700 ease absolute right-0 top-[9.5px] h-[20px] w-[20px] bg-green-300 flex justify-center align-middle" ref={b3}>7</div>
            <div className={`transition-all duration-700 ease text-[#000000B8] font-normal ml-[16px] overflow-hidden ${box3 ? "max-h-[500px]" : "max-h-0"}`} >
 
                    <div className="pt-[10px] pb-[5px]">Manage Your Apple ID</div>
                    <div className="pt-[5px] pb-[5px]">Apple Store Account</div>
                    <div className="pt-[5px] pb-[5px]">iCloud.com</div>
            </div>
        </div>
        <div className="h-[auto] pt-[8px] pb-[12px] w-[calc(100%-10px)] border border-solid border-r-0 border-t-0 border-l-0 border-b-1 border-black relative box" id="box4"  onClick={ ()=>{setBox4(!box4); b4.current.style.transform = box4?"rotate(0deg)":"rotate(180deg)";} }>
            <div>Entertainment</div>
            <div className="transition-all duration-700 ease absolute right-0 top-[9.5px] h-[20px] w-[20px] bg-green-300 flex justify-center align-middle" ref={b4}>7</div>
            <div className={`transition-all duration-700 ease text-[#000000B8] font-normal ml-[16px] overflow-hidden ${box4 ? "max-h-[500px]" : "max-h-0"}`} >
                    
                    <div className="pt-[10px] pb-[5px]">Apple One</div>
                    <div className="pt-[5px] pb-[5px]">Apple TV+</div>
                    <div className="pt-[5px] pb-[5px]">Apple Music</div>
                    <div className="pt-[5px] pb-[5px]">Apple Arcade</div>
                    <div className="pt-[5px] pb-[5px]">Apple Podcast</div>
                    <div className="pt-[5px] pb-[5px]">Apple Books</div>
                    <div className="pt-[5px] pb-[5px]">App Store</div>
            </div>
        </div>
        <div className="h-[auto] pt-[8px] pb-[12px] w-[calc(100%-10px)] border border-solid border-r-0 border-t-0 border-l-0 border-b-1 border-black relative box" id="box5"  onClick={ ()=>{setBox5(!box5); b5.current.style.transform = box5?"rotate(0deg)":"rotate(180deg)";} }>
            <div>Apple Store</div>
            <div className="transition-all duration-700 ease absolute right-0 top-[9.5px] h-[20px] w-[20px] bg-green-300 flex justify-center align-middle" ref={b5}>7</div>
            <div className={`transition-all duration-700 ease text-[#000000B8] font-normal ml-[16px] overflow-hidden ${box5 ? "max-h-[500px]" : "max-h-0"}`} >

                        <div className="pt-[10px] pb-[5px]">Find a Store</div>
                        <div className="pt-[5px] pb-[5px]">Genius Bar</div>
                        <div className="pt-[5px] pb-[5px]">Today at Apple</div>
                        <div className="pt-[5px] pb-[5px]">Group Reservations</div>
                        <div className="pt-[5px] pb-[5px]">Apple Camp</div>
                        <div className="pt-[5px] pb-[5px]">Apple Trade In</div>
                        <div className="pt-[5px] pb-[5px]">Ways to Buy</div>
                        <div className="pt-[5px] pb-[5px]">Recycling Programme</div>
                        <div className="pt-[5px] pb-[5px]">Order Status</div>
                        <div className="pt-[5px] pb-[5px]">Shopping Help</div>
                        </div>
        </div>
        <div className="h-[auto] pt-[8px] pb-[12px] w-[calc(100%-10px)] border border-solid border-r-0 border-t-0 border-l-0 border-b-1 border-black relative box" id="box6"  onClick={ ()=>{setBox6(!box6); b6.current.style.transform = box6?"rotate(0deg)":"rotate(180deg)";} }>
            <div>For Business</div>
            <div className="transition-all duration-700 ease absolute right-0 top-[9.5px] h-[20px] w-[20px] bg-green-300 flex justify-center align-middle" ref={b6}>7</div>
            <div className={`transition-all duration-700 ease text-[#000000B8] font-normal ml-[16px] overflow-hidden ${box6 ? "max-h-[500px]" : "max-h-0"}`} >

                    <div className="pt-[10px] pb-[5px]">Apple & Business</div>
                    <div className="pt-[5px] pb-[5px]">Shop for Business</div>
            </div>
        </div>
        <div className="h-[auto] pt-[8px] pb-[12px] w-[calc(100%-10px)] border border-solid border-r-0 border-t-0 border-l-0 border-b-1 border-black relative box" id="box7"  onClick={ ()=>{setBox7(!box7); b7.current.style.transform = box7?"rotate(0deg)":"rotate(180deg)";} }>
            <div>For Education</div>
            <div className="transition-all duration-700 ease absolute right-0 top-[9.5px] h-[20px] w-[20px] bg-green-300 flex justify-center align-middle" ref={b7}>7</div>
            <div className={`transition-all duration-700 ease text-[#000000B8] font-normal ml-[16px] overflow-hidden ${box7 ? "max-h-[500px]" : "max-h-0"}`} >

                        <div className="pt-[10px] pb-[5px]">Apple and Education</div>
                        <div className="pt-[5px] pb-[5px]">Shop for Education</div>
                        <div className="pt-[5px] pb-[5px]">Shop for University</div>
                </div>
        </div>
        <div className="h-[auto] pt-[8px] pb-[12px] w-[calc(100%-10px)] border border-solid border-r-0 border-t-0 border-l-0 border-b-1 border-black relative box" id="box8"  onClick={ ()=>{setBox8(!box8); b8.current.style.transform = box8?"rotate(0deg)":"rotate(180deg)";} }>
            <div>For Healthcare</div>
            <div className="transition-all duration-700 ease absolute right-0 top-[9.5px] h-[20px] w-[20px] bg-green-300 flex justify-center align-middle" ref={b8}>7</div>
            <div className={`transition-all duration-700 ease text-[#000000B8] font-normal ml-[16px] overflow-hidden ${box8 ? "max-h-[500px]" : "max-h-0"}`} >

                        <div className="pt-[10px] pb-[5px]">Apple in Healthcare</div>
                        <div className="pt-[5px] pb-[5px]">Health on Apple Watch</div>
                </div>
        </div>
        <div className="h-[auto] pt-[8px] pb-[12px] w-[calc(100%-10px)] border border-solid border-r-0 border-t-0 border-l-0 border-b-1 border-black relative box" id="box9"  onClick={ ()=>{setBox9(!box9); b9.current.style.transform = box9?"rotate(0deg)":"rotate(180deg)";} }>
            <div>Apple Values</div>
            <div className="transition-all duration-700 ease absolute right-0 top-[9.5px] h-[20px] w-[20px] bg-green-300 flex justify-center align-middle" ref={b9}>7</div>
            <div className={`transition-all duration-700 ease text-[#000000B8] font-normal ml-[16px] overflow-hidden ${box9 ? "max-h-[500px]" : "max-h-0"}`} >

                        <div className="pt-[10px] pb-[5px]">Accessibility</div>
                        <div className="pt-[5px] pb-[5px]">Education</div>
                        <div className="pt-[5px] pb-[5px]">Environment</div>
                        <div className="pt-[5px] pb-[5px]">Privacy</div>
                        <div className="pt-[5px] pb-[5px]">Supply Chain</div>
                </div>
        </div>
        <div className="h-[auto] pt-[8px] pb-[12px] w-[calc(100%-10px)] border border-solid border-r-0 border-t-0 border-l-0 border-b-1 border-black relative box" id="box10"  onClick={ ()=>{setBox10(!box10); b10.current.style.transform = box10?"rotate(0deg)":"rotate(180deg)";} }>
            <div>About Apple</div>
            <div className="transition-all duration-700 ease absolute right-0 top-[9.5px] h-[20px] w-[20px] bg-green-300 flex justify-center align-middle" ref={b10}>7</div>
            <div className={`transition-all duration-700 ease text-[#000000B8] font-normal ml-[16px] overflow-hidden ${box10 ? "max-h-[500px]" : "max-h-0"}`} >

                        <div className="pt-[10px] pb-[5px]">Newsroom</div>
                        <div className="pt-[5px] pb-[5px]">Apple Leadership</div>
                        <div className="pt-[5px] pb-[5px]">Career Opportunities</div>
                        <div className="pt-[5px] pb-[5px]">Investors</div>
                        <div className="pt-[5px] pb-[5px]">Ethics & Compliance</div>
                        <div className="pt-[5px] pb-[5px]">Events</div>
                        <div className="pt-[5px] pb-[5px]">Contact Apple</div>
                </div>
        </div>
    </div>
    </>
}

export default Mobile_footer_part;