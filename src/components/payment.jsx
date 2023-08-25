import React from "react";
import "../style/payment.css";

 const PaymentRedesign = () => {
  return (
    <div className="payment-redesign">
      <div className="div">
        <img
          className="fe-drop-down"
          alt="Fe drop down"
          src="https://generation-sessions.s3.amazonaws.com/89101d2824916fe4cb278c310554e3f8/img/fe-drop-down.svg"
        />
        <div className="overlap">
          <img
            className="mdi-wallet"
            alt="Mdi wallet"
            src="https://generation-sessions.s3.amazonaws.com/89101d2824916fe4cb278c310554e3f8/img/mdi-wallet.svg"
          />
          <div className="text-wrapper">Previous payment method</div>
          <div className="text-wrapper-2">Available Wallet Balance:</div>
          <div className="overlap-group">
            <img
              className="illustartion"
              alt="Illustartion"
              src="https://generation-sessions.s3.amazonaws.com/89101d2824916fe4cb278c310554e3f8/img/illustartion.svg"
            />
            <img
              className="bi-bank"
              alt="Bi bank"
              src="https://generation-sessions.s3.amazonaws.com/89101d2824916fe4cb278c310554e3f8/img/bi-bank.svg"
            />
            <img
              className="line"
              alt="Line"
              src="https://generation-sessions.s3.amazonaws.com/89101d2824916fe4cb278c310554e3f8/img/line-4.svg"
            />
            <img
              className="img"
              alt="Line"
              src="https://generation-sessions.s3.amazonaws.com/89101d2824916fe4cb278c310554e3f8/img/line-4.svg"
            />
            <img
              className="line-2"
              alt="Line"
              src="https://generation-sessions.s3.amazonaws.com/89101d2824916fe4cb278c310554e3f8/img/line-6.svg"
            />
            <div className="rectangle" />
            <div className="text-wrapper-3">Connect Bank Account</div>
            <div className="CTA-bank">
              <div className="div-wrapper">
                <div className="text-wrapper-4">Connect Bank</div>
              </div>
            </div>
          </div>
          <div className="overlap-2">
            <div className="text-wrapper-5">Transfer in/out</div>
            <div className="CTA-cash">
              <div className="div-wrapper">
                <div className="text-wrapper-6">Transfer cash</div>
              </div>
            </div>
            <img
              className="oi-transfer"
              alt="Oi transfer"
              src="https://generation-sessions.s3.amazonaws.com/89101d2824916fe4cb278c310554e3f8/img/oi-transfer.svg"
            />
          </div>
          <div className="overlap-wrapper">
            <div className="overlap-3">
              <p className="po">Apply my balance: $15.00 USD</p>
            </div>
          </div>
          <div className="card">
            <div className="overlap-4">
              <div className="ellipse" />
              <div className="text-wrapper-7">HDFC Bank</div>
              <div className="text-wrapper-8">xxx1234</div>
              <div className="text-wrapper-9">xxx1234</div>
              <div className="overlap-group-wrapper">
                <div className="div-wrapper">
                  <div className="text-wrapper-10">Unlink</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-wrapper-11">Payment</div>
        <div className="text-wrapper-12">Transfer History</div>
        <img
          className="line-3"
          alt="Line"
          src="https://generation-sessions.s3.amazonaws.com/89101d2824916fe4cb278c310554e3f8/img/line-3.svg"
        />
      </div>
    </div>
  );
};
export default PaymentRedesign