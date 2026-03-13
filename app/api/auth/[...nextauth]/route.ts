import NextAuth from "next-auth";
// Zähle die Ordner zurück bis zum utils-Ordner:
import { authOptions } from "../../../../utils/auth";

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };

