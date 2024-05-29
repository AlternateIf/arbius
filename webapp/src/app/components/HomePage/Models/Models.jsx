"use client"
import React, {useState} from "react"
import amica from "../../../assets/images/amica.png"
import Image from 'next/image';
import right_arrow from "../../../assets/images/right_arrow.png";
import arbius_logo_round from "../../../assets/images/arbius_logo_round.png";

export default function Models(){

    const [selectedModel, setSelectedModel] = useState("Amica");
    const AllModels = {
        "AI Generations": {
            "text": "Amica is an open source chatbot interface that provides emotion, text to speech, and speech to text capabilities.",
            "image": amica
        },
        "Amica": {
            "text": "Amica is an open source chatbot interface that provides emotion, text to speech, and speech to text capabilities.",
            "image": amica
        },
        "Marketplace": {
            "text": "Amica is an open source chatbot interface that provides emotion, text to speech, and speech to text capabilities.",
            "image": amica
        }
    }
    const toggleBackground = (add) => {
        if(add){
            document.getElementById("image-parent").classList.add("model-image-gradient");
        }else{
            document.getElementById("image-parent").classList.remove("model-image-gradient");
        }
    }
    return(
        <div className="bg-models-gradient bg-cover font-Sequel-Sans-Medium-Head">
            <div className="w-section-width m-[auto] p-[100px_0] max-w-center-width flex justify-between items-center">
                <div className="w-[50%]">
                    <div className="text-[12px] Gradient-transparent-text bg-button-gradient-txt">Our Models!</div>
                    <div className="text-header font-medium text-black-text mb-6">Defi for AI</div>
                    <div>
                        <div className="text-para text-subtext-three font-Sequel-Sans-Light-Body text-subtext-two">Model creators are now first-class citizens. Set your fees (or choose not to) for using your models and enable investments in them as tokenized assets. Model generations are handled by a global, decentralized network of solvers competing to deliver results swiftly.</div>
                    </div>
                    <div className="mt-[30px]">
                        <div className="all-models flex model-items w-full justify-between">
                            {
                                Object.keys(AllModels).map(function(item, index){
                                    return <div className={selectedModel === item ? "selected" : "non-selected"} onClick={()=>setSelectedModel(item)}>{item}</div>
                                })
                            }
                            {/*<div>AI Generations</div>
                            <div className="selected">Amica</div>
                            <div>Marketplace</div>*/}
                        </div>
                        <div className="mt-[30px]">
                            <div className="text-[28px] font-medium Gradient-transparent-text bg-background-gradient-txt">{selectedModel}</div>
                            <div className="mt-[10px] mb-[20px] w-[60%] text-subtext-two font-Sequel-Sans-Light-Body">{AllModels[selectedModel].text}</div>
                            <div><button className="hover:bg-buy-hover transition-all ease-in duration-300 bg-[black] text-[white] flex items-center gap-[5px] justify-center p-[8px_25px] rounded-[20px]">Try now <Image className="h-[20px] w-[auto]" src={right_arrow} alt="" /></button></div>
                        </div>
                    </div>
                </div>
                <div className="">
                    <div id="image-parent" className="relative border-[transparent] w-[320px] h-[430px] flex justify-center items-center rounded-[50px]">
                        <div className="relative">
                            <Image className="h-[400px] w-[auto]" src={AllModels[selectedModel].image} alt="" onMouseOver={()=>toggleBackground(true)} onMouseOut={()=>toggleBackground(false)} />
                            <span className="absolute top-[20px] right-[20px] text-[11px] text-[white] p-[10px_25px] rounded-[20px] backdrop-blur">Generated by kandinsky 2</span>
                            <span className="absolute bottom-[15px] right-[20px]"><Image className="h-[50px] w-[auto]" src={arbius_logo_round} alt="" /></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}