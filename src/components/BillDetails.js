const BillDetails = () => {
  return (
    <div className="border border-1 m-2 mt-4">
      <h2 className="text-lg font-bold pl-2">Bill Details</h2>
      <div className="border border-2 m-2 mt-3">
        <div className="flex justify-between mb-3">
          <p className="text-lg text-gray-500">Item Total</p>
          <p className="text-lg text-gray-500">340</p>
        </div>
        <div className="flex justify-between mb-3">
          <p className="text-lg text-gray-500">Deliver Fee | 2.8kms</p>
          <p className="text-lg text-gray-500">42</p>
        </div>
        <div className="flex justify-between mb-3">
          <p className="text-lg text-gray-500">Extra Discount For You</p>
          <p className="text-lg text-gray-500">-25</p>
        </div>
      </div>
      <hr className="text-lg text-gray-500 h-2" />
      <div className="border border-1 m-2 mt-4">
      <div className="flex justify-between mb-3">
        <p className="text-lg text-gray-500">Platform Fee</p>
        <p>5</p>
      </div>
      <div className="flex justify-between mb-3">
        <p className="text-lg text-gray-500">GST and Restaurant Charges</p>
        <p>44</p>
      </div>
      </div>
      <hr className="h-2 text-black"/>
      <div className="border border-1 m-2 mt-4">
        <div className="flex justify-between">
          <p className="text-xl font-bold">TOTAL TO PAY</p>
          <p className="text-xl font-bold">500</p>
        </div>
      </div>
    </div>
  );
};

export default BillDetails;
