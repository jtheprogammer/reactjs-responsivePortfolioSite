import { createContext, useMemo, useRef } from "react";

export const ActiveNavContext = createContext();

export const ActiveNavContextProvider = (props) => {
  const headerRef = useRef();
  const aboutRef = useRef();
  const experienceRef = useRef();
  const portfolioRef = useRef();
  const servicesRef = useRef();
  const testimonialsRef = useRef();
  const contactRef = useRef();

    // const memoizedRefs = useMemo(() => {
    //   const refs = { headerRef,
    //     aboutRef ,
    //     experienceRef,
    //     portfolioRef,
    //     servicesRef,
    //     testimonialsRef,
    //     contactRef };
    //   return refs;
    // }, []);

    const refs = { headerRef,
      aboutRef,
      portfolioRef,
      experienceRef,
      servicesRef,
      testimonialsRef,
      contactRef }

  return (
    <ActiveNavContext.Provider value={refs}>
      {props.children}
    </ActiveNavContext.Provider>
  );
};
