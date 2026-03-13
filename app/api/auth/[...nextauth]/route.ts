import NextAuth from "next-auth";
import { authOptions } from "@/lib/auth"; // Pfad zu deiner neuen lib/auth.ts Datei

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
