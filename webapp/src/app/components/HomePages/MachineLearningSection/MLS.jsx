"use client";
import React from "react";
import right_arrow from "../../../assets/images/right_arrow.png";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";
import Link from "next/link";
export default function MachineLearningSection() {
  return (
    <div className="bg-[url('./assets/images/peer_background.jpg')] bg-cover font-Sequel-Sans-Medium-Head lg:h-[75vh] lg:flex lg:items-center">
      <div className="py-24 lg:p-0 w-mobile-section-width lg:w-section-width m-[auto] max-w-center-width">
        <div className="w-[100%] xl:w-[65%]">
          <Fade direction="up" triggerOnce={true}>
            <div className="text-[12px] Gradient-transparent-text bg-background-gradient-txt">
              Welcome to Arbius!
            </div>
          </Fade>

          <div className="hidden lg:block fade-container lg:text-header 2xl:text-header-2xl text-mobile-header text-black-text">
            <Fade delay={0.1} cascade damping={0.05} triggerOnce={true}>
              Peer-to-peer machine
            </Fade>
          </div>
          <div className="hidden lg:block fade-container lg:text-header 2xl:text-header-2xl text-mobile-header text-black-text mt-[-15px] mb-6">
            <Fade delay={0.1} cascade damping={0.1} triggerOnce={true}>
              learning
            </Fade>
          </div>
          <div className="lg:hidden fade-container text-mobile-header text-black-text leading-[50px] lg:leading-none mb-6">
            <Fade delay={0.1} cascade damping={0.1} triggerOnce={true}>
              Peer-to-peer machine learning
            </Fade>
          </div>

          <div>
            <Fade direction="up" triggerOnce={true}>
              <div className="text-para font-Sequel-Sans-Light-Body text-subtext-one">
                Arbius is a decentralized network for machine learning and a
                token with a fixed supply like Bitcoin. New coins are generated
                with GPU power by participating in the network. There is no
                central authority to create new coins. Arbius is fully
                open-source. Holders vote on-chain for protocol upgrades. Models
                operate as DAOS with custom rules for distribution and rewards,
                providing a way for model creators to earn income.
              </div>
            </Fade>
            <Fade direction="up" triggerOnce={true}>
              <div className="flex items-center mt-[30px] gap-[20px]">
                <Link href={"https://arbius.ai/generate"} target="_blank">
                  <div>
                    {/*<button className="hover:bg-buy-hover transition-all ease-in duration-300 bg-[black] text-[white] flex items-center gap-[5px] justify-center p-[8px_25px] rounded-[20px]">Try now <Image className="h-[20px] w-[auto]" src={right_arrow} alt="" /></button>*/}

                    <button
                      type="button"
                      className="relative group bg-black py-2 px-8 rounded-full flex items-center gap-3"
                    >
                      <div class="absolute w-[100%] h-[100%] left-0 z-0 py-2 px-8 rounded-full bg-buy-hover opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="font-Sequel-Sans-Medium-Head relative z-10 text-original-white lg:text-[100%]">
                        Try now
                      </div>
                      <Image
                        src={right_arrow}
                        width={18}
                        className="relative z-10"
                        alt="right arrow"
                      />
                    </button>
                  </div>
                </Link>
                <Link href={"https://arbius.ai/paper.pdf"} target="_blank">
                  <div>
                    {/*<button className="hover:bg-button-gradient hover:text-[white] hover:border-[transparent] border-[1px] p-[8px_25px] rounded-[20px]">Read Whitepaper</button>*/}
                    <button
                      type="button"
                      className=" hover:text-[white] hover:border-[transparent] text-original-black border-[1px] relative group bg-transparent py-2 px-8 rounded-full flex items-center gap-3"
                    >
                      <div class="absolute w-[100%] h-[100%] left-0 z-0 py-2 px-8 rounded-full bg-button-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="font-Sequel-Sans-Medium-Head relative z-10 lg:text-[100%]">
                        Read Whitepaper
                      </div>
                    </button>
                  </div>
                </Link>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
}
