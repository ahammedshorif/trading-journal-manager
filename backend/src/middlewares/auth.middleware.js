import { supabaseAdmin } from "../supabaseAdmin";

const authMiddleware = async (req, res, next) => {
  const token = req.headers.authorization?.replace("Bearer ", "")

  if (!token) {
    return res.status(401).json({ message: "No token" })
  }

  const { data, error } = await supabaseAdmin.auth.getUser(token)

  if (error) {
    return res.status(401).json({ message: "Invalid token" })
  }

  req.user = data.user
  next()
}

export default authMiddleware