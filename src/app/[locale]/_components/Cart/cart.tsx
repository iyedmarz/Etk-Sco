import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import BarcodeReader from "./../BarcodeReader";
import "./table.css";

type Product = {
  barcode: string;
  name: string;
  price: number;
  quantity: number;
};

// function handleClick({ id }: any) {
//   console.log("selected");
// }

function Montant({ prix }: any, { quant }: any) {
  return prix * quant;
}

const Products = ({ locale }: { locale: string }) => {
  const router = useRouter();
  const [selectedRows, setSelectedRows] = useState<number[]>([]);
  const t = useTranslations("page.checkout");
  const [data, setData] = useState<Product[]>([]);

  const barcode = BarcodeReader;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:5000/product`);
        const responseData = await response.json();
        setData(responseData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [barcode]);

  console.log(data);

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
            {data.map((product, index) => (
              <tr
                key={product.barcode}
                className={`border-b-2 ${
                  selectedRows.includes(index) ? "selected" : ""
                }`}
                onClick={() => {
                  handleClick(index);
                }}
              >
                <td className="text-left font-bold pl-5">{product.name}</td>
                <td>{product.price}</td>
                <td>{product.quantity}</td>
                <td>{Montant(product.price, product.quantity)}</td>
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
