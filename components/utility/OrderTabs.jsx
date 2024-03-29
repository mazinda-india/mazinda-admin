"use client";
import React, { useState } from "react";
import OrdersList from "@/components/utility/OrdersList";

const OrdersTabs = ({ filter }) => {
  const [activeTab, setActiveTab] = useState("orders");

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <>
      <div className="mb-4 rounded-lg shadow border-gray-200 bg-white mt-4">
        <ul
          className="flex flex-wrap -mb-px text-sm font-medium text-center"
          id="default-tab"
          role="tablist"
        >
          <li className="me-2" role="presentation">
            <button
              className={`inline-block p-4 border-b-2 rounded-t-lg ${
                activeTab === "orders"
                  ? "border-blue-600 text-blue-600"
                  : "border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
              }`}
              id="orders-tab"
              type="button"
              role="tab"
              aria-controls="orders"
              aria-selected={activeTab === "orders"}
              onClick={() => handleTabClick("orders")}
            >
              Latest Orders
            </button>
          </li>
        </ul>
      </div>
      <div id="default-tab-content">
        <div
          className={`rounded-lg bg-white ${
            activeTab === "orders" ? "block" : "hidden"
          }`}
          id="orders"
          role="tabpanel"
          aria-labelledby="orders-tab"
        >
          <OrdersList filter={filter} />
        </div>
      </div>
    </>
  );
};

export default OrdersTabs;
