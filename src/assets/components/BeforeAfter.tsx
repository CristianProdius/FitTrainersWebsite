const BeforeAfter = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-12">
      <h1 className="px-4 pt-12 pb-8 text-2xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-white uppercase">
        Here are the result Before and after:
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-4">
        <div className="grid gap-4">
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="./1.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="./1.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg"
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg"
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg"
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg"
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg"
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg"
            />
          </div>
          <div>
            <div className="h-auto max-w-full rounded-lg bg-main py-8 px-4">
              <h1
                className="mb-6 text-2xl font-extrabold tracking-tight leading-none md:text-xl xl:text-2xl text-background
               uppercase w-full"
              >
                You are in control of your life
              </h1>
              <a
                href="#"
                className="text-background bg-white  hover:text-background hover:bg-gradient-to-r hover:from-[#8dff96] hover:to-main  font-medium rounded-[30px] text-xl px-5 py-2.5 text-center mt-4"
              >
                Join Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeforeAfter;
