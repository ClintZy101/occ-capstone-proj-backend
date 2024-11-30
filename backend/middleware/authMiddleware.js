import admin from "../firebaseAdmin.js";

const authenticateUser = async (req, res, next) => {
  const token = req.headers.authorization?.split("Bearer ")[1];

  if (!token) {
    return res.status(401).json({ success: false, message: "Unauthorized" });
  }

  try {
    const decodedToken = await admin.auth().verifyIdToken(token);
    req.user = decodedToken;
    next();
  } catch (error) {
    console.error("Error verifying token:", error.message);
    res.status(403).json({ success: false, message: "Forbidden" });
  }
};

export default authenticateUser;
