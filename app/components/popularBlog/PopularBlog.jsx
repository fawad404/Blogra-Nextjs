import React from 'react'

export default function PopularBlog() {
  return (
    <section className="pt-20 pb-32 overflow-hidden">
  <div className="container mx-auto px-4">
    <div className="md:max-w-lg mx-auto text-center mb-20">
      <h2 className="mb-4 font-heading font-semibold text-gray-900 text-6xl sm:text-7xl">Popular Posts</h2>
      <p className="text-lg text-gray-500">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim.</p>
    </div>
    <div className="flex flex-wrap -m-9">
    
      <div className="w-full md:w-1/3 p-9">
        <a className="group" href="#">
          <div className="group flex flex-col mb-5 overflow-hidden rounded-xl">
            <img className="transform group-hover:scale-110 transition ease-out duration-500" src="https://static.shuffle.dev/components/preview/1ab04950-6e51-4cac-8432-f7313e765c0b/assets/public/gradia-assets/images/blog/blog-horizontal3.png" alt="" />
          </div>
          <p className="mb-4 font-heading font-medium text-xl text-gray-900 group-hover:underline">You will never believe these bizarre truth of travel.</p>
          <h2 className="font-heading font-medium text-xs uppercase text-gray-500 tracking-px">Technology . 4 min read</h2>
        </a>
      </div>
    </div>
  </div>
</section>
  )
}
