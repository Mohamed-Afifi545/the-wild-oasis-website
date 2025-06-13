import Image from "next/image";
import TextExpander from "./TextExpander";
import { EyeSlashIcon, MapPinIcon, UsersIcon } from "@heroicons/react/24/solid";

export default function Cabin({ cabin }) {
  const { id, name, maxCapacity, regularPrice, discount, image, description } =
    cabin;
  return (
    <div className="flex flex-col sm:grid grid-cols-[3fr_4fr] sm:gap-20 border border-primary-800 py-3 px-10 mb-24">
      <div className="relative w-64 h-64 mx-auto sm:mx-0 sm:w-auto sm:h-auto sm:scale-[1.15] sm:-translate-x-3">
        <Image
          src={image}
          fill
          className="object-cover sm:aspect-auto aspect-square sm:mx-0 mx-auto"
          alt={`Cabin ${name}`}
        />
      </div>

      <div>
        <h3 className="text-accent-100 font-black text-center sm:text-left text-4xl sm:text-7xl mb-2 sm:mb-5 sm:translate-x-[-254px] bg-primary-950 p-6 pb-1 w-fit sm:w-[150%] translate-y-[-40px] sm:translate-y-0 mx-auto sm:mx-0">
          Cabin {name}
        </h3>

        <p className="text-lg text-center sm:text-left text-primary-300 mb-5 sm:mb-10">
          <TextExpander>{description}</TextExpander>
        </p>

        <ul className="flex flex-col gap-4 mb-7">
          <li className="flex gap-3 items-center">
            <UsersIcon className="h-5 w-5 text-primary-600" />
            <span className="text-lg">
              For up to <span className="font-bold">{maxCapacity}</span> guests
            </span>
          </li>
          <li className="flex gap-3 items-center">
            <MapPinIcon className="h-5 w-5 text-primary-600" />
            <span className="text-lg">
              Located in the heart of the{" "}
              <span className="font-bold">Dolomites</span> (Italy)
            </span>
          </li>
          <li className="flex gap-3 items-center">
            <EyeSlashIcon className="h-5 w-5 text-primary-600" />
            <span className="text-lg">
              Privacy <span className="font-bold">100%</span> guaranteed
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}
