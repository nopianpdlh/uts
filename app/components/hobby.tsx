import React from "react";

// Objek Hobi
const hobbies = [
  {
    id: 1,
    name: "Gaming",
    image:
      "https://i.pinimg.com/564x/bb/b4/e3/bbb4e307a69456f6f4feba8878394b21.jpg",
  },
  {
    id: 2,
    name: "Hiking",
    image:
      "https://i.pinimg.com/564x/70/4d/ed/704ded581835279d7be80485b9756304.jpg",
  },
  {
    id: 3,
    name: "Membaca Komik",
    image:
      "https://i.pinimg.com/564x/4a/90/ae/4a90ae5814ac35c4949c90d605543d26.jpg",
  },
  {
    id: 4,
    name: "Nonton Film",
    image:
      "https://i.pinimg.com/564x/4c/a3/a5/4ca3a563e1bd2d75b2690fb75b6ac536.jpg",
  },
];

export default function MyGallery() {
  return (
    <div className="container mx-auto p-6 text-center pt-20">
      <h2 className="text-gray-800 text-3xl font-extrabold mb-8">My Hobby</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {hobbies.map((hobby) => (
          <div
            key={hobby.id}
            className="relative border-2 border-transparent rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl"
          >
            <img
              src={hobby.image}
              alt={hobby.name}
              className="w-full h-48 object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
              <h3 className="text-white text-xl font-semibold">{hobby.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
