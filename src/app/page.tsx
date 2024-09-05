/* eslint-disable @next/next/no-img-element */

export default function Home() {
  return (
    <div className="">
      <img
        src={`${process.env.NEXT_PUBLIC_IMAGEKIT_URL}/tr:w-300,h-300,l-text,i-hello,fs-32,l-end/balloon.jpg`}
        alt="meme"
      />
    </div>
  );
}
