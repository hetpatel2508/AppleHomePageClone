function VideoRun() {
    return (
        <>
                <div className="flex flex-col justify-center items-center">
                    <video src="https://www.apple.com/105/media/us/home/2023/dcadd810-de7a-4de2-a731-be7b99689951/anim/watch_hero/small.mp4" alt="1" className="w-[100%] h-[580px] -z-10 object-cover inline sm:hidden brightness-150 filter sharpen " autoPlay loop muted data-inline-media data-load-timeout="5000" />
                    <video src="https://www.apple.com/105/media/us/home/2023/dcadd810-de7a-4de2-a731-be7b99689951/anim/watch_hero/small_2x.mp4" alt="2" className="w-[100%] h-[595px] -z-10 object-cover hidden sm:inline md:hidden brightness-150 filter sharpen " autoPlay loop muted data-inline-media data-load-timeout="5000" />
                    <video src="https://www.apple.com/105/media/us/home/2023/dcadd810-de7a-4de2-a731-be7b99689951/anim/watch_hero/medium.mp4" alt="" className="w-[100%] h-[595px] -z-10 object-cover hidden md:inline lg:hidden brightness-150 filter sharpen " autoPlay loop muted data-inline-media data-load-timeout="5000" />
                    <video src="https://www.apple.com/105/media/us/home/2023/dcadd810-de7a-4de2-a731-be7b99689951/anim/watch_hero/medium_2x.mp4" alt="3" className="w-[100%] h-[720px] -z-10 object-cover hidden lg:inline xl:hidden brightness-150 filter sharpen " autoPlay loop muted data-inline-media data-load-timeout="5000" />
                    <video src="https://www.apple.com/105/media/us/home/2023/dcadd810-de7a-4de2-a731-be7b99689951/anim/watch_hero/large.mp4" alt="4" className="w-[100%] h-[720px] -z-10 object-cover hidden xl:inline 2xl:hidden brightness-150 filter sharpen " autoPlay loop muted data-inline-media data-load-timeout="5000" />
                    <video src="https://www.apple.com/105/media/us/home/2023/dcadd810-de7a-4de2-a731-be7b99689951/anim/watch_hero/large_2x.mp4" alt="5" className="w-[100%] h-[720px] -z-10 object-cover hidden 2xl:inline brightness-150 filter sharpen " autoPlay loop muted data-inline-media data-load-timeout="5000" />
                    <div className="w-[300px] md:w-[400px] lg:w-[450px] xl:w-[500px] h-[125px] absolute translate-y-[185px] md:translate-y-[125px] lg:translate-y-[155px] flex flex-col  items-center text-white">
                        <div className="flex flex-row w-[150px] md:w-[230px] mb-2">
                            <img src="https://www.apple.com/v/home/bk/images/logos/apple-watch-series-9-anim/hero_logo_apple_watch_series_9__eg5xcrxghuaa_small_2x.png" alt="" />
                        </div>
                        <div className="text-md md:text-2xl lg:text-[28px] xl:text-3xl">Titanium.So strong.So light.So Pro</div>
                        <div className="flex flex-row justify-center gap-12 mt-2 md:mt-3 xl:mt-4">
                            <div className="text-[18px] md:text-[22px] xl:text-[24px] text-black  bg-white border pl-[19px] lg:pl-[21px] pr-[19px] lg:pr-[21px] pt-[6px] lg:pt-[8px] pb-[7px] lg:pb-[9px] rounded-[50px]">Learn more</div>
                            <div className="text-[18px] md:text-[22px] xl:text-[24px] text-black  bg-white border pl-[19px] lg:pl-[21px] pr-[19px] lg:pr-[21px] pt-[6px] lg:pt-[8px] pb-[7px] lg:pb-[9px] rounded-[50px]">Buy</div>
                        </div>
                    </div>
                </div>
        </>
    )
}

export default VideoRun;