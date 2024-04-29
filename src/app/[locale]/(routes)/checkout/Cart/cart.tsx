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
  // const [selectedRows, setSelectedRows] = useState<string[]>([]);

  const fetchData = async (barcode: string) => {
    try {
      const response = await fetch(`http://localhost:5000/product/${barcode}`);
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

  // const handleSelectedRows = (index: number) => {
  //   const selectedIndex = selectedRows.indexOf(index);
  //   let newSelectedRows: number[] = [];
  //   if (selectedIndex === -1) {
  //     newSelectedRows = [...selectedRows, index];
  //   } else {
  //     newSelectedRows = selectedRows.filter((rowIndex) => rowIndex !== index);
  //   }

  //   setSelectedRows(newSelectedRows);
  // };

  // const handleSelectedRows = (barcode: string) => { // ** Done using redux to check on monday
  //   const selectedbarcode = selectedRows.indexOf(barcode);
  //   let newSelectedRows: string[] = [];
  //   if (selectedbarcode === -1) {
  //     newSelectedRows = [...selectedRows, barcode];
  //   } else {
  //     newSelectedRows = selectedRows.filter(
  //       (rowbarcode) => rowbarcode !== barcode
  //     );
  //   }
  //   setSelectedRows(newSelectedRows);
  // };

  // console.log("selected rows:", selectedRows);

  // const Montant = (prod: Product) => {
  //   const montant = prod.price * prod.quantity;
  //   total = total + montant;
  //   return montant;
  // };

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
                  <td>{product.price}€</td>
                  <td>{product.quantity}</td>
                  <td>{product.price_quantity}€</td>
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
            <div>
              {t("quantity")} {cartItems.length}
            </div>
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
          <p>{totalPrice}€</p>
        </button>
      </div>
      <BarcodeScanner onBarcodeScan={handleBarcodeScan} />
    </div>
  );
};

export default Cart;
