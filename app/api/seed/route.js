import Product from "@/model/product";
import { connectToDb } from "@/utils/database";
import products from "@/utils/products";
import { NextResponse } from "next/server";

connectToDb();
export async function POST(req) {
  try {
    return NextResponse.json({ message: "all is okk" });
  } catch (error) {}
}
