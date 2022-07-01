import { StyledHeader } from "./style";

import { FiLogIn, FiShoppingCart } from "react-icons/fi";

const ThemeHeader = () => {
  return (
    <StyledHeader>
      <h1>Kenzie Shop</h1>
      <div>
        <h2>
          <FiShoppingCart /> <span> Carrinho </span>
        </h2>
        <button>
          {" "}
          <FiLogIn />
          Entrar
        </button>
      </div>
    </StyledHeader>
  );
};

export default ThemeHeader;
