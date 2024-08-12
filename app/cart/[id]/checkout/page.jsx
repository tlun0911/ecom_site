"use client";

import React, { useState } from "react";
import { useParams } from "next/navigation";
import { useAuth } from "@clerk/nextjs";
import { handleCheckout } from "@/app/actions/serverActions";
import { toast } from "sonner";
import { useRouter } from 'next/navigation'

const CheckoutPage = () => {
  const { id } = useParams();
  const { userId } = useAuth();
  const cartId = id;
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: "",
    address: "",
    phone: "",
    email: "",
    cartId,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
      [address]: value,
      [phone]: value,
      [email]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form data: ", formData);
    const response = await handleCheckout(formData);
    if (response.success) {
      setFormData({
        name: "",
        address: "",
        phone: "",
        email: "",
        cartId,
      });
      toast(response.message, { type: "success" });
      router.push('/'); // Redirect to home page
    } else {
      toast(response.message, { type: "error" });
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="min-w-max flex-grow">
        <h1 className="text-2xl font-semibold text-center my-4 w-full">
          Checkout
        </h1>
        <form
          className="flex flex-col space-y-4 
        items-start justify-center min-w-max
        border-2 border-gray-900 rounded-md p-4
        text-lg font-medium"
          onSubmit={handleSubmit}
        >
          <div className="space-x-2 flex-grow w-full">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="space-x-2">
            <label htmlFor="address">Address:</label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
            />
          </div>
          <div className="space-x-2">
            <label htmlFor="phone">Phone Number:</label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          <div className="space-x-2">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="space-x-2">
            <label htmlFor="creditCard">Credit Card:</label>
            <input
              type="disabled"
              id="creditCard"
              name="creditCard"
              value="xxxx-xxx-xxxx"
            />
          </div>
          <button
            type="submit"
            className="self-center border-2
           border-gray-900 rounded-md 
           px-2 font-medium"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default CheckoutPage;
