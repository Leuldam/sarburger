"use client";

import { motion } from "framer-motion";

export default function MenuList() {
  const fadeIn = (direction = "up") => {
    return {
      hidden: {
        opacity: 0,
        y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
        x: direction === "left" ? 40 : direction === "right" ? -40 : 0,
      },
      show: {
        opacity: 1,
        x: 0,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" },
      },
    };
  };

  return (
    <div className="bg-[#1B2A1F] text-white min-h-screen px-4 md:px-12 py-12 space-y-20">
      {/* Burgers */}
      <section>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Image */}
          <motion.img
            variants={fadeIn("right")}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            src="/sar1.jpg"
            alt="Burger"
            className="rounded-lg w-full h-72 object-cover"
          />
          {/* Text */}
          <motion.div
            variants={fadeIn("left")}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6 uppercase">Burgers</h2>
            {[
              {
                name: "Onion Mash Burger",
                desc: "Juicy beef patty smashed with caramelized onions, layered on a toasted potato bun.",
                price: 700,
              },
              {
                name: "Classic Cheeseburger",
                desc: "Melted cheddar over a fresh grilled patty, topped with lettuce, tomato, and house sauce.",
                price: 750,
              },
              {
                name: "BBQ Bacon Burger",
                desc: "Crispy bacon and smoky BBQ sauce over a double patty with melted cheese.",
                price: 850,
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex justify-between border-b border-gray-600 py-3"
              >
                <div>
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-sm text-gray-300">{item.desc}</p>
                </div>
                <p className="font-medium">{item.price}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Alcohol Free Cocktails */}
      <section>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Text */}
          <motion.div
            variants={fadeIn("right")}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6 uppercase">
              Alcohol Free Cocktails
            </h2>
            {[
              {
                name: "Lemonade Breeze",
                desc: "Refreshing lemonade with a twist of mint and citrus zest.",
                price: 390,
              },
              {
                name: "Cinnamon Cooler",
                desc: "Chilled apple juice infused with cinnamon and a hint of honey.",
                price: 400,
              },
              {
                name: "Ginger Delight",
                desc: "A zesty ginger-based mocktail with a cooling aftertaste.",
                price: 390,
              },
              {
                name: "Rosemary's Secret",
                desc: "Sparkling drink with rosemary and lime essence.",
                price: 390,
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex justify-between border-b border-gray-600 py-3"
              >
                <div>
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-sm text-gray-300">{item.desc}</p>
                </div>
                <p className="font-medium">{item.price}</p>
              </div>
            ))}
          </motion.div>
          {/* Image */}
          <motion.img
            variants={fadeIn("left")}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            src="/sar2.jpg"
            alt="Cocktail"
            className="rounded-lg w-full h-72 object-cover"
          />
        </div>
      </section>

      {/* Sandwiches */}
      <section>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Image */}
          <motion.img
            variants={fadeIn("right")}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            src="/sar1.jpg"
            alt="Sandwich"
            className="rounded-lg w-full h-72 object-cover"
          />
          {/* Text */}
          <motion.div
            variants={fadeIn("left")}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6 uppercase">Sandwiches</h2>
            {[
              {
                name: "Philly Cheese Steak",
                desc: "Thin-sliced steak grilled with onions, topped with melted cheese in a hoagie roll.",
                price: 950,
              },
              {
                name: "Chicken Philly Cheese Steak",
                desc: "Grilled chicken strips with peppers, onions, and cheese on a hoagie bun.",
                price: 990,
              },
              {
                name: "Tuna Salad Sandwich",
                desc: "Classic tuna salad with herbs and mayo served in fresh bread.",
                price: 750,
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex justify-between border-b border-gray-600 py-3"
              >
                <div>
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-sm text-gray-300">{item.desc}</p>
                </div>
                <p className="font-medium">{item.price}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Cold Coffee Drinks */}
      <section>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Text */}
          <motion.div
            variants={fadeIn("right")}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6 uppercase">
              Cold Coffee Drinks
            </h2>
            {[
              {
                name: "Ice Tea",
                desc: "Chilled brewed tea served over ice with lemon.",
                price: 250,
              },
              {
                name: "Ice Latte",
                desc: "Smooth espresso blended with cold milk and ice.",
                price: 300,
              },
              {
                name: "Ice Mocha",
                desc: "Coffee, milk, and chocolate mixed into a chilled mocha delight.",
                price: 350,
              },
              {
                name: "Ice Caramel",
                desc: "Iced coffee sweetened with rich caramel drizzle.",
                price: 350,
              },
              {
                name: "Ice Americano",
                desc: "Espresso shots topped with cold water and ice.",
                price: 280,
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex justify-between border-b border-gray-600 py-3"
              >
                <div>
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-sm text-gray-300">{item.desc}</p>
                </div>
                <p className="font-medium">{item.price}</p>
              </div>
            ))}
          </motion.div>
          {/* Image */}
          <motion.img
            variants={fadeIn("left")}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            src="/sar2.jpg"
            alt="Cold Coffee"
            className="rounded-lg w-full h-72 object-cover"
          />
        </div>
      </section>

      {/* Soft Drinks */}
      <section>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Image */}
          <motion.img
            variants={fadeIn("right")}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            src="/sar1.jpg"
            alt="Soft Drinks"
            className="rounded-lg w-full h-72 object-cover"
          />
          {/* Text */}
          <motion.div
            variants={fadeIn("left")}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6 uppercase">Soft Drinks</h2>
            {[
              { name: "Water", desc: "Fresh and pure bottled water.", price: 95 },
              { name: "Sprite", desc: "Refreshing lemon-lime soda.", price: 95 },
              { name: "Coca Cola", desc: "Classic cola taste.", price: 95 },
              { name: "Novida", desc: "Fruity non-alcoholic malt drink.", price: 95 },
              { name: "Ambo Water", desc: "Natural sparkling mineral water.", price: 95 },
            ].map((item, i) => (
              <div
                key={i}
                className="flex justify-between border-b border-gray-600 py-3"
              >
                <div>
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-sm text-gray-300">{item.desc}</p>
                </div>
                <p className="font-medium">{item.price}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
