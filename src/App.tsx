import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import {
	Wrapper,
	Header,
	Menu,
	Slider,
    Slide,
	Info,
	Process,
	Products,
	Statistics,
	Clients,
    Client,
	Footer
} from "./style/App.styled";
import GlobalStyle from './style/Global.styled';

import InfoCard from './components/InfoCard';
import ProcessCard from './components/ProcessCard';
import StatisticsCard from "./components/StatisticsCard";

const App: React.FC = () => {
    return (
        <Wrapper>
			<GlobalStyle />
            <Header>
                <img src="" alt="cosmolife logo" />
                <Menu>
                    <a href=""></a>
                    <a href=""></a>
                    <a href=""></a>
                </Menu>
            </Header>
            <Slider>
				<Swiper
					spaceBetween={50}
					slidesPerView={1}
					onSlideChange={() => console.log('slide change')}
					onSwiper={(swiper) => console.log(swiper)}
				>
					<SwiperSlide>
                        <Slide>
                            Slide 1
                        </Slide>
                    </SwiperSlide>
					<SwiperSlide>
                        <Slide>
                            Slide 2
                        </Slide>
                    </SwiperSlide>
					<SwiperSlide>
                        <Slide>
                            Slide 3
                        </Slide>
                    </SwiperSlide>
					<SwiperSlide>
                        <Slide>
                            Slide 4
                        </Slide>    
                    </SwiperSlide>
				</Swiper>
            </Slider>
            <Info>
                <InfoCard />
                <InfoCard />
                <InfoCard />
                <InfoCard />
                <InfoCard />
            </Info>
            <Process>
                <ProcessCard />
                <ProcessCard />
                <ProcessCard />
            </Process>
            <Products>
                {
                    // produtos
                }
            </Products>
            <Statistics>
                <StatisticsCard />
                <StatisticsCard />
                <StatisticsCard />
            </Statistics>
            <Clients>
                <Client />
            </Clients>
            <Footer>
                
            </Footer>
        </Wrapper>
    );
};

export default App;