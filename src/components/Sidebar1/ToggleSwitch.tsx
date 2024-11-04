import React from "react";

interface ToggleSwitchProps {
  imageSrc: string; // Path to the image you want in the center of the switch
  label?: string;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ imageSrc, label = "Toggle me", checked = false, onChange }) => {
  const handleToggle = () => {
    if (onChange) onChange(!checked);
  };

  return (
    <label className="inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        checked={checked}
        onChange={handleToggle}
        className="sr-only peer"
      />
      <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:bg-blue-600">
        <div
          className="absolute top-[2px] left-[2px] h-5 w-5 rounded-full border border-gray-300 dark:border-gray-600 bg-white transition-transform peer-checked:translate-x-full"
          style={{
            backgroundImage: `url(${imageSrc})`,
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
      </div>
      {label && (
        <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
          {label}
        </span>
      )}
    </label>
  );
};

export default ToggleSwitch;
