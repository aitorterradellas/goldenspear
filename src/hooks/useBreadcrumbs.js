import React, { useState } from "react";

const useBreadcrumbs = () => {
  const [breadcrumbs, setBreadcrumbs] = useState({
    history: [[]],
  });

  const [currentIndex, setCurrentIndex] = useState(0);
  const getCurrentStep = () => {
    return breadcrumbs.history[currentIndex];
  };

  const getLastStep = () => {
    const lastIndex = breadcrumbs.history.length - 1;
    return breadcrumbs.history[lastIndex];
  };

  const reset = () => {
    setBreadcrumbs({
      history: [[]],
    });

    setCurrentIndex(0);
  };

  const goToStep = (index) => {
    const step = breadcrumbs.history[index + 1];
    setCurrentIndex(index + 1);
    return step;
  };

  const addBreadcrumb = (contact) => {
    const currentStep = getCurrentStep();
    const nextStep = currentStep.slice();
    nextStep.push(contact);

    const nextHistory = breadcrumbs.history.slice(0, currentIndex + 1);
    nextHistory.push(nextStep);

    const res = {
      history: nextHistory,
    };

    setCurrentIndex(currentIndex + 1);
    setBreadcrumbs(res);
  };

  return {
    getCurrentStep,
    goToStep,
    getLastStep,
    currentIndex,
    addBreadcrumb,
    reset,
  };
};

export default useBreadcrumbs;
