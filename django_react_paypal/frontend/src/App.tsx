import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import { Toaster } from "react-hot-toast";
import { Payment } from './components/Payment'

export default function App() {
  return (
    <PayPalScriptProvider options={{ "client-id": process.env.REACT_APP_PAYPAL_CLIENT_ID }}>
      <Toaster position="top-center" />
      <Payment />
    </PayPalScriptProvider>
  );
}