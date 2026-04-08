import { Actions, ModalBody, OrderDetails, Overlay } from "./styles";
import closeIcon from "../../assets/images/close-icon.svg";
import type { Order } from "../../types/Order";
import { formatCurrency } from "../../utils/formatCurrency";
import { api } from "../../utils/api";

interface OrderModalProps {
  visible: boolean;
  isVisible: (visible: boolean) => void;
  order: Order | null;
  onCancelOrder: () => void;
  isLoading: boolean;
  onChangeOrder: () => void;
}

export function OrderModal({
  visible,
  isVisible,
  order,
  onCancelOrder,
  isLoading,
  onChangeOrder,
}: OrderModalProps) {
  if (!visible || !order) {
    return null;
  }

  const total = order.products.reduce((total, { product, quantity }) => {
    return total + product.price * quantity;
  }, 0);

  return (
    <Overlay onClick={() => isVisible(!visible)}>
      <ModalBody>
        <header>
          <strong>Mesa {order.table}</strong>

          <button type="button" onClick={() => isVisible(!visible)}>
            <img src={closeIcon} alt="Ícone de fechar" />
          </button>
        </header>

        <div className="status-container">
          <small>Status do Pedido</small>
          <div>
            <span>
              {order.status === "WAITING" && "🕟"}
              {order.status === "IN_PRODUCTION" && "👨‍🍳"}
              {order.status === "DONE" && "✅"}
            </span>

            <strong>
              {order.status === "WAITING" && "Fila de espera"}
              {order.status === "IN_PRODUCTION" && "Em produção"}
              {order.status === "DONE" && "Pronto!"}
            </strong>
          </div>
        </div>

        <OrderDetails>
          <strong>Itens</strong>

          <div className="order-items">
            {order.products.map(({ _id, product, quantity }) => (
              <div className="item" key={_id}>
                <img
                  src={`${api.defaults.baseURL}/uploads/${product.imagePath}`}
                  alt={product.name}
                  width="48"
                  height="40"
                />

                <span className="quantity">{quantity}x</span>

                <div className="product-details">
                  <strong>{product.name}</strong>
                  <span>{formatCurrency(product.price)}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="total">
            <span>Total</span>
            <strong>{formatCurrency(total)}</strong>
          </div>
        </OrderDetails>

        <Actions>
          {order.status !== "DONE" && (
            <button
              type="button"
              className="primary"
              disabled={isLoading}
              onClick={onChangeOrder}
            >
              <span>{order.status === "WAITING" ? "👨‍🍳" : "✅"}</span>
              <strong>
                {order.status === "WAITING" ? "Iniciar Produção" : "Pronto"}
              </strong>
            </button>
          )}

          <button
            type="button"
            className="secondary"
            onClick={onCancelOrder}
            disabled={isLoading}
          >
            Cancelar Pedido
          </button>
        </Actions>
      </ModalBody>
    </Overlay>
  );
}
