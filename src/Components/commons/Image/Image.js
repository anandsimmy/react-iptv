import React, { Suspense } from 'react';
import { useImage } from 'react-image';
import './Image.css';

const customPromise = (src) => {
  let timer;
  return new Promise((res, rej) => {
    const i = new Image();
    i.onload = () => {
      timer && clearTimeout(timer);
      res();
    };
    i.onerror = rej;
    i.src = src;
    timer = setTimeout(() => {
      i.src = undefined;
      rej();
    }, 10000);
  });
};

function MyImageComponent({ url, altUrl, alt }) {
  const { src } = useImage({
    srcList: [url, altUrl],
    imgPromise: customPromise,
  });

  return <img src={src} alt={alt} />;
}

const ImageComponent = ({ placeholderImage, ...props }) => {
  return (
    <Suspense fallback={<img src={placeholderImage} alt='placeholder' />}>
      <MyImageComponent {...props} />
    </Suspense>
  );
};

export default ImageComponent;
