import { ISection } from "@/utils/service.type";
import React from "react";
import ServiceCard from "../ServiceCard";

interface Props {
    serviceData: ISection[];
}

const Service: React.FC<Props> = ({ serviceData }) => {

    return (
        <>
            {serviceData?.map((section) => (
                <section key={section?.id} className="section-container">
                    <div className="mb-12 animate-fade-in">
                        <h2 className="page-title">{section?.title}</h2>
                        <p className="page-description">{section?.subtitle}</p>
                    </div>

                    <div className="w-full flex flex-col justify-center items-center gap-10">
                        {section?.services?.map((svc, idx) => (
                            <div
                                key={`${svc.title}-${idx}`}
                                className="w-full animate-fade-in"
                                style={{ animationDelay: `${idx * 50}ms` }}
                            >
                                <ServiceCard {...svc} index={idx} />
                            </div>
                        ))}
                    </div>
                </section>
            ))}
        </>
    );
};

export default Service;
