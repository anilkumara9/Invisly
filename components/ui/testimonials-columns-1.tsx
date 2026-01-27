"use client";
import React from "react";
import { motion } from "motion/react";


export const TestimonialsColumn = (props: {
  className?: string;
  testimonials: typeof testimonials;
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6 bg-background"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ text, image, name, role }, i) => (
                <div className="p-10 rounded-3xl border shadow-lg shadow-primary/10 max-w-xs w-full" key={i}>
                  <div>{text}</div>
                  <div className="flex items-center gap-2 mt-5">
                    <img
                      width={40}
                      height={40}
                      src={image}
                      alt={name}
                      className="h-10 w-10 rounded-full"
                    />
                    <div className="flex flex-col">
                      <div className="font-medium tracking-tight leading-5">{name}</div>
                      <div className="leading-5 opacity-60 tracking-tight">{role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.div>
    </div>
  );
};

const testimonials = [
  {
    text: "Invisly helped me ace my technical interviews! The stealth mode is a game-changer for online exams.",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    name: "Sarah Johnson",
    role: "Software Engineer",
  },
  {
    text: "Finally, a coding assistant that doesn't get detected by proctoring software. Invisly is a lifesaver!",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    name: "Michael Chen",
    role: "Computer Science Student",
  },
  {
    text: "The real-time help without being obvious is exactly what I needed for my online assessments.",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    name: "Priya Sharma",
    role: "CS Graduate",
  },
  {
    text: "Invisly's interface is so discreet, I can use it during exams without raising any suspicion.",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
    name: "David Wilson",
    role: "Engineering Student",
  },
  {
    text: "This tool completely changed how I approach coding interviews. The stealth features are unmatched.",
    image: "https://randomuser.me/api/portraits/women/5.jpg",
    name: "Emma Rodriguez",
    role: "Junior Developer",
  },
  {
    text: "As a student facing strict proctoring, Invisly gives me the confidence I need to succeed.",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
    name: "Jennifer Lee",
    role: "Computer Science Major",
  },
  {
    text: "The keyboard shortcuts and seamless integration make Invisly essential for any coding student.",
    image: "https://randomuser.me/api/portraits/men/7.jpg",
    name: "Robert Kim",
    role: "Tech Student",
  },
  {
    text: "Invisly helped me land my dream job by preparing me for technical interviews without stress.",
    image: "https://randomuser.me/api/portraits/women/8.jpg",
    name: "Lisa Anderson",
    role: "New Software Engineer",
  },
  {
    text: "The undetectable features and excellent support make Invisly the best coding assistant available.",
    image: "https://randomuser.me/api/portraits/men/9.jpg",
    name: "Thomas Brown",
    role: "CS Senior",
  },
];


const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);


export const Testimonials = () => {
  return (
    <section className="bg-background my-20 relative">

      <div className="container z-10 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[540px] mx-auto"
        >
          <div className="flex justify-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-yellow-500/10 to-yellow-300/10 border border-yellow-500/20 rounded-full text-sm text-yellow-300 font-medium mb-4 sm:mb-6">Our Users</div>
          </div>

          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tighter mt-5">
            What our <span className="text-yellow-500">users say</span>
          </h2>
          <p className="text-center mt-5 opacity-75 text-white/80">
            See what our customers have to say about us.
          </p>
        </motion.div>

        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
        </div>
      </div>
    </section>
  );
};