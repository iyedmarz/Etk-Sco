import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import "./table.css";

interface Product {
  name: string;
  price: number;
  discount?: number;
  qte: number;
}

// function handleClick({ id }: any) {
//   console.log("selected");
// }

function Montant({ prix }: any, { quant }: any) {
  return prix * quant;
}

const products: Product[] = [
  {
    name: "Coca Cola 1,5 L",
    price: 2.0,
    discount: 0.5,
    qte: 1,
  },
  {
    name: "Coca Cola 1,5 L",
    price: 2.0,
    qte: 1,
  },
  {
    name: "Oasis Tropical canette",
    price: 1.5,
    qte: 1,
  },
  {
    name: "Coca Cola 1,5 L",
    price: 2.0,
    qte: 1,
  },
  {
    name: "Oasis Tropical canette",
    price: 1.5,
    qte: 1,
  },
  {
    name: "Sac",
    price: 0.2,
    qte: 1,
  },
  {
    name: "Sac",
    price: 0.2,
    qte: 1,
  },
  {
    name: "Sac",
    price: 0.2,
    qte: 1,
  },
  {
    name: "Sac",
    price: 0.2,
    qte: 1,
  },
  {
    name: "Sac",
    price: 0.2,
    qte: 1,
  },
  {
    name: "Sac",
    price: 0.2,
    qte: 1,
  },
  {
    name: "Sac",
    price: 0.2,
    qte: 1,
  },
  {
    name: "Sac",
    price: 0.2,
    qte: 1,
  },
  {
    name: "Sac",
    price: 0.2,
    qte: 1,
  },
  {
    name: "Sac",
    price: 0.2,
    qte: 1,
  },
  {
    name: "Sac",
    price: 0.2,
    qte: 1,
  },
  {
    name: "Sac",
    price: 0.2,
    qte: 1,
  },
  {
    name: "Sac",
    price: 0.2,
    qte: 1,
  },
  {
    name: "Sac",
    price: 0.2,
    qte: 1,
  },
  {
    name: "Sac",
    price: 0.2,
    qte: 1,
  },
];

const Products = () => {
  const router = useRouter();
  const [selectedRows, setSelectedRows] = useState<number[]>([]);
  const t = useTranslations("page.checkout");

  const handleClick = (index: number) => {
    const selectedIndex = selectedRows.indexOf(index);
    let newSelectedRows: number[] = [];
    if (selectedIndex === -1) {
      // If the row is not already selected, add it to the selection
      console.log("select");
      newSelectedRows = [...selectedRows, index];
    } else {
      // If the row is already selected, remove it from the selection
      console.log("diselect");
      newSelectedRows = selectedRows.filter((rowIndex) => rowIndex !== index);
    }

    setSelectedRows(newSelectedRows);
  };

  return (
    <div className="checkoutRightSide">
      <div className="totalContainer">
        <div className="productsContainer">
          <table id="mytable">
            <tr className="text-left font-bold border-b-2 ">
              <th>{t("cart.name")} </th>
              <th>{t("cart.price")}</th>
              <th>{t("cart.quantity")}</th>
              <th>{t("cart.montant")}</th>
            </tr>
            {products.map((product, index) => (
              <tr
                key={product.name}
                className={`border-b-2 ${
                  selectedRows.includes(index) ? "selected" : ""
                }`}
                onClick={() => {
                  handleClick(index);
                }}
              >
                <td className="text-left font-bold pl-5">{product.name}</td>
                <td>{product.price}</td>
                <td>{product.qte}</td>
                <td>{Montant(product.price, product.qte)}</td>
              </tr>
            ))}
          </table>
        </div>
        <div className="">
          <div className="upDownButtons">
            <button></button>
            <button></button>
          </div>
          <div className="attributesContainer">
            <div> {t("quantity")} </div>
            <div> {t("remise")} </div>
            <div> {t("TTC")} </div>
          </div>
        </div>
      </div>
      <div className="pay">
        <button
          className="paybut"
          id=""
          onClick={() => router.push(`/${locale}/fidalite`)}
        >
          <p>{t("payBut")}</p>
          <p>$$$$</p>
        </button>
      </div>
    </div>
  );
};

export default Products;
