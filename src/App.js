import React, { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { AnimatePresence } from "framer-motion";
import { GlobalStyle } from "./globalStyles";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "./components/Themes";
import PageNotFound from "./components/PageNotFound"
import Loading from "./subComponents/Loading";

//Components
const Main = lazy(() => import("./components/Main"));
const AboutMe = lazy(() => import("./components/AboutMe"));
const MySkills = lazy(() => import("./components/MySkills"));
const Blog = lazy(() => import("./components/Blog"));
const Work = lazy(() => import("./components/Work"));
const SoundBar = lazy(() => import("./subComponents/SoundBar"));



const App = () => {
  return (
    <>
    <GlobalStyle />
    <ThemeProvider theme={lightTheme}>
      <Suspense fallback={<Loading />}>
      <SoundBar />

      <AnimatePresence exitBeforeEnter>
       <Routes>
         <Route path="/" element={<Main />} />
         <Route path="about" element={<AboutMe />} />
         <Route path="blog" element={<Blog />} />
         <Route path="work" element={<Work />} />
         <Route path="skills" element={<MySkills />} />
         <Route path="*" element={<PageNotFound />} />
       </Routes>
       </AnimatePresence>
       </Suspense>
    </ThemeProvider>
    </>
  )
}

export default App
