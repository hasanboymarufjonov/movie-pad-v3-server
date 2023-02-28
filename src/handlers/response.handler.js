const responsezWithData = (res, statusCode, data) =>
  res.status(statusCode).json(data);

const error = (res) =>
  responsezWithData(res, 500, {
    status: 500,
    message: "Something wrong!",
  });

const badrequest = (res, message) =>
  responsezWithData(res, 400, {
    status: 400,
    message,
  });

const ok = (res, data) => responsezWithData(res, 200, data);

const created = (res, data) => responsezWithData(res, 201, data);

const unauthorize = (res) =>
  responsezWithData(res, 401, {
    status: 401,
    message: "Unathorized",
  });

const notfound = (res) =>
  responsezWithData(res, 404, {
    status: 404,
    meessage: "Not found",
  });

export default {
  error,
  badrequest,
  ok,
  created,
  unauthorize,
  notfound,
};
