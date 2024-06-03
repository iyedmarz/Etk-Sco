import React from "react";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import BarcodeScanner from "@/_components/BarcodeReader";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, handleSelectedRows } from "@/_redux/cartSlice";
import { RootState, AppDispatch } from "@/_redux/store";
import "./table.css";

const Cart = ({ locale }: { locale: string }) => {
  const router = useRouter();
  const t = useTranslations("page.checkout");
  const dispatch: AppDispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const { totalPrice, selectedRows } = useSelector(
    (state: RootState) => state.cart
  );

  const fetchData = async (barcode: string) => {
    try {
      const response = await fetch(`http://localhost:5000/product/${barcode}`); //
      const responseData = await response.json();
      dispatch(addToCart(responseData));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleBarcodeScan = (barcode: string) => {
    console.log("Scanned barcode:", barcode);
    fetchData(barcode);
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
              {cartItems.map((product) => (
                <>
                  <tr
                    key={product.barcode}
                    className={`border-b-2 ${
                      selectedRows.includes(product.barcode) ? "selected" : ""
                    }`} // selectedRows.includes(index)
                    onClick={() => {
                      dispatch(handleSelectedRows(product.barcode));
                    }}
                  >
                    <td className="text-left font-bold pl-5">{product.name}</td>
                    <td>
                      {Intl.NumberFormat("fr-TN", {
                        style: "currency",
                        currency: "TND",
                      }).format(product.priceUnit)}
                    </td>
                    <td>{product.quantity}</td>
                    <td>
                      {Intl.NumberFormat("fr-TN", {
                        style: "currency",
                        currency: "TND",
                      }).format(product.price_quantity)}
                    </td>
                  </tr>
                  {product.promoDiscount && (
                    <tr className="border-b-2">
                      <td className="text-left font-bold pl-5" colSpan={4}>
                        {t("cart.discount")}: {product.promoDiscount.discount}%
                      </td>
                    </tr>
                  )}
                </>
              ))}
            </tbody>
          </table>
        </div>
        <div className="">
          {/* <div className="upDownButtons">
            <button></button>
            <button></button>
          </div> */}
          <div className="attributesContainer">
            <div>
              {t("quantity")} {cartItems.length}
            </div>
            <div> {t("remise")} 0 Dt</div>
            {/* <div> {t("TTC")} 0 Dt</div> */}
          </div>
        </div>
      </div>
      <div className="pay">
        <button
          className="paybut"
          id=""
          onClick={() => {
            if (totalPrice > 0) router.push(`/${locale}/fidalite`);
          }}
        >
          <p>{t("payBut")}</p>
          <p>
            {Intl.NumberFormat("fr-TN", {
              style: "currency",
              currency: "TND",
            }).format(totalPrice)}
          </p>
        </button>
        <div className="flex flex-row">
          <button
            className="mx-2"
            onClick={() => handleBarcodeScan("6191507220214")}
          >
            VitalaitLait
          </button>
          <button
            className="mx-2"
            onClick={() => handleBarcodeScan("6194001800319")}
          >
            Melliti
          </button>
          <button
            className="mx-2"
            onClick={() => handleBarcodeScan("6191513501086")}
          >
            President
          </button>
          <button
            className="mx-2"
            onClick={() => handleBarcodeScan("6194043001019")}
          >
            Delice
          </button>
        </div>
      </div>
      <BarcodeScanner onBarcodeScan={handleBarcodeScan} />
    </div>
  );
};

export default Cart;
