import { Button, Col, Row } from "antd";
import { useAppSelector } from "../../hooks/redux";
import { IProduct } from "../../models/IProduct";
import ElememtCart from "./ElememtCart/ElememtCart";

const Cart = () => {
  const { cart } = useAppSelector(state => state.sliceProducts);

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
        <Button
        style={{
         marginTop: '20px',
        }}
        >
          Очистить корзину
        </Button>
      </div>
      </Col>  
    </>
  );
};

export default Cart;