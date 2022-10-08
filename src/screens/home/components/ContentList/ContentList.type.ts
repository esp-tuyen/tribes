export interface IContent {
  name: string;
  description: string;
}

export interface ContentListProps {
  name: string;
  contents: IContent[];
}
