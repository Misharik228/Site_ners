import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

const Wrapper = styled(motion.div)`
  min-height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg,rgb(35, 51, 94) 0%, #fc575e 100%);
  color: #fff;
  padding: 0;
  box-sizing: border-box;
`;

const Title = styled(motion.h1)`
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 1rem;
  text-shadow: 0 4px 24px rgba(0,0,0,0.2);
`;

const Subtitle = styled(motion.p)`
  font-size: 1.5rem;
  margin-bottom: 2rem;
`;

const ImagesRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2vw;
  margin-top: 2vw;
  width: 100vw;
  max-width: 100vw;
`;

const SneakerImg = styled.img`
  width: 320px;
  max-width: 80vw;
  border-radius: 2rem;
  box-shadow: 0 8px 32px rgba(0,0,0,0.18);
  margin-bottom: 1vw;
  background: #fff;
  @media (max-width: 600px) {
    width: 90vw;
    border-radius: 1rem;
  }
`;

const Bg = styled.div`
  position: fixed;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  background: none;
  overflow: hidden;
`;
const BgImg = styled.img`
  position: absolute;
  opacity: 0.09;
  width: 60vw;
  min-width: 320px;
  max-width: 900px;
  filter: blur(2px) grayscale(0.1);
  user-select: none;
  pointer-events: none;
  transition: opacity 0.3s;
  top: 10vh;
  left: 50%;
  transform: translateX(-50%) rotate(-8deg);
`;

const Home = () => (
  <>
    <Bg>
      <BgImg src="https://pos-center.ru/img/journal/kak-otkryt-obuvnoy-magazin-sovety-dlya-nachinayushchih-s-nulya-i-opytnyh-predprinimateley-11.jpg" alt="bg-home" />
    </Bg>
    <Wrapper initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
      <Title initial={{ y: -40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }}>Sneaker Store</Title>
      <Subtitle initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.4 }}>
        Самые стильные и современные кроссовки для тебя
      </Subtitle>
      <ImagesRow>
        <SneakerImg src="https://40.img.avito.st/image/1/1.E-tsjbasLWfYrqmA1bIKwniyvwDa.zsZlc3mYolkAv-OvFc-A6cO7R9PKda9WKkw8GiyIa9c" alt="Sneakers1" />
        <SneakerImg src="https://avatars.mds.yandex.net/get-altay/9847279/2a0000018def650c526e61d6256e8560d260/L_height" alt="Sneakers2" />
        <SneakerImg src="https://avatars.mds.yandex.net/get-altay/9368060/2a0000018a17e581a0f9bea84e2d018b4bf8/L_height" alt="Sneakers3" />
      </ImagesRow>
    </Wrapper>
  </>
);

export default Home;
