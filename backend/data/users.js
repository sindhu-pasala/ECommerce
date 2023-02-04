import bcrypt from "bcryptjs";

async function hashPassword(plaintextpassword) {
  const hash = await bcrypt.hash(plaintextpassword, 10);
  return hash;
}
const encryptedPwd = await hashPassword("123456");
const users = [
  {
    name: "Admin User",
    email: "admin@example.com",
    password: encryptedPwd,
    isAdmin: true,
  },
  {
    name: "John Doe",
    email: "john@example.com",
    password: encryptedPwd,
  },
  {
    name: "Jane Doe",
    email: "jane@example.com",
    password: encryptedPwd,
  },
];

export default users;
