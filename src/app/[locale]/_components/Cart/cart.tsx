import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import BarcodeScanner from "./../BarcodeReader";
import "./table.css";

type Product = {
  barcode: string;
  name: string;
  price: number;
  quantity: number;
};

const Products = ({ locale }: { locale: string }) => {
  const router = useRouter();
  const [selectedRows, setSelectedRows] = useState<number[]>([]);
  const t = useTranslations("page.checkout");
  const [cart, setCart] = useState<Product[]>([]);
  const [scannedData, setScannedData] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/product/${scannedData}`
        );
        const responseData = await response.json();
        const existingProductIndex = cart.findIndex(
          (product) => product.barcode === responseData.barcode
        );
        if (existingProductIndex !== -1) {
          // If product already exists in cart, update its quantity
          const updatedCart = [...cart];
          updatedCart[existingProductIndex].quantity += 1;
          setCart(updatedCart);
        } else {
          // If product doesn't exist in cart, add it to cart
          setCart([...cart, responseData]);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    if (scannedData) {
      fetchData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scannedData]);

  const handleBarcodeScan = (barcode: string) => {
    console.log("Scanned barcode:", barcode);
    setScannedData(barcode);
  };

  const handleClick = (index: number) => {
    const selectedIndex = selectedRows.indexOf(index);
    let newSelectedRows: number[] = [];
    if (selectedIndex === -1) {
      newSelectedRows = [...selectedRows, index];
    } else {
      newSelectedRows = selectedRows.filter((rowIndex) => rowIndex !== index);
    }

    setSelectedRows(newSelectedRows);
  };

  const Montant = (prod: Product) => {
    const montant = prod.price * prod.quantity;
    return montant;
  };

  return (
    <div className="checkoutRightSide">
      <div className="totalContainer">
        <div className="productsContainer">
          <table id="mytable">
            <tbody>
              <tr key="tableHeader" className="text-left font-bold border-b-2">
                <th>{t("cart.name")} </th>
                <th>{t("cart.price")}</th>
                <th>{t("cart.quantity")}</th>
                <th>{t("cart.montant")}</th>
              </tr>
              {cart.map((product, index) => (
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
                  <td>{product.price}€</td>
                  <td>{product.quantity}</td>
                  <td>{Montant(product)}€</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="">
          <div className="upDownButtons">
            <button></button>
            <button></button>
          </div>
          <div className="attributesContainer">
            <div> {t("quantity")} 0</div>
            <div> {t("remise")} 0€</div>
            <div> {t("TTC")} 0€</div>
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
        </button>
      </div>
      <BarcodeScanner onBarcodeScan={handleBarcodeScan} />
    </div>
  );
};

export default Products;
