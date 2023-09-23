const getStoredJobId = () => {
  const storedId = localStorage.getItem("job-applications");
  if (storedId) {
    const parseStoredId = JSON.parse(storedId);
    return parseStoredId;
  }
  return [];
};

const saveApplicantId = (id) => {
  const prevId = getStoredJobId();
  const existsId = prevId.find((jobId) => jobId === id);
  if (!existsId) {
    prevId.push(id);
    localStorage.setItem("job-applications", JSON.stringify(prevId));
  }
};
export { getStoredJobId, saveApplicantId };
