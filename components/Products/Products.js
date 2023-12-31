"use client";

import { RiDeleteBin5Fill } from "react-icons/ri";
import AddProductSidebar from "./AddProductSidebar";
import { useEffect, useState } from "react";
import ProductDelete from "../modal/ProductDelete";

const Products = () => {
  //   console.log("products", allProducts);
  const [open, setOpen] = useState(false);
  const [products, setProduct] = useState([]);
  const [productAdd, setProductAdd] = useState(false);
  const [deletModalOpen, setDeletModalOpen] = useState(false);
  const [productId, setProductId] = useState("");
  const [deleteSuccessFully, setDeleteProductSuccessfully] = useState(false);
  const [productDetails, setProductDetails] = useState({});
  // console.log("productAdd", productAdd);
  const featchProduct = async () => {
    const res = await fetch("/api/product/products");
    const data = await res.json();
    // console.log("res in products ", data);
    setProduct(data);
    setProductAdd(false);
    setDeleteProductSuccessfully(false);
  };

  useEffect(() => {
    featchProduct();
  }, [productAdd, deleteSuccessFully]);
  console.log("porducts", products);

  const updateProduct = async (product) => {
    setProductDetails(product);
    setOpen(true);
  };

  console.log("productDetails", productDetails);

  return (
    <div>
      <ProductDelete
        deletModalOpen={deletModalOpen}
        setDeletModalOpen={setDeletModalOpen}
        productId={productId}
        setDeleteProductSuccessfully={setDeleteProductSuccessfully}
      />
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-center">
          <div className="sm:flex-auto">
            <h1 className="text-base font-semibold leading-6 text-gray-900">Products</h1>
          </div>
          <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
            <button
              onClick={() => {
                setOpen(true), setProductDetails({});
              }}
              type="button"
              className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Add Product
            </button>
          </div>
        </div>
        <div className="mt-8 flow-root">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
              <table className="min-w-full divide-y divide-gray-300">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                    >
                      Img
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Category
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Price
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Status
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {products?.map((item) => (
                    <tr key={item._id}>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                        <img src={item.img} style={{ width: "30px", height: "20" }} alt="Product img" />
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{item.name}</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {item.category}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{item.price}</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">Publish</td>
                      <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right flex justify-center  items-center gap-2 text-sm font-medium sm:pr-0">
                        <a
                          onClick={() => updateProduct(item)}
                          className="text-indigo-600 hover:text-indigo-900 cursor-pointer "
                        >
                          Edit<span className="sr-only"> {item.name}</span>
                        </a>

                        <a
                          onClick={() => {
                            setDeletModalOpen(true), setProductId(item._id);
                          }}
                          className="text-indigo-600 hover:text-indigo-900"
                        >
                          <RiDeleteBin5Fill className=" cursor-pointer " />
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <AddProductSidebar
        productDetails={productDetails}
        open={open}
        setOpen={setOpen}
        setProductAdd={setProductAdd}
      />
    </div>
  );
};

export default Products;
