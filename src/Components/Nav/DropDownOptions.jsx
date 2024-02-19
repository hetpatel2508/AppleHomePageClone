import React from 'react'
function DropDownOptions(props) {

    const [didToggled, setdidToggled] = React.useState(false);

    return <>
        <div style={{ display: props.subToggle ? "inline" : "none" }} className="flex flex-row justify-between">

            <div style={{ display: props.shop ? "inline" : "none" }}>
                <div className="relative top-12 flex flex-col gap-3">
                    <div className="text-white ml-[48px] text-3xl">Shop the Latest</div>
                    <div className="text-white ml-[48px] text-3xl">Mac</div>
                    <div className="text-white ml-[48px] text-3xl">iPad</div>
                    <div className="text-white ml-[48px] text-3xl">iPhone</div>
                    <div className="text-white ml-[48px] text-3xl">Apple Watch</div>
                    <div className="text-white ml-[48px] text-3xl">Accessories</div>
                    <div><br /></div>
                    <div className="text-[#86868B] ml-[48px] text-base">Quick Links</div>
                    <div className="text-white ml-[48px] text-[17px]">Find a Store</div>
                    <div className="text-white ml-[48px] text-[17px]">Order Status</div>
                    <div className="text-white ml-[48px] text-[17px]">Ways to Buy</div>
                    <div><br /></div>
                    <div className="text-[#86868B] ml-[48px] text-base">Shop Special Stores</div>
                    <div className="text-white ml-[48px] text-[17px]">Education</div>
                    <div className="text-white ml-[48px] text-[17px]">Business</div>

                </div>
            </div>


            <div style={{ display: props.mac ? "inline" : "none" }}>
                <div className="relative top-12 flex flex-col gap-3">
                    <div className="text-white ml-[48px] text-3xl">Explore All Mac</div>
                    <div className="text-white ml-[48px] text-3xl">MacBook Air</div>
                    <div className="text-white ml-[48px] text-3xl">MacBook Pro</div>
                    <div className="text-white ml-[48px] text-3xl">iMac</div>
                    <div className="text-white ml-[48px] text-3xl">Mac mini</div>
                    <div className="text-white ml-[48px] text-3xl">Mac studio</div>
                    <div className="text-white ml-[48px] text-3xl">Mac Pro</div>
                    <div className="text-white ml-[48px] text-3xl">Displays</div>
                    <div></div>
                    <div className="text-white ml-[48px] text-[17px]">Compare Mac</div>
                    <div className="text-white ml-[48px] text-[17px]">Mac Does That</div>
                    <div><br /></div>
                    <div className="text-[#86868B] ml-[48px] text-base">Shop Mac</div>
                    <div className="text-white ml-[48px] text-[17px]">Shop Mac</div>
                    <div className="text-white ml-[48px] text-[17px]">Mac Accessories</div>
                    <div className="text-white ml-[48px] text-[17px]">Ways to Buy</div>
                    <div><br /></div>
                    <div className="text-[#86868B] ml-[48px] text-base">Move from Mac</div>
                    <div className="text-white ml-[48px] text-[17px]">Mac Support</div>
                    <div className="text-white ml-[48px] text-[17px]">AppleCare+ for Mac</div>
                    <div className="text-white ml-[48px] text-[17px]">macOS Sonoma</div>
                    <div className="text-white ml-[48px] text-[17px]">Apps by Apple</div>
                    <div className="text-white ml-[48px] text-[17px]">Continuity</div>
                    <div className="text-white ml-[48px] text-[17px]">iCloud+</div>
                    <div className="text-white ml-[48px] text-[17px]">Mac for Business</div>
                    <div className="text-white ml-[48px] text-[17px]">Education</div>
                    <div><br /><br /><br /></div>
                </div>
            </div>


            <div style={{ display: props.ipad ? "inline" : "none" }}>
                <div className="relative top-12 flex flex-col gap-3">
                    <div className="text-white ml-[48px] text-3xl">Explore All iPad</div>
                    <div className="text-white ml-[48px] text-3xl">iPad Air</div>
                    <div className="text-white ml-[48px] text-3xl">iPad Pro</div>
                    <div className="text-white ml-[48px] text-3xl">iPad</div>
                    <div className="text-white ml-[48px] text-3xl">iPad mini</div>
                    <div className="text-white ml-[48px] text-3xl">Mac Pro</div>
                    <div className="text-white ml-[48px] text-3xl">Apple Pencil</div>
                    <div className="text-white ml-[48px] text-3xl">Keyboards</div>
                    <div></div>
                    <div className="text-white ml-[48px] text-[17px]">Compare iPad</div>
                    <div className="text-white ml-[48px] text-[17px]">Why iPad</div>
                    <div><br /></div>
                    <div className="text-[#86868B] ml-[48px] text-base">Shop iPad</div>
                    <div className="text-white ml-[48px] text-[17px]">Shop iPad</div>
                    <div className="text-white ml-[48px] text-[17px]">iPad Accessories</div>
                    <div className="text-white ml-[48px] text-[17px]">Ways to Buy</div>
                    <div><br /></div>
                    <div className="text-[#86868B] ml-[48px] text-base">Move from iPad</div>
                    <div className="text-white ml-[48px] text-[17px]">iPad Support</div>
                    <div className="text-white ml-[48px] text-[17px]">AppleCare+ for iPad</div>
                    <div className="text-white ml-[48px] text-[17px]">iPadOS 17</div>
                    <div className="text-white ml-[48px] text-[17px]">Apps by Apple</div>
                    <div className="text-white ml-[48px] text-[17px]">Continuity</div>
                    <div className="text-white ml-[48px] text-[17px]">iCloud+</div>
                    <div className="text-white ml-[48px] text-[17px]">Education</div>
                    <div><br /><br /><br /></div>
                </div>
            </div>


            <div style={{ display: props.iphone ? "inline" : "none" }}>
                <div className="relative top-12 flex flex-col gap-3">
                    <div className="text-white ml-[48px] text-3xl">Explore All iPhone</div>
                    <div className="text-white ml-[48px] text-3xl">iPhone 15 Pro</div>
                    <div className="text-white ml-[48px] text-3xl">iPhone 15</div>
                    <div className="text-white ml-[48px] text-3xl">iPhone 14</div>
                    <div className="text-white ml-[48px] text-3xl">iPhone 13</div>
                    <div className="text-white ml-[48px] text-3xl">iPhone SE</div>
                    <div></div>
                    <div className="text-white ml-[48px] text-[17px]">Compare iPhone</div>
                    <div className="text-white ml-[48px] text-[17px]">Switch from Android</div>
                    <div><br /></div>
                    <div className="text-[#86868B] ml-[48px] text-base">Shop iPhone</div>
                    <div className="text-white ml-[48px] text-[17px]">Shop iPhone</div>
                    <div className="text-white ml-[48px] text-[17px]">iPhone Accessories</div>
                    <div className="text-white ml-[48px] text-[17px]">Apple Trade in </div>
                    <div className="text-white ml-[48px] text-[17px]">Ways to Buy</div>
                    <div><br /></div>
                    <div className="text-[#86868B] ml-[48px] text-base">Move from iPhone</div>
                    <div className="text-white ml-[48px] text-[17px]">iPhone Support</div>
                    <div className="text-white ml-[48px] text-[17px]">AppleCare+ for iPhone</div>
                    <div className="text-white ml-[48px] text-[17px]">iOS 17</div>
                    <div className="text-white ml-[48px] text-[17px]">Apps by Apple</div>
                    <div className="text-white ml-[48px] text-[17px]">iPhone Privacy</div>
                    <div className="text-white ml-[48px] text-[17px]">iCloud+</div>
                    <div className="text-white ml-[48px] text-[17px]">Wallet</div>
                    <div className="text-white ml-[48px] text-[17px]">Siri</div>
                    <div><br /><br /><br /></div>
                </div>
            </div>


            <div style={{ display: props.watch ? "inline" : "none" }}>
                <div className="relative top-12 flex flex-col gap-3 w-[95%]">
                    <div className="text-white ml-[48px] text-3xl">Explore All Apple Watch</div>
                    <div className="text-white ml-[48px] text-3xl">Apple Watch Series 9</div>
                    <div className="text-white ml-[48px] text-3xl">Apple Watch Ultra 2</div>
                    <div className="text-white ml-[48px] text-3xl">Apple Watch SE</div>
                    <div className="text-white ml-[48px] text-3xl">Apple Watch Nike</div>
                    <div></div>
                    <div className="text-white ml-[48px] text-[17px]">Compare Watch</div>
                    <div className="text-white ml-[48px] text-[17px]">Why Apple Watch</div>
                    <div><br /></div>
                    <div className="text-[#86868B] ml-[48px] text-base">Shop Watch</div>
                    <div className="text-white ml-[48px] text-[17px]">Shop Apple Watch</div>
                    <div className="text-white ml-[48px] text-[17px]">Shop Watch Straps</div>
                    <div className="text-white ml-[48px] text-[17px]">Apple Watch Accessories</div>
                    <div className="text-white ml-[48px] text-[17px]">Ways to Buy</div>
                    <div><br /></div>
                    <div className="text-[#86868B] ml-[48px] text-base">Move from Watch</div>
                    <div className="text-white ml-[48px] text-[17px]">Apple Watch Support</div>
                    <div className="text-white ml-[48px] text-[17px]">AppleCare+</div>
                    <div className="text-white ml-[48px] text-[17px]">watchOS 10</div>
                    <div className="text-white ml-[48px] text-[17px]">Apps by Apple</div>
                    <div><br /><br /><br /></div>
                </div>
            </div>


            <div style={{ display: props.airpods ? "inline" : "none" }}>
                <div className="relative top-12 flex flex-col gap-3 w-[95%]">
                    <div className="text-white ml-[48px] text-3xl">Explore All AirPods</div>
                    <div className="text-white ml-[48px] text-3xl">AirPods Pro 2nd generation</div>
                    <div className="text-white ml-[48px] text-3xl">AirPods 2nd generation</div>
                    <div className="text-white ml-[48px] text-3xl">AirPods 3nd generation</div>
                    <div className="text-white ml-[48px] text-3xl">AirPods Max</div>
                    <div></div>
                    <div className="text-white ml-[48px] text-[17px]">Compare AirPods</div>
                    <div><br /></div>
                    <div className="text-[#86868B] ml-[48px] text-base">AirPods</div>
                    <div className="text-white ml-[48px] text-[17px]">Shop Watch Straps</div>
                    <div className="text-white ml-[48px] text-[17px]">AirPods Accessories</div>
                    <div><br /></div>
                    <div className="text-[#86868B] ml-[48px] text-base">Move from AirPods</div>
                    <div className="text-white ml-[48px] text-[17px]">AirPods Support</div>
                    <div className="text-white ml-[48px] text-[17px]">AppleCare+ for Headphones</div>
                    <div className="text-white ml-[48px] text-[17px]">Apple Music</div>
                    <div><br /><br /><br /></div>
                </div>
            </div>


            <div style={{ display: props.tv ? "inline" : "none" }}>
                <div className="relative top-12 flex flex-col gap-3 w-[95%]">
                    <div className="text-white ml-[48px] text-3xl">Explore TV & Home</div>
                    <div className="text-white ml-[48px] text-3xl">Apple TV 4k</div>
                    <div className="text-white ml-[48px] text-3xl">HomePod</div>
                    <div className="text-white ml-[48px] text-3xl">HomePod mini</div>
                    <div><br /></div>
                    <div className="text-[#86868B] ml-[48px] text-base">Shop TV & Home</div>
                    <div className="text-white ml-[48px] text-[17px]">Shop Apple TV 4K</div>
                    <div className="text-white ml-[48px] text-[17px]">Shop HomePod</div>
                    <div className="text-white ml-[48px] text-[17px]">Shop HomePod mini</div>
                    <div className="text-white ml-[48px] text-[17px]">Shop Siri Remote</div>
                    <div className="text-white ml-[48px] text-[17px]">TV & Home Accessories</div>
                    <div><br /></div>
                    <div className="text-[#86868B] ml-[48px] text-base">Move from TV & Home</div>
                    <div className="text-white ml-[48px] text-[17px]">TV & Home Support</div>
                    <div className="text-white ml-[48px] text-[17px]">AppleCare+</div>
                    <div className="text-white ml-[48px] text-[17px]">Apple TV app</div>
                    <div className="text-white ml-[48px] text-[17px]">Apple TV+</div>
                    <div className="text-white ml-[48px] text-[17px]">Home app</div>
                    <div className="text-white ml-[48px] text-[17px]">Apple Music</div>
                    <div className="text-white ml-[48px] text-[17px]">Siri</div>
                    <div className="text-white ml-[48px] text-[17px]">AirPay</div>
                    <div><br /><br /><br /></div>
                </div>
            </div>

   
            <div style={{ display: props.ent ? "inline" : "none" }}>
                <div className="relative top-12 flex flex-col gap-3 w-[95%]">
                    <div className="text-white ml-[48px] text-3xl">Explore Entertainment</div>
                    <div className="text-white ml-[48px] text-3xl">Apple One</div>
                    <div className="text-white ml-[48px] text-3xl">Apple TV+</div>
                    <div className="text-white ml-[48px] text-3xl">Apple Music</div>
                    <div className="text-white ml-[48px] text-3xl">Apple Arcade</div>
                    <div className="text-white ml-[48px] text-3xl">Apple Podcasts</div>
                    <div className="text-white ml-[48px] text-3xl">Apple Books</div>
                    <div className="text-white ml-[48px] text-3xl">App Store</div>
                    <div><br /></div>
                    <div className="text-[#86868B] ml-[48px] text-base">Support</div>
                    <div className="text-white ml-[48px] text-[17px]">Apple TV+ Support</div>
                    <div className="text-white ml-[48px] text-[17px]">Apple Music Support</div>
                    <div><br /><br /><br /></div>
                </div>
            </div>

   
            <div style={{ display: props.acc ? "inline" : "none" }}>
                <div className="relative top-12 flex flex-col gap-3 w-[95%]">
                    <div className="text-white ml-[48px] text-3xl">Shop All Accessories</div>
                    <div className="text-white ml-[48px] text-3xl">Mac</div>
                    <div className="text-white ml-[48px] text-3xl">iPad</div>
                    <div className="text-white ml-[48px] text-3xl">iPhone</div>
                    <div className="text-white ml-[48px] text-3xl">Apple Watch</div>
                    <div className="text-white ml-[48px] text-3xl">AirPods</div>
                    <div className="text-white ml-[48px] text-3xl">TV & Home</div>
                    <div><br /></div>
                    <div className="text-[#86868B] ml-[48px] text-base">Explore Accessories</div>
                    <div className="text-white ml-[48px] text-[17px]">Made by Apple</div>
                    <div className="text-white ml-[48px] text-[17px]">Airtag</div>
                    <div><br /><br /><br /></div>
                </div>
            </div>

   
            <div style={{ display: props.sup ? "inline" : "none" }}>
                <div className="relative top-12 flex flex-col gap-3 w-[95%]">
                    <div className="text-white ml-[48px] text-3xl">iPhone</div>
                    <div className="text-white ml-[48px] text-3xl">Mac</div>
                    <div className="text-white ml-[48px] text-3xl">iPad</div>
                    <div className="text-white ml-[48px] text-3xl">Watch</div>
                    <div className="text-white ml-[48px] text-3xl">AirPods</div>
                    <div className="text-white ml-[48px] text-3xl">Music</div>
                    <div className="text-white ml-[48px] text-3xl">TV</div>
                    <div><br /></div>
                    <div className="text-white ml-[48px] text-base">Explore Support</div>
                    <div><br /></div>
                    <div className="text-[#86868B] ml-[48px] text-base">Get Help</div>
                    <div className="text-white ml-[48px] text-[17px]">Community</div>
                    <div className="text-white ml-[48px] text-[17px]">Check Coverage</div>
                    <div className="text-white ml-[48px] text-[17px]">Repair</div>
                    <div className="text-white ml-[48px] text-[17px]">Contact Us</div>
                    <div><br /></div>
                    <div className="text-[#86868B] ml-[48px] text-base">Helpful Topics</div>
                    <div className="text-white ml-[48px] text-[17px]">Get AppleCare+</div>
                    <div className="text-white ml-[48px] text-[17px]">Apple ID & Password</div>
                    <div className="text-white ml-[48px] text-[17px]">Billing & Subscription</div>
                    <div className="text-white ml-[48px] text-[17px]">Find My</div>
                    <div className="text-white ml-[48px] text-[17px]">Accessibility</div>
                    <div><br /><br /><br /></div>
                </div>
            </div>


        </div>
    </>
}

export default DropDownOptions;