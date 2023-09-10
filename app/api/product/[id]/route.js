import Product from "@/model/product";
import { connectToDb } from "@/utils/database";

export const DELETE = async (req, { params }) => {
  await connectToDb();
  //   console.log("req ", req, "params--------", params);
  //   const id = params;
  try {
    const res = await Product.findByIdAndRemove(params.id);
    //     console.log("res in ", JSON.stringify(res));
    return new Response(JSON.stringify(res));
  } catch (error) {
    return new Response(JSON.stringify(error));
  }
};

export const PATCH = async (req, { params }) => {
  const { product } = await req.json();
  try {
    await connectToDb();

    // Find the existing prompt by ID
    const existingPrduct = await Product.findById(params.id);

    if (!existingPrduct) {
      return new Response("Product not found", { status: 404 });
    }

    existingPrduct.name = product.name;
    existingPrduct.price = product.price;
    existingPrduct.category = product.category;
    existingPrduct.des = product.des;

    await existingPrduct.save();

    return new Response("Successfully updated the Prompts", { status: 200 });
  } catch (error) {
    return new Response("Error Updating Prompt", { status: 500 });
  }
};
