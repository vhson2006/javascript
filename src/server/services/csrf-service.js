const sendCsrfService = (req, res, next) => {
  res.cookie('XSRF-TOKEN', req.csrfToken());
  next();
};

export default sendCsrfService;
