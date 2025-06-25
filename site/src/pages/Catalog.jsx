import React, { useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import sneakersData from "../data/sneakers";
import SneakerCard from "../components/SneakerCard";
import { useCart } from "../components/CartContext";

const Wrapper = styled(motion.div)`
  min-height: 100vh;
  background: linear-gradient(135deg,rgb(148, 51, 88) 0%, #185a9d 100%);
  color: #fff;
  padding: 2vw 0 6vw 0;
  box-sizing: border-box;
  width: 100vw;
  min-width: 0;
  @media (max-width: 900px) {
    padding: 1vw 0 4vw 0;
  }
`;
const Title = styled.h1`
  text-align: center;
  margin-bottom: 2rem;
  z-index: 2;
  position: relative;
  font-size: 2.5rem;
  @media (max-width: 600px) {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
`;
const Filters = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  margin-bottom: 2rem;
  z-index: 2;
  position: relative;
  @media (max-width: 600px) {
    gap: 0.5rem;
    margin-bottom: 1rem;
  }
`;
const Select = styled.select`
  padding: 0.5rem 1rem;
  border-radius: 1rem;
  border: none;
  font-size: 1rem;
`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 2vw;
  max-width: 1200px;
  margin: 0 auto;
  width: 90vw;
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 4vw;
    width: 98vw;
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
  opacity: 0.08;
  width: 40vw;
  min-width: 180px;
  max-width: 600px;
  filter: blur(1px) grayscale(0.2);
  user-select: none;
  pointer-events: none;
  transition: opacity 0.3s, width 0.3s;

  &:nth-child(1) {
    top: 5vh;
    left: -8vw;
    transform: rotate(-18deg);
  }
  &:nth-child(2) {
    bottom: 0;
    right: -10vw;
    transform: rotate(12deg) scaleX(-1);
  }
  @media (max-width: 600px) {
    width: 80vw;
    left: -30vw;
    right: auto;
    top: 10vh;
    bottom: auto;
  }
`;

const unique = (arr) => [...new Set(arr)];

const Catalog = () => {
  const [brand, setBrand] = useState('');
  const [size, setSize] = useState('');
  const [price, setPrice] = useState('');
  const { addToCart } = useCart();

  // Фильтрация
  const filtered = sneakersData.filter(s =>
    (!brand || s.brand === brand) &&
    (!size || s.sizes.includes(Number(size))) &&
    (!price || s.price <= Number(price))
  );

  // Для фильтров
  const brands = unique(sneakersData.map(s => s.brand));
  const sizes = unique(sneakersData.flatMap(s => s.sizes)).sort((a,b)=>a-b);
  const prices = [10000, 12000, 15000, 20000];

  return (
    <>
      <Bg>
        <BgImg src="https://avatars.mds.yandex.net/get-altay/9833397/2a00000189abfdfeb76f6cc5dfb2e4822b72/L_height" alt="bg1" />
        <BgImg src="https://avatars.mds.yandex.net/get-altay/14005436/2a00000194cba3a56cb400fb05eec9e34971/L_height" alt="bg2" />
      </Bg>
      <Wrapper initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
        <Title>Каталог</Title>
        <Filters>
          <Select value={brand} onChange={e => setBrand(e.target.value)}>
            <option value="">Бренд</option>
            {brands.map(b => <option key={b} value={b}>{b}</option>)}
          </Select>
          <Select value={size} onChange={e => setSize(e.target.value)}>
            <option value="">Размер</option>
            {sizes.map(s => <option key={s} value={s}>{s}</option>)}
          </Select>
          <Select value={price} onChange={e => setPrice(e.target.value)}>
            <option value="">Цена до</option>
            {prices.map(p => <option key={p} value={p}>{p.toLocaleString()} ₽</option>)}
          </Select>
        </Filters>
        <Grid>
          {filtered.length ? filtered.map(sneaker => (
            <SneakerCard key={sneaker.id} sneaker={sneaker} onAdd={addToCart} />
          )) : <p style={{gridColumn:'1/-1',textAlign:'center'}}>Нет кроссовок по выбранным фильтрам</p>}
        </Grid>
      </Wrapper>
    </>
  );
};

export default Catalog;
