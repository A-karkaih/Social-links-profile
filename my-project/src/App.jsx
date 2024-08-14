const App = () => {
  return (
    <main className="w-[320px] h-[500px] bg-[#1F1F1F]  rounded-lg flex flex-col gap-4 items-center ">
      <img
        src="/avatar-jessica.jpeg"
        alt="Profile pic"
        className=" h-16 h-16 rounded-full object-cover mt-4"
      />
      <h1 className="text-2xl font-bold">Jessica Randall</h1>
      <h4 className="text-sm text-yellow-500 mt-[-10px]">London, United Kingdom</h4>
      <p className="font-light text-sm">"Front-end developer and avid reader."</p>
      <div className="h-[35px] bg-[#333333] w-[270px] rounded-md flex items-center justify-center font-medium mt-3 hover:bg-green-500 cursor-pointer "> Github</div>
      <div className="h-[35px] bg-[#333333] w-[270px] rounded-md flex items-center justify-center font-medium hover:bg-green-500 cursor-pointer"> Linkedin</div>
      <div className="h-[35px] bg-[#333333] w-[270px] rounded-md flex items-center justify-center font-medium hover:bg-green-500 cursor-pointer"> Twitter</div>
      <div className="h-[35px] bg-[#333333] w-[270px] rounded-md flex items-center justify-center font-medium hover:bg-green-500 cursor-pointer"> Frontend Mentor</div>
      <div className="h-[35px] bg-[#333333] w-[270px] rounded-md flex items-center justify-center font-medium hover:bg-green-500 cursor-pointer"> Instagram</div>
    </main>
  );
};

export default App;
