import { Container } from "./styles";
import { OrdersBoard } from "../OrdersBoard";
import type { Order } from "../../types/Order";

const orders: Order[] = [
  {
    _id: "69b96632dc3d65e7ae1c5ef4",
    table: "123",
    status: "WAITING",
    products: [
      {
        product: {
          name: "Pizza quatro queijos",
          imagePath: "1773328419367-48098548-2c3e-41df-8a3b-2299a292015d.png",
          price: 49,
        },
        quantity: 1,
        _id: "69b96632dc3d65e7ae1c5ef5",
      },
    ],
  },
];

export function Orders() {
  return (
    <Container>
      <OrdersBoard icon="🕟" title="Fila de espera" orders={orders} />
      <OrdersBoard icon="👨‍🍳" title="Em preparação" orders={[]} />
      <OrdersBoard icon="✅" title="Pronto!" orders={[]} />
    </Container>
  );
}
