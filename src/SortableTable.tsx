import React, { CSSProperties, ReactNode } from "react";

export function dynamicSort<T extends Record<string, unknown>>(
  property: keyof T,
  direction: "asc" | "desc",
) {
  const sortOrder = direction === "asc" ? 1 : -1;
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

interface SortableTableState<T extends Record<string, unknown>> {
  sort: keyof T;
  direction: "asc" | "desc";
}

export class SortableTable<
  T extends Record<string, unknown>,
> extends React.Component<SortableTableProps<T>, SortableTableState<T>> {
  state = {
    sort: this.props.defaultSort,
    direction: "asc" as "asc" | "desc",
  };

  sortArrows = (style: CSSProperties | undefined, prop: keyof T) => {
    let url =
      "url(data:image/gif;base64,R0lGODlhFQAJAIAAACMtMP///yH5BAEAAAEALAAAAAAVAAkAAAIXjI+AywnaYnhUMoqt3gZXPmVg94yJVQAAOw==)";
    if (this.state.sort === prop) {
      switch (this.state.direction) {
        case "asc":
          url =
            "url(data:image/gif;base64,R0lGODlhFQAEAIAAACMtMP///yH5BAEAAAEALAAAAAAVAAQAAAINjI8Bya2wnINUMopZAQA7)";
          break;
        case "desc":
          url =
            "url(data:image/gif;base64,R0lGODlhFQAEAIAAACMtMP///yH5BAEAAAEALAAAAAAVAAQAAAINjB+gC+jP2ptn0WskLQA7)";
      }
    }
    return { ...style, backgroundImage: url };
  };

  changeSort = (value: keyof T) => {
    if (value === this.state.sort) {
      if (this.state.direction === "asc") {
        this.setState({
          sort: value,
          direction: "desc",
        });
      } else {
        this.setState({
          sort: value,
          direction: "asc",
        });
      }
    } else {
      this.setState({
        sort: value,
        direction: "asc",
      });
    }
  };

  render() {
    const sortArrows = this.sortArrows;
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
            {this.props.columns.map((col) => {
              return (
                <th
                  key={String(col.property)}
                  className="sortable"
                  tabIndex={0}
                  scope="col"
                  role="columnheader"
                  aria-disabled="false"
                  aria-controls="sortable"
                  aria-sort="none"
                  aria-label="Code: No sort applied, activate to apply an ascending sort"
                  onClick={() => this.changeSort(col.property)}
                  style={sortArrows({}, col.property)}
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
          {[...this.props.entries]
            .sort(dynamicSort(this.state.sort, this.state.direction))
            .map((entry, i) => this.props.rowComponent({ entry: entry, i: i }))}
        </tbody>

        {this.props.children}
      </table>
    );
  }
}
