import { useState } from 'react';

const links = [
  { link: '/about', label: 'Home' },
  { link: '/pricing', label: 'Cakes' },
  { link: '/learn', label: 'Inquiry' },
  { link: '/community', label: 'About Me' },
];

export function OvenKnobNav() {
  const [rotation, setRotation] = useState(0);  // total degrees rotated
  const [activeIndex, setActiveIndex] = useState(0);
  const angleStep = 360 / links.length;

    const handleClick = (index: number) => {
    const diffIndex = index - activeIndex;
    const normalizedDiff =
        ((diffIndex + links.length / 2) % links.length) - links.length / 2;

    const deltaDegrees = normalizedDiff * angleStep;

    setRotation((prev) => prev + deltaDegrees);
    setActiveIndex(index);
    };


  return (
    <div className="relative mx-5" style={{ width: 240, height: 240 }}>
      {/* Links in a circle */}
      {links.map((item, index) => {
        const angle = angleStep * index - 90;
        const radius = 100; 
        const x = radius * Math.cos((angle * Math.PI) / 180);
        const y = radius * Math.sin((angle * Math.PI) / 180);

        return (
          <button
            key={item.label}
            className={`absolute transform -translate-x-1/2 -translate-y-1/2 ${
              activeIndex === index ? 'font-bold text-red-500' : 'text-gray-600'
            }`}
            style={{
              left: `calc(50% + ${x}px)`,
              top: `calc(50% + ${y}px)`,
            }}
            onClick={() => handleClick(index)}
          >
            {item.label}
          </button>
        );
      })}

      {/* Knob image */}
      <img
        src="/knob.png"
        alt="Oven knob"
        className="absolute top-1/2 left-1/2 w-24 h-24 transition-transform duration-500"
        style={{
          transform: `translate(-50%, -50%) rotate(${rotation}deg)`,
        }}
      />
    </div>
  );
}
