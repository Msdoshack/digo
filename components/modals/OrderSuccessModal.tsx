import Lottie from "lottie-react";
import done from "../../public/assets/Done.json";
import { Button } from "../ui/button";
import Link from "next/link";
import { motion } from "motion/react";
import { useEffect, useRef } from "react";

type PropsType = {
  onClose: () => void;
};

const OrderSuccessModal = ({ onClose }: PropsType) => {
  const modalRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current?.contains(event.target as Node)
      ) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div className="fixed top-0 left-0 w-full h-screen bg-[#000000e8] flex items-center justify-center z-50">
      <div
        className="bg-white rounded-md flex flex-col gap-10 py-5 w-xs items-center justify-center"
        ref={modalRef}
      >
        <div>
          <Lottie
            animationData={done}
            loop={false}
            style={{ width: 60, height: 60, margin: "0 auto" }}
          />

          <motion.h1
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: {
                duration: 2,
                delay: 0.5,
              },
            }}
          >
            Order Placed
          </motion.h1>
        </div>

        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
            transition: {
              duration: 1,
              delay: 1,
            },
          }}
        >
          <Link href={"/customer/order"}>
            <Button
              variant={"outline"}
              className="brand-color ring ring-[#f33c7a]"
            >
              View Orders
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default OrderSuccessModal;
