import { LucideIcon } from "lucide-react";

export interface IServiceItem {
    icon: LucideIcon;
    title: string;
    description: string;
    items: string[];
    image: string;
}

export interface ISection {
    id: string;
    title: string;
    subtitle: string;
    services: IServiceItem[];
}
