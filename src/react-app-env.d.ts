/// <reference types="react-scripts" />

declare interface Dimension {
  width: number;
  height: number;
}

declare interface CardProps {
  index: number;
  url: URL;
  big: Dimension;
  thumb: Dimension;
}

declare interface NavigationProps {
  page: number;
  length: number;
  cardsPerPage: number;
  optSize: number[];
  onChangeSize: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

declare interface NavigationItemProps {
  disabled: boolean;
  id: number;
}
