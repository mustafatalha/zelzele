import * as React from "react";

export interface FilterProps {
  hide: number;
}

export interface AllFilterProps {
  filter: {
    hide: number;
  };
  setFilter: React.Dispatch<
    React.SetStateAction<{
      hide: number;
    }>
  >;
}

export default function Filter({ filter, setFilter }: AllFilterProps) {
  return (
    <div className="fixed left-1/2 bottom-6 flex -translate-x-1/2 items-center gap-2 rounded-full bg-white p-4 shadow-lg">
      <label>Göster &gt; {filter.hide}</label>
      <input
        type="range"
        step={1}
        min={1}
        max={6}
        value={filter.hide}
        onChange={(e) => setFilter({ hide: parseInt(e.target.value) })}
      />
    </div>
  );
}
