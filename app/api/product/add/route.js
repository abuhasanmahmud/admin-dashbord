import Product from "@/model/product";
import { connectToDb } from "@/utils/database";

export const POST = async (request) => {
  const { products } = await request.json();
  console.log("products", products);

  try {
    await connectToDb();
    const newProduct = new Product(products);

    await newProduct.save();
    return new Response(JSON.stringify(newProduct), { status: 201 });
  } catch (error) {
    return new Response("Failed to create a new prompt", { status: 500 });
  }
};
