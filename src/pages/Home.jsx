import React from "react";
import Hero from "../components/Hero";
import LatestCollections from "../components/LatestCollections";
import BestSeller from "../components/BestSeller";
import Policy from "../components/Policy";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const fadeInUp = {
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

function Home() {
  const { ref: heroRef, inView: heroInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const { ref: latestRef, inView: latestInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const { ref: bestSellerRef, inView: bestSellerInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const { ref: policyRef, inView: policyInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <>
      <motion.div
        ref={heroRef}
        initial="hidden"
        animate={heroInView ? "visible" : "hidden"}
        variants={fadeInUp}
      >
        <Hero />
      </motion.div>

      <motion.div
        ref={latestRef}
        initial="hidden"
        animate={latestInView ? "visible" : "hidden"}
        variants={fadeInUp}
      >
        <LatestCollections />
      </motion.div>

      <motion.div
        ref={bestSellerRef}
        initial="hidden"
        animate={bestSellerInView ? "visible" : "hidden"}
        variants={fadeInUp}
      >
        <BestSeller />
      </motion.div>

      <motion.div
        ref={policyRef}
        initial="hidden"
        animate={policyInView ? "visible" : "hidden"}
        variants={fadeInUp}
      >
        <Policy />
      </motion.div>
    </>
  );
}

export default Home;
