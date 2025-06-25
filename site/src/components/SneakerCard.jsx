import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Card = styled(motion.div)`
  background: #fff;
  border-radius: 24px;
  box-shadow: 0 4px 32px rgba(0,0,0,0.10);
  padding: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.2s, box-shadow 0.2s;
  cursor: pointer;
  &:hover {
    transform: translateY(-8px) scale(1.03);
    box-shadow: 0 8px 40px rgba(252,87,94,0.18);
  }
`;
const SneakerImg = styled.img`
  width: 180px;
  height: 120px;
  object-fit: cover;
  border-radius: 16px;
  margin-bottom: 16px;
`;
const Name = styled.h3`
  margin: 8px 0 3px 0;
  font-size: 19px;
  color: #222;
`;
const Brand = styled.span`
  font-size: 16px;
  color: #fc575e;
  font-weight: bold;
`;
const Price = styled.div`
  margin: 11px 0 8px 0;
  font-size: 18px;
  color: #185a9d;
  font-weight: bold;
`;
const Sizes = styled.div`
  font-size: 15px;
  color: #888;
  margin-bottom: 11px;
`;
const AddBtn = styled.button`
  background: linear-gradient(90deg, #fc575e 0%, #f7b42c 100%);
  color: #fff;
  border: none;
  border-radius: 16px;
  padding: 8px 19px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.2s, transform 0.2s;
  &:hover {
    background: linear-gradient(90deg, #f7b42c 0%, #fc575e 100%);
    transform: scale(1.05);
  }
`;

const SneakerCard = ({ sneaker, onAdd }) => (
  <Card whileHover={{ scale: 1.04 }} initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
    <SneakerImg src={sneaker.image} alt={sneaker.name} />
    <Name>{sneaker.name}</Name>
    <Brand>{sneaker.brand}</Brand>
    <Sizes>Размеры: {sneaker.sizes.join(", ")}</Sizes>
    <Price>{sneaker.price.toLocaleString()} ₽</Price>
    <AddBtn onClick={e => { e.preventDefault(); onAdd(sneaker); }}>В корзину</AddBtn>
  </Card>
);

export default SneakerCard;
