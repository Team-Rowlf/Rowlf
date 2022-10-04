import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTemplateAsync());
  }, [dispatch]);

  return (
    <>
      {/* <NavBar /> */}
      <div id="main">
        <Routes>
          <Route index element={<Home />} />
          <Route path={"/template"} element={<Template />} />
        </Routes>
      </div>
      {/* <Footer /> */}
    </>
  );
}

export default App;
