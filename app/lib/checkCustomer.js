import { currentUser } from "@clerk/nextjs/server";
import { db } from "./db";

export const checkCustomer = async () => {
  const customer = await currentUser();

  if (!customer) {
    return null;
  }

  const loggedInCustomer = await db.customer.findUnique({
    where: {
      clerkUserId: customer.id,
    },
  });

  if (loggedInCustomer) {
    return loggedInCustomer;
  }

  const newCustomer = await db.customer.create({
    data: {
      clerkUserId: customer.id,
      imageUrl: customer.imageUrl,
      email: customer.emailAddresses[0].emailAddress,
      name: `${customer.firstName} ${customer.lastName}`,
    },
  });
  return newCustomer;
};
