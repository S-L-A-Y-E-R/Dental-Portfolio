interface TagType {
  title: string;
  value: string;
}

export interface ImageType {
  src: string;
  alt: string;
  caption: string;
  tags: TagType[];
  width: number;
  height: number;
}
