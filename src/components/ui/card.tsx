// components/ui/Card.server.tsx
import React from "react";

type Props = React.ComponentPropsWithoutRef<"div">;

const base = "rounded-lg border bg-card text-card-foreground shadow-sm";

export function Card({ className = "", ...props }: Props) {
    return <div className={[base, className].filter(Boolean).join(" ")} {...props} />;
}

export function CardHeader({ className = "", ...props }: Props) {
    return <div className={["flex flex-col space-y-1.5 p-6", className].filter(Boolean).join(" ")} {...props} />;
}

export function CardTitle({ className = "", ...props }: Props) {
    return <h3 className={["text-2xl font-semibold leading-none tracking-tight", className].filter(Boolean).join(" ")} {...props} />;
}

export function CardDescription({ className = "", ...props }: Props) {
    return <p className={["text-sm text-muted-foreground", className].filter(Boolean).join(" ")} {...props} />;
}

export function CardContent({ className = "", ...props }: Props) {
    return <div className={["p-6 pt-0", className].filter(Boolean).join(" ")} {...props} />;
}

export function CardFooter({ className = "", ...props }: Props) {
    return <div className={["flex items-center p-6 pt-0", className].filter(Boolean).join(" ")} {...props} />;
}
