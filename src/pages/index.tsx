import { Dropdown } from "primereact/dropdown";
import { SelectItem, SelectItemOptionsType } from "primereact/selectitem";
import { useState } from "react";

const options: SelectItemOptionsType = Array.from({ length: 100_000 }, (v, k) => k + 1)
  .map(v => ({ value: v, label: `item ${v}` } satisfies SelectItem));

export default function Home() {
  const [selected, setSelected] = useState<string>();

  return (
    <Dropdown
      value={selected}
      options={options}
      filter
      filterBy="label"
      filterInputAutoFocus
      resetFilterOnHide
      showClear
      virtualScrollerOptions={{ itemSize: 38 }}
      dataKey="value"
      onChange={e => setSelected(e.value)}
    />
  );
}
