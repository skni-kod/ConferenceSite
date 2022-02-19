import NextImage, { ImageLoader, ImageProps } from "next/Image";

const customLoader: ImageLoader = ({ src }) => {
  return src;
};

const Image = ({ loader: _, ...props }: ImageProps) => (
  <NextImage loader={customLoader} {...props} />
);

export default Image;