
import React from "react";
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import styled from "styled-components";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation"

import logoZgorzelec from "../../assets/svg/logos/logo_zgorzelec.svg"
import logoWcs from "../../assets/svg/logos/logo_wcs_kotliny_jeleniogorskiej.svg"
import logoLpLwowek from "../../assets/svg/logos/logo_lp_lwowek_slaski.svg"
import logoPortGdynia from "../../assets/svg/logos/logo_port_gdynia.svg"
import logoPakoslaw from "../../assets/svg/logos/logo_gmina_pakoslaw.svg"
import logoUmWroclaw from "../../assets/svg/logos/logo_um_wroclaw.svg"


// import Swiper core and required modules
import SwiperCore, {
    Autoplay
} from 'swiper';

// install Swiper modules
SwiperCore.use([Autoplay]);


const SvgLogoPathFinder = [
    {
        Title: 'Miasto Zgorzelec',
        SvgPath: logoZgorzelec,
        Class: 'logoZgorzelec'
    },
    {
        Title: 'Wojewódzkie Centrum Szpitalne Kotliny Jeleniogórskiej',
        SvgPath: logoWcs,
        Class: 'logoWcs'
    },
    {
        Title: 'Nadleśnictwo Lwówek Śląski - Lasy Państwowe',
        SvgPath: logoLpLwowek,
        Class: 'logoLpLwowek'
    },
    {
        Title: 'Port Gdynia',
        SvgPath: logoPortGdynia,
        Class: 'logoPortGdynia'
    },
    {
        Title: 'Gmina Pakosław',
        SvgPath: logoPakoslaw,
        Class: 'logoPakoslaw'
    },
    {
        Title: 'Uniwersytet Medyczny Im. Piastów Śląskich we Wrocławiu',
        SvgPath: logoUmWroclaw,
        Class: 'logoUmWroclaw'
    },
    {
        Title: 'Miasto Zgorzelec',
        SvgPath: logoZgorzelec,
        Class: 'logoZgorzelec'
    },
    {
        Title: 'Wojewódzkie Centrum Szpitalne Kotliny Jeleniogórskiej',
        SvgPath: logoWcs,
        Class: 'logoWcs'
    },
    {
        Title: 'Nadleśnictwo Lwówek Śląski - Lasy Państwowe',
        SvgPath: logoLpLwowek,
        Class: 'logoLpLwowek'
    },
    {
        Title: 'Port Gdynia',
        SvgPath: logoPortGdynia,
        Class: 'logoPortGdynia'
    },
    {
        Title: 'Gmina Pakosław',
        SvgPath: logoPakoslaw,
        Class: 'logoPakoslaw'
    },
    {
        Title: 'Uniwersytet Medyczny Im. Piastów Śląskich we Wrocławiu',
        SvgPath: logoUmWroclaw,
        Class: 'logoUmWroclaw'
    },
]

export default function SliderWithLogos() {
    return (
        <>
            <Swiper style={{height: '100%'}} slidesPerView={2} spaceBetween={30} autoplay={{"delay": 2500, "disableOnInteraction": false}} loop={true} className="mySwiper"
            breakpoints={{
                // when window width is >= 640px
                1023: {
                slidesPerView: 6,
                },
                // when window width is >= 640px
                767: {
                slidesPerView: 3,
                },
                // when window width is >= 768px
            }}
            >
                {SvgLogoPathFinder.map((value, index) => {
                    const SvgLogo = styled.div`
                        background-image: url( ${ value.SvgPath } );
                        background-size: 80%;
                        background-position: center;
                        background-repeat: no-repeat;
                        width: 100%;
                        height: 100%;

                        @media (max-width: 1023px) {
                            background-size: 50%;
                        }
                    `
                    return (
                        <SwiperSlide className={ value.Class }>
                            <Tippy content={<span>{value.Title}</span>} placement="bottom">
                                <SvgLogo />
                            </Tippy>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </>
    )
}