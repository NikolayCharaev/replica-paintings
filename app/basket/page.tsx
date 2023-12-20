'use client';
import { useState, useEffect } from 'react';
import ReproductionsList from '../components/ReproductionsList';
import Title from '../components/Title';
import { useSession } from 'next-auth/react';
import Button from '../components/Button';
import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';
import '@/styles/global.scss';
import '@/styles/basket.scss';
import { fetchBacket } from '@/redux/slices/basket/basketSlice';
import { IPostsProps } from '@/types/postsTypes';
import ModalCard from '../components/ModalCard';

const Basket = () => {
  const dispatch = useDispatch();
  // const router = useRouter();

  // console.log(router)

  const { data: session } = useSession();
  const { basketItems } = useSelector((state: any) => state.basketSlice);
  const [userBasket, setUserBasket] = useState<[]>([]);
  const [totalSum, setTotalSum] = useState(0);
  const [modalCard, setModalCart] = useState<boolean>(false);

  function bodyScroll(flag: boolean) {
    if (flag) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }

  useEffect(() => {
    const userPosts = basketItems?.filter((elem: IPostsProps) => elem.user === session?.user?.id);
    setUserBasket(userPosts);

    setTotalSum(
      userPosts.reduce((a: any, b: any) => {
        return a + Number(b.paintingPrice);
      }, 0),
    );
  }, []);

  return (
    <div className="basket" style={{ overflow: 'hidden' }}>
      <div className="container">
        <div className="basket__wrapper">
          <Title>Корзина</Title>

          <div className="basket__wrapper-bottom">
            <div className="basket__list">
              <ReproductionsList
                //@ts-ignore
                posts={userBasket}
                basket={true}
              />
            </div>
            <div className="basket__order">
              <h1>
                Итоговая сумма корзины: <span>{totalSum}</span> руб.
              </h1>
              <Button
                onClick={() => {
                  setModalCart(true);
                  bodyScroll(true);
                }}>
                Перейти к оформлению
              </Button>
            </div>
          </div>
        </div>
      </div>

      {modalCard && <ModalCard setModalCard={setModalCart} bodyScroll={bodyScroll} />}
    </div>
  );
};

export default Basket;
