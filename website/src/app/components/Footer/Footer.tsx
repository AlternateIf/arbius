"use client"
import React from "react"
import { StaticImageData } from "next/image"
import github from '@/app/assets/images/github.png'
import discord from '@/app/assets/images/discord.png'
import telegram from '@/app/assets/images/telegram.png'
import twitter from '@/app/assets/images/twitter.png'
import Image from "next/image"
import Link from "next/link"
import { Fade } from "react-awesome-reveal"
import arbius_logo from '@/app/assets/images/arbius_logo.png'
import small_arrow from '@/app/assets/images/small_arrow.png'

type FooterLink = {
  name: string;
  link: string;
  id: number;
};

const footerLinks: FooterLink[] = [
  /*
  {
    name: "Generate",
    link: "/generate"
  },
  */
  {
    name: "Upgrade",
    link: "/upgrade"
  },
  {
    name: "Media",
    link: "/media"
  },
  // {
  //   name: "Staking",
  //   link: "https://app.gysr.io/pool/0xf0148b59d7f31084fb22ff969321fdfafa600c02?network=ethereum"
  // }, //commenting for mobile footer
  {
    name: "Docs",
    link: "https://docs.arbius.ai/"
  },
  {
    name: "Models",
    link: "/models"
  },
  {
    name: "Explorer",
    link: "/explorer"
  },
  {
    name: "veAIUS",
    link: "/aius"
  },
  {
    name: "GYSR",
    link: "https://app.gysr.io/pool/0xf0148b59d7f31084fb22ff969321fdfafa600c02?network=ethereum"
  },
  {
    name: "Blog",
    link: "https://blog.arbius.ai/"
  }
].map((o, id) => ({ ...o, id }));

type SocialIcon = {
  image: StaticImageData;
  link: string;
  alt: string;
  id: number;
};

const socialIcons: SocialIcon[] = [
  {
    image: github,
    link: "https://github.com/semperai/arbius",
    alt: "Github"
  },
  {
    image: twitter,
    link: "https://x.com/arbius_ai",
    alt: "X"
  },
  {
    image: telegram,
    link: "https://t.me/arbius_ai",
    alt: "Telegram"
  },
  {
    image: discord,
    link: "https://discord.com/invite/eXxXMRCMzZ",
    alt: "Discord"
  }
].map((o, id) => ({ ...o, id }));


function FLink(link: FooterLink) {
  return (
    <Link href={link.link} target="_blank" key={link.id}>
      <div>
        <p className="text-[#393939] hover:text-purple-text lato-regular text-right font-medium text-[16px]">{link.name}</p>
      </div>
    </Link>
  );
}

export default function Footer() {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="bg-white-background lg:py-20 py-8">
      <div className="lg:w-section-width w-mobile-section-width mx-auto max-w-center-width">
        <Fade direction="up" triggerOnce={true}>
          <div className=" lg:block hidden">
            <div className="flex justify-between mb-10">
              <div>
                <div>
                  <Link href="/">
                    <Image src={arbius_logo} className="h-[40px] w-[auto]" alt="arbius" />
                  </Link>
                </div>
                <div className="flex items-center gap-4 mt-6">
                  {
                    socialIcons.map((social) => {
                      return (
                        <Link href={social.link} target="_blank" key={social.id}>
                          <div className="bg-white-background footer-icons-shadow w-[50px] relative group  h-[50px] rounded-xl flex items-center justify-center">
                            <div className="absolute w-[100%] h-[100%] left-0 z-[-10]  rounded-xl bg-buy-hover opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <Image src={social.image} alt={social.alt} width={20} />
                          </div>
                        </Link>
                      )
                    })
                  }
                </div>

              </div>
              <div>{footerLinks.slice(0, 3).map(FLink)}</div>
              <div>{footerLinks.slice(-5, -2).map(FLink)}</div>
              <div>{footerLinks.slice(-2).map(FLink)}</div>
              <div>
                <div className="flex items-center gap-4 cursor-pointer group" onClick={scrollTop}>
                  <p className="text-[#393939] lato-regular text-[14px] group-hover:text-purple-text">Back to top</p>
                  <Image src={small_arrow} className="rotate-[-90deg]" alt="arrow" width={8} />
                </div>
              </div>
            </div>
            <div className="bg-[#F4F4F4] h-[1.5px] w-[100%]"></div>
            <div className="mt-10">
              <p className="text-copyright-text text-[14px] lato-regular">&copy; Arbius 2024</p>
            </div>
          </div>
          <div className="lg:hidden block">
            <div className="flex  flex-col justify-between w-[100%] ">
              <div>
                <div>
                  <Image src={arbius_logo} className="h-[40px] w-[auto]" alt="arbius" />
                </div>
                <div className="flex items-center gap-4 mt-6">
                  {
                    socialIcons.map((social) => {
                      return (
                        <Link href={social.link} target="_blank" key={social.id}>
                          <div className="bg-white-background  relative group footer-icons-shadow w-[50px] h-[50px] rounded-xl flex items-center justify-center">
                            <div className="absolute w-[100%] h-[100%] left-0 z-[-10]  rounded-xl bg-buy-hover opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <Image src={social.image} alt={social.alt} width={20} />
                          </div>
                        </Link>
                      )
                    })
                  }
                </div>
                <div className="mt-10">
                  <p className="text-copyright-text text-[13px] lato-regular">&copy; Arbius 2024</p>
                </div>
              </div>
              <div className="flex justify-between flex-row">
                <div className="flex flex-col lg:flex-row items-start  lm:gap-0 gap-4 lm:mt-0 mt-4 flex-wrap">
                  {footerLinks.slice(0, 4).map(FLink)}
                </div>
                <div className="flex flex-col lg:flex-row items-start  lm:gap-0 gap-4 lm:mt-0 mt-4 flex-wrap">
                  {footerLinks.slice(-4).map(FLink)}
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
}

