import { LucideIcon } from "lucide-react";
// import { Card } from "./ui/card";
import Image from "next/image";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  items?: string[];
  image: string;
  index: number;
}

const ServiceCard = ({ icon: Icon, title, description, items, image, index }: ServiceCardProps) => {
  return (
    <div className="w-full flex justify-center items-center">
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">

        {/* LEFT / RIGHT based on index */}
        <div
          className={`flex justify-center md:justify-end w-full ${index % 2 !== 0 ? "lg:order-2" : "lg:order-1"
            }`}
        >
          <div className="w-full h-auto rounded-lg overflow-hidden shadow-lg">
            <Image
              src={image}
              alt="image"
              width={1200}
              height={600}
              className="w-full h-auto max-h-80 object-cover transform hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        {/* Content Block */}
        <div
          className={`flex justify-start md:pl-4 ${index % 2 !== 0 ? "lg:order-1" : "lg:order-2"
            }`}
        >
          {/* <Card className="glass-card hover-lift group cursor-pointer overflow-hidden w-full p-6">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" /> */}

          <div className="relative z-10">
            {/* Icon */}
            <div className="flex justify-start items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="card-title mb-2">{title}</h3>
            </div>

            {description && <p className="card-description mb-4">{description}</p>}

            {items && items.length > 0 && (
              <ul className="space-y-2">
                {items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                    <span className="card-point-text">{item}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
          {/* </Card> */}
        </div>
      </div>
    </div>
  );
};


export default ServiceCard;
