import { Button, Col, Row } from "antd";
import { Navigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { IProduct } from "../../models/IProduct";
import { clearCartAll } from "../../store/reducer/ActionCreators";
import ElememtCart from "./ElememtCart/ElememtCart";

const Cart = () => {
  const { cart , sumPrice} = useAppSelector(state => state.sliceProducts);
  const dispatch = useAppDispatch();

  const onClearCart = () => {
    dispatch(clearCartAll())
  };

  if (!cart.length) {
   return  <Navigate to='/products' />
  }

  return (
    <>
      <Col
        style={{
          maxWidth: '1040px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          margin: '0 auto',
          paddingTop: '40px',
        }}
      >
        <Row
          style={{
            minWidth: '100%',
            alignItems: 'center',
            display: 'flex',
            justifyContent: 'space-evenly',
            backgroundColor: '#074715',
            minHeight: '30px',
            color: 'white'
          }}
        >
          <div
          >
            Наименование
          </div>
          <div>
            Цена
          </div>
          <div>
            Количество
          </div>
          <div>
            Удаление товара
          </div>
        </Row>
        {
          !!cart.length && cart
            .map((w: IProduct) => <ElememtCart key={w.name} product={w} />
            )
        }
        <div>
          <span> Суммарная стоимость товаров: {sumPrice}</span>
          <Button
            style={{
              marginTop: '20px',
              marginLeft: '50px',
            }}
            onClick={onClearCart}
          >
            Очистить корзину
          </Button>
        </div>
      </Col>
    </>
  );
};

export default Cart;