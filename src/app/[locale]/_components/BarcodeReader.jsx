import React, { useState } from "react";
import BarcodeReader from "react-barcode-reader";

const BarcodeScanner = ({ onBarcodeScan }) => {
  const [scannedBarcode, setScannedBarcode] = useState("");

  const handleScan = (barcode) => {
    setScannedBarcode(barcode);
    onBarcodeScan(barcode); // Call the parent callback with the scanned barcode
  };

  const handleError = (error) => {
    console.error(error);
    // Handle any errors that occur during barcode scanning
  };

  return (
    <div>
      <BarcodeReader onScan={handleScan} onError={handleError} />
    </div>
  );
};

export default BarcodeScanner;
