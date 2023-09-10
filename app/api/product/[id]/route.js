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
