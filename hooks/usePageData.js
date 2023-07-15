//This hook will fetch data when the use reach the bottom of the page.

import { useState, useEffect } from "react";

const usePageBottom = () => {
  const [reachedBottom, setReachedBottom] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const getDatas = async () => {
    const response = await fetch(url, options);
    if (response.ok) {
      const data = await response.json();
      setLoading(false);
      setData(data);
    } else {
      setLoading(false);
      setError(response.statusText);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const offsetHeight = document.documentElement.offsetHeight;
      const innerHeight = window.innerHeight;
      const scrollTop = document.documentElement.scrollTop;

      const hasReachedBottom = offsetHeight - (innerHeight + scrollTop) <= 10;

      setReachedBottom(hasReachedBottom);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return reachedBottom;
};

export default usePageBottom;
