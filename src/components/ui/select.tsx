import React, { createContext, useContext, useRef, useState, useEffect } from "react";
import { ChevronDown, ChevronUp, Check } from "lucide-react";

interface SelectContextType {
  value: string;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  onValueChange: (value: string) => void;
}

const SelectContext = createContext<SelectContextType | null>(null);

interface SelectProps {
  value: string;
  onValueChange: (value: string) => void;
  children: React.ReactNode;
}

const Select: React.FC<SelectProps> = ({ value, onValueChange, children }) => {
  const [open, setOpen] = useState(false);

  return (
    <SelectContext.Provider value={{ value, open, setOpen, onValueChange }}>
      <div className="relative w-full">{children}</div>
    </SelectContext.Provider>
  );
};

// ✅ SelectTrigger
interface SelectTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  placeholder?: string;
  className?: string;
  children?: React.ReactNode;
}

const SelectTrigger: React.FC<SelectTriggerProps> = ({
  placeholder,
  className = "",
  // children,
  ...props
}) => {
  const context = useContext(SelectContext);
  if (!context) throw new Error("SelectTrigger must be used within Select");

  const { value, open, setOpen } = context;

  return (
    <button
      type="button"
      {...props}
      onClick={() => setOpen((prev) => !prev)}
      className={`flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm 
        focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
    >
      <span className="truncate text-left">{value || placeholder || "Select an option"}</span>
      {open ? <ChevronUp className="h-4 w-4 opacity-50" /> : <ChevronDown className="h-4 w-4 opacity-50" />}
    </button>
  );
};

// ✅ SelectContent
interface SelectContentProps {
  children: React.ReactNode;
  className?: string;
}

const SelectContent: React.FC<SelectContentProps> = ({ children, className = "" }) => {
  const context = useContext(SelectContext);
  const ref = useRef<HTMLDivElement>(null);

  if (!context) throw new Error("SelectContent must be used within Select");

  const { open, setOpen } = context;

  // close when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [setOpen]);

  if (!open) return null;

  return (
    <div
      ref={ref}
      className={`absolute z-50 mt-1 max-h-60 w-full overflow-auto rounded-md border bg-popover text-popover-foreground shadow-md ${className}`}
      role="listbox"
    >
      {children}
    </div>
  );
};

// ✅ SelectItem
interface SelectItemProps {
  value: string;
  children: React.ReactNode;
  className?: string;
}

const SelectItem: React.FC<SelectItemProps> = ({ value, children, className = "" }) => {
  const context = useContext(SelectContext);
  if (!context) throw new Error("SelectItem must be used within Select");

  const { value: selected, onValueChange, setOpen } = context;
  const isSelected = selected === value;

  const handleSelect = () => {
    onValueChange(value);
    setOpen(false);
  };

  return (
    <div
      role="option"
      aria-selected={isSelected}
      onClick={handleSelect}
      className={`relative flex w-full cursor-pointer select-none items-center rounded-sm py-2 pl-8 pr-2 text-sm 
        hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground 
        ${isSelected ? "bg-accent text-accent-foreground" : ""} ${className}`}
    >
      <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
        {isSelected && <Check className="h-4 w-4" />}
      </span>
      {children}
    </div>
  );
};

// ✅ SelectGroup
const SelectGroup: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="p-1">{children}</div>
);

// ✅ SelectLabel
const SelectLabel: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="py-1.5 pl-8 pr-2 text-sm font-semibold text-muted-foreground">{children}</div>
);

// ✅ SelectSeparator
const SelectSeparator: React.FC = () => <div className="-mx-1 my-1 h-px bg-muted" />;

// ✅ SelectValue
const SelectValue: React.FC<{ placeholder?: string }> = ({ placeholder }) => (
  <span className="truncate">{placeholder}</span>
);

export {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectGroup,
  SelectLabel,
  SelectSeparator,
  SelectValue,
};
