"use client";

import Link from "next/link";

async function getData() {
  const res = await fetch("https://fakestoreapi.com/products");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}
export default async function Home() {
  const data = await getData();

  return (
    <>
      <header className="Container mx-auto">
        <nav className="flex max-w-screen-xl flex-wrap items-center justify-around mx-auto p-2  ">
          <Link className="li" href="/">
            Home
          </Link>
          <Link className="li" href="/about">
            About
          </Link>
          <Link className="li" href="/contact">
            Contact
          </Link>
          <img className="li" src="image.svg" alt="logo" />
          <Link className="li" href="/archive">
            Archive
          </Link>
          <Link className="li" href="/pro">
            Pro Version
          </Link>
          <Link className="li" href="/download">
            Download
          </Link>
        </nav>
      </header>

      <main className="max-w-screen-xl flex flex-wrap  mx-auto p-2 mt-8 gap-6 ">
        {data.slice(0, 2).map((product) => (
          <>
            <div
              key={product.id}
              className="w-full md:w-1/2 lg:w-1/4 xl:w-1/4 p-4"
            >
              <Link href={`${product.id}`}>
                <div className="border border-gray-200 rounded-lg p-4 my__images">
                  <img
                    src={product.image}
                    width={800}
                    height={300}
                    alt={product.title}
                    className="imagess"
                  />
                  <h2 className="text-lg font-semibold mt-2">
                    {product.title}
                  </h2>
                  <p className="text-gray-800 font-bold mt-2">
                    ${product.price}
                  </p>
                </div>
              </Link>
            </div>
          </>
        ))}
        {data.slice(2, 50).map((product) => (
          <>
            <div
              key={product.id}
              className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4"
            >
              <Link href={`${product.id}`}>
                <div className="border border-gray-200 rounded-lg p-4">
                  <img
                    src={product.image}
                    width={150}
                    height={100}
                    alt={product.title}
                    className="imagesss"
                  />
                  <h2 className="text-lg font-semibold mt-2">
                    {product.title}
                  </h2>
                  <p className="text-gray-800 font-bold mt-2">
                    ${product.price}
                  </p>
                </div>
              </Link>
            </div>
          </>
        ))}
      </main>
    </>
  );
}
