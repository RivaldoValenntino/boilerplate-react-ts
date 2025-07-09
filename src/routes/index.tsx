import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: IndexComponent,
});

function IndexComponent() {
  return (
    // <div className="flex items-center justify-center min-h-screen">
    //   <div id="index-body" className="max-w-3xl w-full">
    //     <div className="circle-decoration-right"></div>
    //     <div className="circle-decoration-left"></div>
    //   </div>
    // </div>
    <div className="relative min-h-screen bg-[#F8F7FF] overflow-hidden">
      {/* Top gradient background */}
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-[#3060FF] via-[#3060FF99] to-transparent z-0" />

      {/* Circle Decorations */}
      <div className="absolute top-0 right-0 w-40 h-40 bg-[#3060FF99] rounded-full translate-x-1/3 -translate-y-1/3 z-0" />
      <div className="absolute top-24 -left-20 w-52 h-52 bg-[#3060FF99] rounded-full z-0" />

      {/* Page content */}
      <div className="relative z-10">
        <h1>AKOwkowk</h1>
      </div>
    </div>
  );
}
