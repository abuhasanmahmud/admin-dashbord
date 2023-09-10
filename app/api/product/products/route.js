import Product from "@/model/product";
import { connectToDb } from "@/utils/database";

export const GET = async (request) => {
  await connectToDb();

  try {
    const products = await Product.find();
    //     console.log("products", products);
    //     return products;
    return new Response(JSON.stringify(products), { status: 200 });
  } catch (error) {
    return new Response("Failed to create a new prompt", { status: 500 });
  }
};
