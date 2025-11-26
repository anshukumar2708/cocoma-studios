import Image, { StaticImageData } from "next/image";
import { Card } from "../ui/card";

interface WorkCardProps {
    name: string;
    imageUrl: string | StaticImageData;
    designation: string;
    experience: string;
}

const OurTeamCard = ({ name, imageUrl, designation, experience }: WorkCardProps) => {
    return (
        <Card className="glass-card hover-lift group cursor-pointer overflow-hidden p-0">
            <div className="relative overflow-hidden">
                <Image
                    src={imageUrl}
                    alt="our-team-member"
                    width={200}
                    height={300}
                    className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end items-center p-2">
                    <h1 className="text-xl font-semibold text-white drop-shadow-md">
                        {name}
                    </h1>

                    <p className="text-sm text-gray-200 mt-1">{designation}</p>

                    <p className="text-sm font-medium text-primary mt-1">
                        {experience} Experience
                    </p>
                </div>
            </div>
        </Card>
    );
};

export default OurTeamCard;
