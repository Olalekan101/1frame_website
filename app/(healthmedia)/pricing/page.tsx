import React from "react";
import { GiCheckMark } from "react-icons/gi";

export default function Pricing() {
  const nairaFormatter = new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    minimumFractionDigits: 2,
  });
  const services = [
    ["Shoot and edit 4 Videos", "Shoot and edit 6 Videos"],
    ["2 animated content", "4 animated content"],
    "Landing Pages for services rendered",
  ];
  const data = [
    {
      name: "Gold",
      price: 250000,
      list: [
        {
          word: services[0][0],
          boolean: true,
        },
        {
          word: services[1][0],
          boolean: true,
        },
        {
          word: services[2],
          boolean: false,
        },
      ],
    },
    {
      name: "Diamond",
      price: 400000,
      list: [
        {
          word: services[0][1],
          boolean: true,
        },
        {
          word: services[1][1],
          boolean: true,
        },
        {
          word: services[2],
          boolean: true,
        },
      ],
    },
  ];
  return (
    <section className="w-screen md:w-full h-auto relative">
      <div className="maincontainer flex flex-col justify-between items-start w-full h-auto">
        <div className="flex flex-col justify-center items-center w-full mt-10">
          <p className="md:text-4xl text-2xl opacity-80 text-center">
            Choose the perfect plan.
          </p>
          <p className="md:text-2xl text-lg opacity-80 text-center">
            We will deliver quality, no matter what.
          </p>
        </div>
        <div className="mt-5 w-full">
          <p className="text-center py-5">Monthly Plan</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 mx-auto  gap-4">
          {data.map((val, index) => (
            <div className="">
              <div className="text-4xl font-bold">{val.name}</div>
              <ul className="mt-3">
                {val.list.map((x, i) => (
                  <li
                    className={`flex justify-start items-center gap-2 ${
                      x.boolean ? "" : "opacity-70 line-through"
                    }`}
                  >
                    <GiCheckMark /> {x.word}
                  </li>
                ))}
              </ul>
              <div
                className={` px-4 py-2 rounded-xl w-fit mt-2 ${
                  val.name === "Gold"
                    ? "bg-yellow-500 text-white"
                    : "bg-blue-500 text-white"
                }`}
              >
                {nairaFormatter.format(val.price)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
