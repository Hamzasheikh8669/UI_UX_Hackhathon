"use client";

import { useState } from "react";
import { ChevronDown, Check } from "lucide-react";

interface SelectProps {
  options: { value: string; label: string }[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
}

export function Select({
  options,
  value,
  onChange,
  placeholder = "Select an option",
  className = "",
}: SelectProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`relative w-full ${className}`}>
      {/* Trigger */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between rounded border border-gray-300 bg-white px-3 py-2 text-left text-sm text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-400"
      >
        <span>{value || placeholder}</span>
        <ChevronDown
          className={`h-4 w-4 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Dropdown */}
      {isOpen && (
        <ul className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded border border-gray-300 bg-white py-1 text-sm shadow-lg focus:outline-none">
          {options.map((option) => (
            <li
              key={option.value}
              onClick={() => {
                onChange(option.value);
                setIsOpen(false);
              }}
              className={`flex cursor-pointer items-center justify-between px-3 py-2 hover:bg-gray-100 ${
                value === option.value ? "bg-gray-100" : ""
              }`}
            >
              <span>{option.label}</span>
              {value === option.value && <Check className="h-4 w-4 text-gray-700" />}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export function SelectTrigger({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={`inline-block ${className}`}>{children}</div>;
}

export function SelectValue({ placeholder }: { placeholder: string }) {
  return <span>{placeholder}</span>;
}

export function SelectContent({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}

export function SelectItem({
  children,
  onClick,
}: {
  value: string;
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <div
      onClick={onClick}
      className="px-4 py-2 cursor-pointer hover:bg-gray-100"
    >
      {children}
    </div>
  );
}