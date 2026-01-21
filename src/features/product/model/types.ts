export type ProductItem = {
    id : string
    image : string
    name : string
    price : number
    tags : string[]
    categories : string[]
};

export type CartOutletContext = {
    addToCart: (id: string) => void;
};
