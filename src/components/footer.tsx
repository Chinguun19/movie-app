import "@fontsource/inter"

const Footer = () => {
    return (
      <footer className="bg-indigo-600 h-[280px] w-screen text-white py-6 flex justify-center items-center">
        <div className="h-[200px] w-screen bg-white flex ">
          <div className="h-[200px] w-fit bg-indigo-600 mr-[120px] ml-[80px]">
            <img src="film.png" className=" h-[20px] w-[20px] ml-[10px] mb-[20px]"></img>
            <h1 className="italic font-[700] font-[16px] ml-[100px] mt-[-40px] absolute left-[20px]
             ">Movie Z</h1>
            <p className="text-[14px] truncate mt-[-10px] text-[#FAFAFA] font-[400] font-[Inter]"> © 2024 Movie Z. All Rights Reserved.</p>

          </div>
          <div className=" w-[1400px] h-[200px]  bg-[#008000] mr-[80px] flex"> 
          <div className="h-[200px] w-[180px] bg-black ml-[369px]"> </div>
          <div className="h-[52px] w-[274px] bg-white ml-[96px]"> </div>

          </div>
        </div>
    </footer> 
    
    );
  };
  
  export default Footer;
  