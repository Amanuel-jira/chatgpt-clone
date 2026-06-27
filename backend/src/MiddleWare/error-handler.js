export const errorHandler = (err, req, res, next) => {
  console.log("🔥 REAL ERROR:", err);

  return res.status(500).json({
    status: false,
    message: err.message || "Internal Server Error",
  });
};

// export const errorHandler = (err, req, res, next) => {

//     return res.status(500).json({
//       status: false,
//       message: "Something went wrong, try again later",
//     });

// };
