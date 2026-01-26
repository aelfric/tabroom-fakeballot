import { ReactNode, useState } from "react";

export function dynamicSort<T extends Record<string, unknown>>(
  property: keyof T,
  direction: "ascending" | "descending",
) {
  const sortOrder = direction === "ascending" ? 1 : -1;
  return function (a: T, b: T) {
    const result =
      a[property] < b[property] ? -1 : a[property] > b[property] ? 1 : 0;
    return result * sortOrder;
  };
}

export interface Column<T> {
  property: keyof T;
  label: string | string[];
  ariaLabel: string;
}

type SortableTableProps<T extends Record<string, unknown>> = {
  defaultSort: keyof T;
  columns: Column<T>[];
  children?: ReactNode;
  entries: T[];
  rowComponent: (o: { entry: T; i: number }) => ReactNode;
};

export function SortableTable<T extends Record<string, unknown>>(
  props: SortableTableProps<T>,
) {
  const [sort, setSort] = useState(props.defaultSort);
  const [direction, setDirection] = useState<"ascending" | "descending">(
    "ascending",
  );

  const unsorted_arrows =
    "url(data:image/gif;base64,R0lGODlhFQAJAIAAACMtMP///yH5BAEAAAEALAAAAAAVAAkAAAIXjI+AywnaYnhUMoqt3gZXPmVg94yJVQAAOw==)";
  const up_arrow =
    "url(data:image/gif;base64,R0lGODlhFQAEAIAAACMtMP///yH5BAEAAAEALAAAAAAVAAQAAAINjI8Bya2wnINUMopZAQA7)";
  const down_arrow =
    "url(data:image/gif;base64,R0lGODlhFQAEAIAAACMtMP///yH5BAEAAAEALAAAAAAVAAQAAAINjB+gC+jP2ptn0WskLQA7)";

  const changeSort = (value: keyof T) => {
    if (value === sort) {
      if (direction === "ascending") {
        setDirection("descending");
      } else {
        setDirection("ascending");
      }
    } else {
      setSort(value);
      setDirection("ascending");
    }
  };

  return (
    <table
      id="sortable"
      className="tablesorter tablesorter-default tablesorterb5b9d657ed08a hasStickyHeaders"
      role="grid"
    >
      <thead>
        <tr
          className="yellowrow smallish centeralign tablesorter-headerRow"
          role="row"
        >
          {props.columns.map((col) => {
            return (
              <th
                key={String(col.property)}
                className="sortable"
                tabIndex={0}
                scope="col"
                role="columnheader"
                aria-disabled="false"
                aria-controls="sortable"
                aria-sort={sort === col.property ? direction : "none"}
                aria-label="Code: No sort applied, activate to apply an ascending sort"
                onClick={() => changeSort(col.property)}
                style={{
                  backgroundImage:
                    sort === col.property
                      ? direction === "ascending"
                        ? up_arrow
                        : down_arrow
                      : unsorted_arrows,
                }}
                colSpan={Array.isArray(col.label) ? col.label.length : 1}
              >
                <div className="tablesorter-header-inner">
                  {Array.isArray(col.label)
                    ? col.label.map((label) => (
                        <span key={label} className="half marno centeralign">
                          {label}
                        </span>
                      ))
                    : col.label}
                </div>
              </th>
            );
          })}
        </tr>
      </thead>

      <tbody id="ballottable" aria-live="polite" aria-relevant="all">
        {[...props.entries]
          .sort(dynamicSort(sort, direction))
          .map((entry, i) => props.rowComponent({ entry: entry, i: i }))}
      </tbody>

      {props.children}
    </table>
  );
}
