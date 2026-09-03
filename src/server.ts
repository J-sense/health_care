import app from "./app";
const bootsrap = () => {
  try {
    app.listen(5000, () => {
      console.log(`Server is running on http://localhost:5000`);
    });
  } catch (error) {
    console.error("Error starting the server:", error);
  }
};
bootsrap();
