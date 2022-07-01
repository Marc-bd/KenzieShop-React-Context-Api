import { StyledCart, StyledCartInfo, StyledContainerCart } from "./style";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

const Cart = ({ props }) => {
  const { cart, removeProductFromCart } = useContext(CartContext);

  const totalValue = (arr, show) => {
    return arr.reduce((acc, act) => acc + act.price * act.qtd, 0);
  };

  return (
    <StyledContainerCart>
      <StyledCart>
        <div className="headerCart">
          <h2>Resumo do pedido</h2>
        </div>
        <div className="containerList">
          <ul className="listCart">
            {cart.length > 0 ? (
              cart.map((product) => (
                <li key={product.id}>
                  <img
                    src={product.img}
                    alt={`imagem produto ${product.img}`}
                  />
                  <span> {product.qtd} </span>
                  <h3>{product.name}</h3>
                  <h4>
                    R$: <span>{product.price}</span>
                  </h4>

                  <button onClick={() => removeProductFromCart(product.id)}>
                    Excluir
                  </button>
                </li>
              ))
            ) : (
              <div className="emptyCart">
                <h3> Carrinho vazio... </h3>
              </div>
            )}
          </ul>
        </div>
      </StyledCart>
      {cart.length > 0 && (
        <StyledCartInfo>
          <div>
            <h3>
              Total: R$ <span>{totalValue(cart)}</span>
            </h3>
          </div>
          <button>Finalizar Compra</button>
        </StyledCartInfo>
      )}
    </StyledContainerCart>
  );
};

export default Cart;

/*

  (
        cart.map((product) => (
        <StyledCartInfo>
          <div>
            <h3>
              Total: R$ <span>1221</span>
            </h3>
          </div>
          <button>Finalizar Compra</button>
        </StyledCartInfo>
                
              ))
            ) 

            */
