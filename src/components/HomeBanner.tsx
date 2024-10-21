import { useState } from "react";
import fanta1 from "../assets/fanta1.png";
import fanta2 from "../assets/fanta2.png";
import fanta3 from "../assets/fanta3.png";
// import { FaWhatsapp } from "react-icons/fa"

import { AnimatePresence, easeInOut, motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";


const heroData = [
  {
    id: 1,
    title: "Fanta Orange",
    image: fanta1,
    subtitle:
      "Fanta Orange is a refreshing carbonated soft drink known for its bold, tangy orange flavor. Made with real orange flavors, it's a vibrant, sweet, and bubbly beverage that's perfect for quenching thirst. Its zesty taste and lively fizz make it a fun favorite for all ages.",
    mrp: "$44",
    price: "$40",
    modal: "Orange",
    bgColor: "#cf4f00",
  },
  {
    id: 2,
    image: fanta2,
    title: "Fanta Zero",
    subtitle:
      "Fanta Orange is a fizzy, fruit-flavored soda with a distinctive citrus kick. Known for its bright orange color and refreshing sweetness, it's a go-to drink for those who love a bold, bubbly experience. Whether served ice-cold on a hot day or paired with a meal, Fanta Orange delivers a fun, flavorful twist to soft drinks.",
    mrp: "$44",
    price: "$30",
    modal: "Fanta",
    bgColor: "#727272",
  },
  {
    id: 3,
    image: fanta3,
    title: "Coca Cola ",
    subtitle:
      "Coca-Cola is a world-famous carbonated soft drink with a smooth, refreshing cola flavor. Known for its perfect blend of sweetness and fizz, it has been a favorite for over a century. Whether enjoyed on its own or paired with food, Coca-Cola offers a satisfying and classic taste.",
    mrp: "$44",
    price: "$50",
    modal: "Zero",
    bgColor: "#ac1a00",
  },
];


const slideRight = (delay:number,exitDelay?:number)=>{
  return {
    initial:{
      opacity:0,
      x:100,
    },
    animate:{
      opacity:1,
      x:0,
      transition:{
        duration:0.4,
        delay:delay,
        ease:easeInOut,
      }
    },
    exit:{
      opacity:0,
      x:-100,
      transition:{
        ...(exitDelay ? { delay: exitDelay } : {}),
        // {...(exitDelay?{delay:exitDelay}:{})},
        duration:0.3,
        ease:easeInOut,
      }
    }

  }
}

const slideUp = (delay?:number)=>{
  return{
    hidden:{
      opacity:0,
      y:100,
    },
    visible:{
      opacity:1,
      y:0,
      transition:{
        duration:0.6,
        ...(delay?{delay:delay}:{}),
        ease:easeInOut,
      }
    },
    
  }
}


const HomeBanner = () => {
  const [activeData, setActiveData] = useState(heroData[0]);
  const handleActiveData = (data: {
    id: number;
    image: string;
    title: string;
    subtitle: string;
    price: string;
    modal: string;
    bgColor: string;
    mrp: string;
  }) => {
    setActiveData(data);
  };
  return (

    <motion.div
      layout
      initial={{ backgroundColor: activeData?.bgColor }}
      animate={{ backgroundColor: activeData?.bgColor }}
      transition={{ duration: 1,ease:easeInOut }}
      className="max-w-screen-2xl layoutPadding overflow-hidden mx-auto customPadding relative min-h-[80vh] grid grid-cols-1 md:grid-cols-2   pt-44  "
    >
      {/*FIRST GRID START HERE  */}
      {/**TITLE + SUBTITLE+ORDER BUTTON START  */}
      <div className="flex flex-col justify-center   py-14 md:py-0 xl:max-w-[500px] order-2 md:order-1 ">
        <div className="space-y-5 text-center md:text-left">
       
       
       
        <AnimatePresence mode="wait">
          <motion.h1
          key={activeData?.id}
          variants={slideRight(0.3)}
          initial="initial"
          animate="animate"
          exit="exit"
           className="text-3xl lg:text-6xl xl:text-7xl font-bold font-handwriting text-shadow text-white">
            {activeData?.title}
          </motion.h1>
          </AnimatePresence>


<AnimatePresence mode="wait">
          <motion.p 
          key={activeData?.id}
          variants={slideRight(0.5)}
          initial="initial"
          animate="animate"
          exit="exit"
          
          
          className="text-sm leading-loose text-white/80">
            {activeData?.subtitle}
          </motion.p>


</AnimatePresence>


         <AnimatePresence
         mode="wait"
         >
          <motion.button 
          key={activeData?.id}
          variants={slideRight(0.6)}
          initial="initial"
          animate="animate"
          exit="exit"
          className="  text-xs sm:text-sm  px-4 py-2 bg-white inline-block font-normal rounded">
            Order Now
          </motion.button>
         </AnimatePresence>
        </div>
        {/**TITLE + SUBTITLE+ORDER BUTTON END*/}


        <motion.div
        variants={slideUp(0.8)}
        initial="hidden"
        animate="visible"
      
        >

        {/*LIST SEPERATOR START */}
        <div
         
        
        
        className="flex items-center justify-center md:justify-start gap-4 mt-8 !sm:mt-16 !md:mt-24 !mb-10">
          <div className="w-20 flex-1 h-[1px] bg-white " />
          <p className="text-xs lg:text-base text-white">Top Recommendation</p>
          <div className="w-20 flex-1  h-[1px] bg-white " />
        </div>
        {/*LIST SEPERATOR END */}

        {/*IMAGE SWITCHER START  */}
        <div
        className="grid grid-cols-3 gap-10 place-items-center">
          {heroData?.map(
            (
              val: {
                id: number;
                image: string;
                title: string;
                subtitle: string;
                price: string;
                modal: string;
                bgColor: string;
                mrp: string;
              },
              index: number
            ) => (
              <div
                key={index}
                className={`flex flex-col gap-4 items-center cursor-pointer space-y-3 transition-all duration-300 ease-in-out ${
                  val?.title === activeData?.title ? "" : "hover:scale-105"
                }`}
              >
                <img
                  src={val?.image}
                  alt={val?.title}
                  loading="eager"
                  className={`w-[80px] img-shadow ${
                    activeData?.title === val?.title
                      ? "opacity-100 scale-110"
                      : "opacity-50"
                  }`}
                  onClick={() => handleActiveData(val)}
                />
                <div className="text-center">
                  <h3 className="line-through text-xs sm:text-[13px] text-white/40 font-normal">
                    {val?.mrp}
                  </h3>
                  <h3 className=" text-sm sm:text-base font-medium text-slate-50">
                    {val?.price}
                  </h3>
                </div>
              </div>
            )
          )}
        </div>
        {/*IMAGE SWITCHER END */}
      </motion.div>

      {/*FIRST GRID END HERE  */}
        </div>


      {/*SECOND GRID START HERE  */}

      {/*Hero image start  */}


    



      <div className="relative    order-1 md:order-2 flex flex-col justify-end  md:justify-center lg:justify-end items-center  w-full ">
        
        <AnimatePresence mode="wait">
          
        <motion.img
        key={activeData?.id}
        variants={slideRight(0.6)}
        initial="initial"
        animate="animate"
        exit={"exit"}
        
        src={activeData?.image}
        alt={activeData?.title}
        loading="eager"
        className="z-10 w-[150px] md:w-[200px] lg:w-[300px] xl:w-[350px] object-cover img-shadow"
        />

        </AnimatePresence>




{/* <AnimatePresence mode="wait">
          <motion.div
            key={activeData.modal}
            initial={{ opacity: 0,  }}
            animate={{ opacity: 1,  }}
            exit={{ opacity: 0,  }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="text-white/5 text-[300px] font-poppins font-extrabold absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0"
          >
            {activeData.modal}
          </motion.div>
        </AnimatePresence> */}




            <motion.div
              key={activeData?.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              layout
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="text-white/5 text-[100px]  sm:text-[150px] md:text-[200px] lg:text-[250px] xl:text-[300px] font-poppins font-extrabold absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0"
            >
              {activeData.modal}
            </motion.div>






        {/* <div className="font-extrabold text-[250px] text-white/5 absolute top-0 z-0  left-1/2 font-poppins  -translate-x-1/2 -translate-y-1/2 ">
          {activeData?.modal}
        </div>
 */}





        {/*WHATSAPP ICON START  */}
        {/* <FaWhatsapp className="text-2xl text-white bg-white/10 backdrop-blur-sm p-2 rounded-full absolute bottom-5 right-5"/> */}
        
                <div className="  text-xl  sm:text-2xl md:text-3xl z-[9999]  text-white  fixed bottom-10 right-10 hover:rotate-[360deg] duration-500 mix-blend-difference   p-5 rounded-full ">
                    <FaWhatsapp className="text-3xl "/>
                </div>

        {/*WHATSAPP ICON END */}
      </div>

      {/*Hero image end  */}

      {/*SECOND GRID END HERE  */}

      {/*whatsapp icon  */}
    </motion.div>
    // </motion.div>
  );
};
export default HomeBanner;








