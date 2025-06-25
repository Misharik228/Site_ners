import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { useCart } from "../components/CartContext";

const Wrapper = styled(motion.div)`
  min-height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(135deg, #fc575e 0%,rgb(35, 51, 94) 100%);
  color: #fff;
  padding: 0;
  box-sizing: border-box;
`;
const Title = styled.h1`
  margin-bottom: 32px;
`;
const List = styled.div`
  width: 100%;
  max-width: 600px;
  background: #fff;
  color: #222;
  border-radius: 24px;
  box-shadow: 0 4px 32px rgba(0, 0, 0, 0.1);
  padding: 32px;
  margin-bottom: 32px;
`;
const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #eee;
  padding: 16px 0;
  &:last-child {
    border-bottom: none;
  }
`;
const Img = styled.img`
  width: 60px;
  height: 40px;
  object-fit: cover;
  border-radius: 11px;
  margin-right: 16px;
`;
const Name = styled.div`
  flex: 1;
  font-weight: bold;
`;
const Qty = styled.input`
  width: 48px;
  text-align: center;
  border-radius: 8px;
  border: 1px solid #eee;
  margin: 0 16px;
`;
const RemoveBtn = styled.button`
  background: #fc575e;
  color: #fff;
  border: none;
  border-radius: 11px;
  padding: 5px 13px;
  font-size: 16px;
  cursor: pointer;
  transition: background 0.2s;
  &:hover {
    background: #f7b42c;
  }
`;
const Total = styled.div`
  font-size: 21px;
  font-weight: bold;
  text-align: right;
  margin-bottom: 32px;
`;
const OrderBtn = styled.button`
  background: linear-gradient(90deg, #f7b42c 0%, #fc575e 100%);
  color: #fff;
  border: none;
  border-radius: 16px;
  padding: 11px 32px;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.2s, transform 0.2s;
  &:hover {
    background: linear-gradient(90deg, #fc575e 0%, #f7b42c 100%);
    transform: scale(1.04);
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

const Cart = () => {
  const { cart, removeFromCart, changeQty, clearCart, total } = useCart();
  const [ordered, setOrdered] = React.useState(false);

  const handleOrder = () => {
    setOrdered(true);
    clearCart();
  };

  return (
    <>
      <Bg>
        <BgImg src="https://avatars.mds.yandex.net/get-altay/10703420/2a0000018b576a30ec1a8f158f17608b7200/L_height" alt="bg-cart" />
      </Bg>
      <Wrapper
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Title>Корзина</Title>
        {cart.length === 0 && !ordered && <p>Ваша корзина пуста.</p>}
        {ordered && (
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            style={{
              color: "#fff",
              fontSize: "1.3rem",
              margin: "2rem 0",
            }}
          >
            Спасибо за заказ! Мы свяжемся с вами.
          </motion.div>
        )}
        {cart.length > 0 && !ordered && (
          <>
            <List>
              {cart.map((item) => (
                <Item key={item.id}>
                  <Img src={item.image} alt={item.name} />
                  <Name>{item.name}</Name>
                  <Qty
                    type="number"
                    min={1}
                    value={item.qty}
                    onChange={(e) =>
                      changeQty(
                        item.id,
                        Math.max(1, Number(e.target.value))
                      )
                    }
                  />
                  <span>{(item.price * item.qty).toLocaleString()} ₽</span>
                  <RemoveBtn onClick={() => removeFromCart(item.id)}>
                    ✕
                  </RemoveBtn>
                </Item>
              ))}
            </List>
            <Total>Итого: {total.toLocaleString()} ₽</Total>
            <OrderBtn onClick={handleOrder}>Оформить заказ</OrderBtn>
          </>
        )}
      </Wrapper>
    </>
  );
};

export default Cart;
