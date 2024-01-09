import Image1 from "../public/groupA.png"
import Image2 from "../public/groupB.png"
import Image3 from "../public/grupoG.png"
import Image4 from "../public/GroupM.png"
import Image5 from "../public/groupL.png"
import Image6 from "../public/grupoX.png"
import { CarsInfo } from "../types/CarType"
  

  export const mockCars: CarsInfo = [
    {
      id: "0",
      model: "Car Model 1",
      year: 2022,
      doors: 4,
      passengers: 5,
      rentalPrice: 50,
      available: true,
      car_image: { url: Image1 },
    },
    {
      id: "1",
      model: "Car Model 2",
      year: 2021,
      doors: 2,
      passengers: 2,
      rentalPrice: 40,
      available: false,
      car_image: { url: Image2 },
    },
    {
      id: "2",
      model: "Car Model 3",
      year: 2022,
      doors: 4,
      passengers: 5,
      rentalPrice: 50,
      available: true,
      car_image: { url: Image3 },
    },
    {
      id: "3",
      model: "Car Model 4",
      year: 2021,
      doors: 2,
      passengers: 2,
      rentalPrice: 40,
      available: false,
      car_image: { url: Image4 },
    },
    {
      id: "4",
      model: "Car Model 4",
      year: 2021,
      doors: 2,
      passengers: 2,
      rentalPrice: 40,
      available: false,
      car_image: { url: Image5 },
    },
    {
      id: "5",
      model: "Car Model 4",
      year: 2021,
      doors: 2,
      passengers: 2,
      rentalPrice: 40,
      available: false,
      car_image: { url: Image6 },
    },
  ];