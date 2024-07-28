interface ImageProps {
  src: string;
  alt: string;
  className?: string;
  title?: string;
}

const Image: React.FC<ImageProps> = ({
  src, alt, className, title
}) => {
  return (
    <>
      <img
        src={src}
        alt={alt}
        className={className}
        title={title}
      />
    </>
  );
};

export default Image;
