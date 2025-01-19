// @ts-nocheck
import React, { CSSProperties, ReactNode } from "react";

export function dynamicSort<T>(property: string) {
  let sortOrder = 1;
  if (property[0] === "-") {
    sortOrder = -1;
    property = property.substr(1);
  }
  return function (a: T, b: T) {
    const result =
      a[property] < b[property] ? -1 : a[property] > b[property] ? 1 : 0;
    return result * sortOrder;
  };
}

export interface Column {
  property: string;
  label: string | string[];
  ariaLabel: string;
}

type Entry = Record<string, string | number>;

type SortableTableProps<T extends Object> = {
  defaultSort: keyof T;
  columns: Column[];
  children?: ReactNode;
  entries: T[];
  rowComponent: (o: { entry: T; i: number }) => ReactNode;
};

interface SortableTableState<T extends Object> {
  sort: keyof T;
}

// @ts-ignore
export class SortableTable<T extends Object> extends React.Component<
  SortableTableProps<T>,
  SortableTableState<T>
> {
  state = {
    sort: this.props.defaultSort,
  };

  sortArrows = (style: CSSProperties | undefined, prop: string) => {
    const direction =
      this.state.sort === prop
        ? "UP"
        : this.state.sort === "-" + prop
          ? "DOWN"
          : undefined;

    let url;
    switch (direction) {
      case "UP":
        url =
          "url(data:image/gif;base64,R0lGODlhFQAEAIAAACMtMP///yH5BAEAAAEALAAAAAAVAAQAAAINjI8Bya2wnINUMopZAQA7)";
        break;
      case "DOWN":
        url =
          "url(data:image/gif;base64,R0lGODlhFQAEAIAAACMtMP///yH5BAEAAAEALAAAAAAVAAQAAAINjB+gC+jP2ptn0WskLQA7)";
        break;
      default:
        url =
          "url(data:image/gif;base64,R0lGODlhFQAJAIAAACMtMP///yH5BAEAAAEALAAAAAAVAAkAAAIXjI+AywnaYnhUMoqt3gZXPmVg94yJVQAAOw==)";
    }
    return { ...style, backgroundImage: url };
  };

  changeSort = (value: string) => {
    if (value === this.state.sort) {
      if (value[0] !== "-") {
        value = "-" + value;
      } else {
        value = value.substr(1);
      }
    }
    this.setState({ sort: value });
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
            {this.props.columns.map((col, i) => {
              return (
                <th
                  key={col.property}
                  className="sortable"
                  tabIndex={0}
                  scope="col"
                  role="columnheader"
                  aria-disabled="false"
                  aria-controls="sortable"
                  unselectable="on"
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
          {this.props.entries
            .sort(dynamicSort(this.state.sort))
            .map((entry, i) => this.props.rowComponent({ entry: entry, i: i }))}
        </tbody>

        {this.props.children}
      </table>
    );
  }
}
