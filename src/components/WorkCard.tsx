import Image, { StaticImageData } from "next/image";
import { Card } from "./ui/card";
import { Play } from "lucide-react";

interface WorkCardProps {
  title: string;
  category: string;
  imageUrl: string | StaticImageData;
  description?: string;
}

const WorkCard = ({ title, category, imageUrl, description }: WorkCardProps) => {
  return (
    <Card className="glass-card hover-lift group cursor-pointer overflow-hidden p-0">
      <div className="relative h-64 overflow-hidden">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
          {description && <p className="text-sm text-foreground/90">{description}</p>}
        </div>
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-16 h-16 rounded-full bg-primary/90 backdrop-blur-sm flex items-center justify-center">
            <Play className="w-8 h-8 text-white ml-1" />
          </div>
        </div>
      </div>
      <div className="p-6">
        <p className="text-sm text-primary font-medium mb-1">{category}</p>
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
    </Card>
  );
};

export default WorkCard;
