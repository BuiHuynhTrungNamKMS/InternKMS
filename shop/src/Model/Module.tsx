export interface ItemProps{
    id: number;
    name: string;
    image: string;
}

export interface ProductProps{
    products: ItemProps[];
}

export interface Product{
    id: number,
    name: string;
    type: string;
    price: number;
    color: string;
    describe: string;
    gender: string;
    image: string;
    items: any[]
}
// export interface ProductProps{
//     product: Product;
// }
export interface ProductListProps{
    products: Product[];
}

export interface DetailProductProps{
    product: Product;
}

  export interface CartProduct {
    id: number;
    price: number;
    quantity: number;
    totalPrice: number;
    name: string;
    image: string;
    color: string;
  }
export interface CartState {
    itemsList: CartProduct[],
    totalQuantity: number,
    totalPrice: number,
    showCart: boolean,
  }

  export interface AuthState {
    isLoggedIn: boolean;
    id: number;
    username: string;
    email: string;
    accessToken: string;
    tokenType: string;
  }

  export interface DialogProps {
    message: string,
  }