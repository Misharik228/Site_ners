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
  background: linear-gradient(135deg,rgb(148, 51, 88) 0%, #185a9d 100%);
  color: #fff;
  padding: 0;
  box-sizing: border-box;
`;

const Title = styled(motion.h1)`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const Text = styled(motion.p)`
  font-size: 1.2rem;
  max-width: 600px;
  text-align: center;
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
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.18);
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
  transform: translateX(-50%) rotate(8deg);
`;

const About = () => (
  <>
    <Bg>
      <BgImg src="https://zdes-design.ru/wp-content/uploads/sis960_01.jpg" alt="bg-about" />
    </Bg>
    <Wrapper initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
      <Title initial={{ y: -40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }}>О нас</Title>
      <Text initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.4 }}>
        Мы — команда энтузиастов, которые любят кроссовки и стильную обувь. В нашем магазине вы найдете только самые модные и качественные модели от топовых брендов. Мы верим, что кроссовки — это не просто обувь, а часть твоей индивидуальности!
      </Text>
      <ImagesRow>
        <SneakerImg src="https://хасл.рф/_next/image?url=https%3A%2F%2Fxn--80awro.xn--p1ai%2Fstorage%2Fimport_files%2F30%2F30552588353b11f0bb062c44fd7ae203_d422ce2e4aa811f0bb062c44fd7ae203.jpg&w=1920&q=75" alt="Sneakers4" />
        <SneakerImg src="https://хасл.рф/_next/image?url=https%3A%2F%2Fxn--80awro.xn--p1ai%2Fstorage%2Fimport_files%2Fd0%2Fd0d250d6353c11f0bb062c44fd7ae203_82a305f64d0111f0bb072c44fd7ae203.jpg&w=1920&q=75" alt="Sneakers5" />
      </ImagesRow>
    </Wrapper>
  </>
);

export default About;
